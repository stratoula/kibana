/**
 * SCENARIO: Generated Services
 *
 * Story: Generates multiple services from APM and Logs in different environments
 * (production, staging, development) to verify `get_services` tool and its filtering capabilities.
 *
 * APM Services:
 * - `checkout-service` (production, nodejs)
 * - `payment-service` (production, java) - 50% error rate
 * - `frontend` (staging, rum-js)
 * - `experimental-service` (development, ruby)
 *
 * Logs-only Services:
 * - `log-processor` (production)
 * - `data-ingestion` (staging)
 *
 * Validate via:
 *
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_services",
 *   "tool_params": {
 *     "start": "now-1h",
 *     "end": "now"
 *   }
 * }
 * ```
 */
import type { ApmFields, LogDocument, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { LogsSynthtraceEsClient } from '../../../../lib/logs/logs_synthtrace_es_client';
/**
 * Configuration for an APM service to generate
 */
export interface ApmServiceConfig {
    name: string;
    environment: string;
    agentName: string;
    transactionName: string;
    transactionType: string;
    duration: number;
    errorRate?: number;
}
/**
 * Configuration for a logs-only service to generate
 */
export interface LogsServiceConfig {
    name: string;
    environment?: string;
    dataset?: string;
}
/**
 * Generates APM service data.
 * Can be used both by CLI (via default export) and by API tests (via direct import).
 */
export declare function generateApmServicesData({ range, apmEsClient, services, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
    services: ApmServiceConfig[];
}): ScenarioReturnType<ApmFields>;
/**
 * Generates logs data with service.name field.
 * Can be used both by CLI (via default export) and by API tests (via direct import).
 */
export declare function generateLogsServicesData({ range, logsEsClient, services, }: {
    range: Timerange;
    logsEsClient: LogsSynthtraceEsClient;
    services: LogsServiceConfig[];
}): ScenarioReturnType<LogDocument>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields | LogDocument>;
export default _default;
