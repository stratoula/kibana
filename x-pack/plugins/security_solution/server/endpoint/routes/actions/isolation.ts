/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import moment from 'moment';
import { RequestHandler } from 'src/core/server';
import uuid from 'uuid';
import { TypeOf } from '@kbn/config-schema';
import { HostIsolationRequestSchema } from '../../../../common/endpoint/schema/actions';
import { ISOLATE_HOST_ROUTE, UNISOLATE_HOST_ROUTE } from '../../../../common/endpoint/constants';
import { AGENT_ACTIONS_INDEX } from '../../../../../fleet/common';
import { EndpointAction } from '../../../../common/endpoint/types';
import {
  SecuritySolutionPluginRouter,
  SecuritySolutionRequestHandlerContext,
} from '../../../types';
import { getAgentIDsForEndpoints } from '../../services';
import { EndpointAppContext } from '../../types';

export const userCanIsolate = (roles: readonly string[] | undefined): boolean => {
  // only superusers can write to the fleet index (or look up endpoint data to convert endp ID to agent ID)
  if (!roles || roles.length === 0) {
    return false;
  }
  return roles.includes('superuser');
};

/**
 * Registers the Host-(un-)isolation routes
 */
export function registerHostIsolationRoutes(
  router: SecuritySolutionPluginRouter,
  endpointContext: EndpointAppContext
) {
  // perform isolation
  router.post(
    {
      path: ISOLATE_HOST_ROUTE,
      validate: HostIsolationRequestSchema,
      options: { authRequired: true, tags: ['access:securitySolution'] },
    },
    isolationRequestHandler(endpointContext, true)
  );

  // perform UN-isolate
  router.post(
    {
      path: UNISOLATE_HOST_ROUTE,
      validate: HostIsolationRequestSchema,
      options: { authRequired: true, tags: ['access:securitySolution'] },
    },
    isolationRequestHandler(endpointContext, false)
  );
}

export const isolationRequestHandler = function (
  endpointContext: EndpointAppContext,
  isolate: boolean
): RequestHandler<
  unknown,
  unknown,
  TypeOf<typeof HostIsolationRequestSchema.body>,
  SecuritySolutionRequestHandlerContext
> {
  return async (context, req, res) => {
    if (
      (!req.body.agent_ids || req.body.agent_ids.length === 0) &&
      (!req.body.endpoint_ids || req.body.endpoint_ids.length === 0)
    ) {
      return res.badRequest({
        body: {
          message: 'At least one agent ID or endpoint ID is required',
        },
      });
    }

    // only allow admin users
    const user = endpointContext.service.security?.authc.getCurrentUser(req);
    if (!userCanIsolate(user?.roles)) {
      return res.forbidden({
        body: {
          message: 'You do not have permission to perform this action',
        },
      });
    }

    // isolation requires plat+
    if (isolate && !endpointContext.service.getLicenseService()?.isPlatinumPlus()) {
      return res.forbidden({
        body: {
          message: 'Your license level does not allow for this action',
        },
      });
    }

    // translate any endpoint_ids into agent_ids
    let agentIDs = req.body.agent_ids?.slice() || [];
    if (req.body.endpoint_ids && req.body.endpoint_ids.length > 0) {
      const newIDs = await getAgentIDsForEndpoints(req.body.endpoint_ids, context, endpointContext);
      agentIDs = agentIDs.concat(newIDs);
    }
    agentIDs = [...new Set(agentIDs)]; // dedupe

    // create an Action ID and dispatch it to ES & Fleet Server
    const esClient = context.core.elasticsearch.client.asCurrentUser;
    const actionID = uuid.v4();
    let result;
    try {
      result = await esClient.index({
        index: AGENT_ACTIONS_INDEX,
        body: {
          action_id: actionID,
          '@timestamp': moment().toISOString(),
          expiration: moment().add(2, 'weeks').toISOString(),
          type: 'INPUT_ACTION',
          input_type: 'endpoint',
          agents: agentIDs,
          user_id: user?.username,
          data: {
            command: isolate ? 'isolate' : 'unisolate',
            comment: req.body.comment,
          },
        } as EndpointAction,
      });
    } catch (e) {
      return res.customError({
        statusCode: 500,
        body: { message: e },
      });
    }

    if (result.statusCode !== 201) {
      return res.customError({
        statusCode: 500,
        body: {
          message: result.body.result,
        },
      });
    }
    return res.ok({
      body: {
        action: actionID,
      },
    });
  };
};
