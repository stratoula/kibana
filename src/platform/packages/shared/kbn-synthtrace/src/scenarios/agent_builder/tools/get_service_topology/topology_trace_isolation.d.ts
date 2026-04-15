/**
 * SCENARIO: Service Topology — Trace Isolation
 *
 * Tests that topology queries respect trace boundaries when an instrumented
 * intermediate service is shared across separate traces.
 *
 * Topology:
 *   Trace 1: api-gateway → payment-service → kafka-consumer → postgres
 *   Trace 2: batch-worker → kafka-consumer → redis
 *
 * kafka-consumer appears in both traces but with different downstream deps.
 * Querying api-gateway downstream should show kafka-consumer → postgres
 * but NOT kafka-consumer → redis (which belongs to batch-worker's trace).
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
 *     "serviceName": "api-gateway"
 *   }
 * }
 * ```
 */
import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
export declare const API_GATEWAY_SERVICE: {
    readonly serviceName: "api-gateway";
};
export declare const PAYMENT_SERVICE: {
    readonly serviceName: "payment-service";
    readonly resource: "payment-lb:3000";
};
export declare const KAFKA_CONSUMER_SERVICE: {
    readonly serviceName: "kafka-consumer";
    readonly resource: "kafka-broker:9092";
};
export declare const BATCH_WORKER_SERVICE: {
    readonly serviceName: "batch-worker";
};
export declare const POSTGRES_DB: {
    readonly resource: "postgres:5432";
    readonly spanType: "db";
    readonly spanSubtype: "postgresql";
};
export declare const REDIS_DB: {
    readonly resource: "redis:6379";
    readonly spanType: "db";
    readonly spanSubtype: "redis";
};
export declare function generateTraceIsolationData({ range, apmEsClient, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
}): ScenarioReturnType<ApmFields>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields>;
export default _default;
