/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { getRegistryUrl as getRegistryUrlFromIngest } from '@kbn/fleet-plugin/server';
import { isServerlessKibanaFlavor } from '@kbn/security-solution-plugin/scripts/endpoint/common/stack_services';
import { FtrProviderContext } from '../../../../ftr_provider_context_edr_workflows';
import { ROLE } from '../../../../config/services/security_solution_edr_workflows_roles_users';

export default function endpointAPIIntegrationTests(providerContext: FtrProviderContext) {
  const { loadTestFile, getService } = providerContext;

  describe('Endpoint plugin', async function async() {
    const ingestManager = getService('ingestManager');
    const rolesUsersProvider = getService('rolesUsersProvider');
    const kbnClient = getService('kibanaServer');
    const log = getService('log');
    const endpointRegistryHelpers = getService('endpointRegistryHelpers');

    const roles = Object.values(ROLE);
    before(async () => {
      try {
        if (!endpointRegistryHelpers.isRegistryEnabled()) {
          log.warning('These tests are being run with an external package registry');
        }

        const registryUrl =
          endpointRegistryHelpers.getRegistryUrlFromTestEnv() ?? getRegistryUrlFromIngest();
        log.info(`Package registry URL for tests: ${registryUrl}`);
        await ingestManager.setup();
      } catch (err) {
        log.warning(`Error setting up ingestManager: ${err}`);
      }

      if (!(await isServerlessKibanaFlavor(kbnClient))) {
        // create role/user
        for (const role of roles) {
          await rolesUsersProvider.createRole({ predefinedRole: role });
          await rolesUsersProvider.createUser({ name: role, roles: [role] });
        }
      }
    });

    after(async () => {
      if (!(await isServerlessKibanaFlavor(kbnClient))) {
        // delete role/user
        await rolesUsersProvider.deleteUsers(roles);
        await rolesUsersProvider.deleteRoles(roles);
      }
    });

    // Remember to make sure the suite is enabled in .buildkite/pipelines/security_solution_quality_gate/mki_periodic/mki_periodic_defend_workflows.yml when adding new tests without @skipInServerlessMKI
    loadTestFile(require.resolve('./trusted_apps'));
    loadTestFile(require.resolve('./event_filters'));
    loadTestFile(require.resolve('./host_isolation_exceptions'));
    loadTestFile(require.resolve('./blocklists'));
  });
}
