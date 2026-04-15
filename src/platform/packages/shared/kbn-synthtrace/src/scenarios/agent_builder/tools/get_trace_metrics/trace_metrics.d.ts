/**
 * SCENARIO: Generated Trace Metrics
 *
 * Story: Generates APM transaction data across multiple services with different hosts,
 * containers, Kubernetes pods, environments, and failure rates to verify the `get_trace_metrics`
 * tool and its filtering/grouping capabilities.
 *
 * Services:
 * - `payment-service` (production, host-01, container-payment-001, k8s pod)
 *   - POST /api/payment (10% failure rate)
 *   - GET /api/payment/status (0% failure rate)
 * - `user-service` (production, host-01, container-user-001, k8s pod)
 *   - GET /api/user (5% failure rate)
 *   - page-load (2% failure rate)
 * - `order-service` (staging, host-02, container-order-001, k8s pod)
 *   - POST /api/order (20% failure rate)
 *   - worker-process (15% failure rate)
 * - `notification-service` (staging, host-02, container-notify-001, k8s pod)
 *   - send-notification (30% failure rate)
 *
 * Validate via:
 *
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_trace_metrics",
 *   "tool_params": {
 *     "start": "now-1h",
 *     "end": "now"
 *   }
 * }
 * ```
 */
import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
/**
 * Configuration for a transaction within a service
 */
export interface TraceMetricsTransactionConfig {
    name: string;
    type: string;
    duration: number;
    failureRate: number;
    /** Custom labels to add to this specific transaction */
    labels?: Record<string, string>;
}
/**
 * Configuration for a service to generate trace metrics
 */
export interface TraceMetricsServiceConfig {
    name: string;
    environment: string;
    hostName: string;
    containerId?: string;
    kubernetesPodName?: string;
    transactions: TraceMetricsTransactionConfig[];
    /** Custom labels to add to all transactions for this service */
    labels?: Record<string, string>;
}
/**
 * Generates APM transaction data for trace metrics testing.
 * Can be used both by CLI (via default export) and by API tests (via direct import).
 */
export declare function generateTraceMetricsData({ range, apmEsClient, services, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
    services: TraceMetricsServiceConfig[];
}): ScenarioReturnType<ApmFields>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields>;
export default _default;
