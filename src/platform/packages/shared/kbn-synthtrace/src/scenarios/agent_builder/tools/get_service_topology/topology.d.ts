/**
 * SCENARIO: Service Topology
 *
 * Generates a multi-hop service topology with instrumented services and
 * uninstrumented dependencies (databases, caches, message queues).
 *
 * IMPORTANT: The span.destination.service.resource values intentionally differ from
 * the service.name values (e.g., "checkout-proxy:5050" instead of "checkout-service").
 * This prevents tests from passing if someone reintroduces heuristic matching on
 * span.destination.service.resource. The implementation must rely on resolved
 * target['service.name'] (from the parent.id → span.id join between instrumented services).
 *
 * Topology:
 *
 *   frontend (nodejs)
 *     → checkout-service (java) [destination: "checkout-proxy:5050"]
 *         → postgres (db)
 *         → redis (cache)
 *         → kafka (messaging)
 *     → recommendation-service (python) [destination: "recommendation-lb:8080"]
 *         → postgres (db)
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
 *     "serviceName": "frontend"
 *   }
 * }
 * ```
 */
import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
export declare const FRONTEND_SERVICE: {
    readonly serviceName: "frontend";
};
export declare const CHECKOUT_SERVICE: {
    readonly serviceName: "checkout-service";
    readonly resource: "checkout-proxy:5050";
};
export declare const RECOMMENDATION_SERVICE: {
    readonly serviceName: "recommendation-service";
    readonly resource: "recommendation-lb:8080";
};
export declare const POSTGRES_DEPENDENCY: {
    readonly resource: "postgres";
    readonly spanType: "db";
    readonly spanSubtype: "postgresql";
};
export declare const REDIS_DEPENDENCY: {
    readonly resource: "redis";
    readonly spanType: "db";
    readonly spanSubtype: "redis";
};
export declare const KAFKA_DEPENDENCY: {
    readonly resource: "kafka";
    readonly spanType: "messaging";
    readonly spanSubtype: "kafka";
};
export declare function generateTopologyData({ range, apmEsClient, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
}): ScenarioReturnType<ApmFields>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields>;
export default _default;
