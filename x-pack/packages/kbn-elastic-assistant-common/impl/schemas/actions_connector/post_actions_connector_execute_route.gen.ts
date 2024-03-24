/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { z } from 'zod';

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Execute Connector API endpoint
 *   version: 1
 */

import { UUID, Replacement } from '../conversations/common_attributes.gen';

export type ExecuteConnectorRequestParams = z.infer<typeof ExecuteConnectorRequestParams>;
export const ExecuteConnectorRequestParams = z.object({
  /**
   * The connector's `id` value.
   */
  connectorId: z.string(),
});
export type ExecuteConnectorRequestParamsInput = z.input<typeof ExecuteConnectorRequestParams>;

export type ExecuteConnectorRequestBody = z.infer<typeof ExecuteConnectorRequestBody>;
export const ExecuteConnectorRequestBody = z.object({
  conversationId: UUID.optional(),
  message: z.string().optional(),
  model: z.string().optional(),
  subAction: z.enum(['invokeAI', 'invokeStream']),
  alertsIndexPattern: z.string().optional(),
  allow: z.array(z.string()).optional(),
  allowReplacement: z.array(z.string()).optional(),
  isEnabledKnowledgeBase: z.boolean().optional(),
  isEnabledRAGAlerts: z.boolean().optional(),
  replacements: z.array(Replacement),
  size: z.number().optional(),
});
export type ExecuteConnectorRequestBodyInput = z.input<typeof ExecuteConnectorRequestBody>;

export type ExecuteConnectorResponse = z.infer<typeof ExecuteConnectorResponse>;
export const ExecuteConnectorResponse = z.object({
  data: z.string().optional(),
  connector_id: z.string().optional(),
  replacements: z.array(Replacement).optional(),
  status: z.string().optional(),
  /**
   * Trace Data
   */
  trace_data: z
    .object({
      /**
       * Could be any string, not necessarily a UUID
       */
      transactionId: z.string().optional(),
      /**
       * Could be any string, not necessarily a UUID
       */
      traceId: z.string().optional(),
    })
    .optional(),
});
