/**
 * SCENARIO: Generated Hosts
 *
 * Story: Generates hosts with infrastructure metrics and correlated APM services.
 *
 * - `test-host-01` (AWS, us-east-1):
 *   - 65% CPU, 72% Memory, 45% Disk
 *   - Services: `payment-service`, `user-service`
 *
 * - `test-host-02` (GCP, us-central1):
 *   - 35% CPU, 85% Memory, 68% Disk
 *   - Services: `order-service`
 *
 * NOTE: This scenario generates high-volume infrastructure metrics (6 metric types × 2 hosts
 * at 30-second intervals). For faster execution, use shorter time ranges (15-30 minutes):
 *
 * ```
 * node scripts/synthtrace <path> --from "now-15m" --to "now" --clean
 * ```
 *
 * Validate via:
 *
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_hosts",
 *   "tool_params": {
 *     "start": "now-1h",
 *     "end": "now"
 *   }
 * }
 * ```
 */
import type { ApmFields, InfraDocument, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { InfraSynthtraceEsClient } from '../../../../lib/infra/infra_synthtrace_es_client';
interface HostConfig {
    name: string;
    cpuUsage: number;
    memoryUsage: number;
    diskUsage: number;
    cloudProvider: string;
    cloudRegion: string;
    services?: string[];
}
/**
 * Generates infrastructure metrics and APM data for a set of hosts.
 * Can be used both by CLI (via default export) and by API tests (via direct import).
 */
export declare function generateHostsData({ range, infraEsClient, apmEsClient, hosts, }: {
    range: Timerange;
    infraEsClient: InfraSynthtraceEsClient;
    apmEsClient: ApmSynthtraceEsClient;
    hosts: HostConfig[];
}): Array<ScenarioReturnType<InfraDocument | ApmFields>>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields | InfraDocument>;
export default _default;
