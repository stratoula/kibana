/**
 * SCENARIO: Service Topology — Cycle Detection
 *
 * Tests that BFS traversal terminates correctly when the service graph
 * contains a cycle (A→B→A callback pattern).
 *
 * Topology:
 *   cycle-service-a → cycle-service-b → cycle-service-a (callback)
 *
 * This verifies the visitedServices guard prevents infinite traversal.
 *
 * Validate via:
 *
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_service_topology",
 *   "tool_params": {
 *     "start": "now-1h",
 *     "end": "now",
 *     "serviceName": "cycle-service-a"
 *   }
 * }
 * ```
 */
import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
export declare const CYCLE_SERVICE_A: {
    readonly serviceName: "cycle-service-a";
};
export declare const CYCLE_SERVICE_B: {
    readonly serviceName: "cycle-service-b";
    readonly resource: "cycle-b-lb:8080";
};
export declare function generateCycleTopologyData({ range, apmEsClient, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
}): ScenarioReturnType<ApmFields>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields>;
export default _default;
