/**
 * SCENARIO: Log Groups - Logs and Exceptions
 *
 * Story: Generates diverse log patterns, APM errors, and OTel log exceptions for testing
 * the `get_log_groups` tool. This tool returns three categories:
 * - spanExceptionGroups: Span exceptions from APM
 * - logExceptionGroups: OTel log exceptions
 * - nonExceptionLogGroups: Regular log messages
 *
 * Regular Log Patterns (payment-service):
 * - "Processing payment transaction for order #..." (Info, Frequent, High Cardinality)
 * - "Payment transaction completed successfully" (Info, Frequent, Low Cardinality)
 * - "Payment processing failed: connection timeout" (Error, Occasional)
 * - "Payment gateway response time exceeded threshold" (Warn, Occasional)
 * - "Debug: Payment API called with request_id=..." (Debug, Very Frequent, High Cardinality)
 *
 * APM Error Services:
 * - `payment-service` (production)
 *   - NullPointerException in PaymentProcessor.processPayment (handled, high volume)
 *   - TimeoutException in PaymentGateway.connect (unhandled, medium volume)
 * - `user-service` (production)
 *   - ValidationException in UserValidator.validate (handled, medium volume)
 * - `order-service` (staging)
 *   - OutOfStockException in InventoryService.reserve (handled, high volume)
 *
 * OTel Log Exception Services:
 * - `notification-service` (production)
 *   - SmtpConnectionException: "Failed to connect to SMTP server" (high volume)
 *   - TemplateRenderException: "Failed to render email template" (medium volume)
 * - `analytics-service` (production)
 *   - DataPipelineException: "Pipeline processing failed" (medium volume)
 *
 * Validate via:
 *
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_log_groups",
 *   "tool_params": {
 *     "start": "now-1h",
 *     "end": "now"
 *   }
 * }
 * ```
 */
import type { ApmFields, APMStacktrace, LogDocument, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { LogsSynthtraceEsClient } from '../../../../lib/logs/logs_synthtrace_es_client';
/**
 * Generates log data with various categories/patterns for a service.
 * These will appear in `nonExceptionLogGroups` response.
 */
export declare function generateLogCategoriesData({ range, logsEsClient, serviceName, serviceEnvironment, }: {
    range: Timerange;
    logsEsClient: LogsSynthtraceEsClient;
    serviceName: string;
    serviceEnvironment?: string;
}): ScenarioReturnType<LogDocument>;
/**
 * Configuration for an error type within a service
 */
export interface ErrorConfig {
    type: string;
    message: string;
    culprit: string;
    handled: boolean;
    rate: number;
    stacktrace?: APMStacktrace[];
    /** Optional downstream dependency for failed outbound span generation. */
    downstreamServiceResource?: string;
    /** Optional span name for downstream dependency. */
    spanName?: string;
    /** Optional span type for downstream dependency. */
    spanType?: string;
    /** Optional span subtype for downstream dependency. */
    spanSubtype?: string;
    /** Optional span duration (ms) for downstream dependency. */
    spanDuration?: number;
}
/**
 * Configuration for a service to generate error data
 */
export interface ErrorServiceConfig {
    name: string;
    environment: string;
    agentName: string;
    transactionName: string;
    errors: ErrorConfig[];
}
/**
 * Default service configurations for testing error groups.
 * These will appear in `spanExceptionGroups` response.
 */
export declare const DEFAULT_ERROR_SERVICES: ErrorServiceConfig[];
/**
 * Configuration for an OTel log exception
 */
export interface LogExceptionConfig {
    type: string;
    message: string;
    rate: number;
    stacktrace?: string;
}
/**
 * Configuration for a service that emits exceptions via logs (OTel format)
 */
export interface LogExceptionServiceConfig {
    name: string;
    environment: string;
    exceptions: LogExceptionConfig[];
}
/**
 * Default OTel log exception services for testing.
 * These will appear in `logExceptionGroups` response.
 */
export declare const DEFAULT_LOG_EXCEPTION_SERVICES: LogExceptionServiceConfig[];
/**
 * Generates APM error data for error groups testing.
 * These will appear in `spanExceptionGroups` response.
 */
export declare function generateErrorGroupsData({ range, apmEsClient, services, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
    services: ErrorServiceConfig[];
}): ScenarioReturnType<ApmFields>;
/**
 * Generates OTel log exception data for log exception groups testing.
 * These represent exceptions logged via OTel semantic conventions (event.name: "exception").
 * These will appear in `logExceptionGroups` response.
 */
export declare function generateLogExceptionGroupsData({ range, logsEsClient, services, }: {
    range: Timerange;
    logsEsClient: LogsSynthtraceEsClient;
    services: LogExceptionServiceConfig[];
}): ScenarioReturnType<LogDocument>;
/**
 * Generates all data for the get_log_groups tool:
 * - Regular log categories (nonExceptionLogGroups)
 * - APM error groups (spanExceptionGroups)
 * - OTel log exceptions (logExceptionGroups)
 */
export declare function generateAllLogGroupsData({ range, apmEsClient, logsEsClient, logCategoriesServiceName, apmServices, logExceptionServices, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
    logsEsClient: LogsSynthtraceEsClient;
    logCategoriesServiceName?: string;
    apmServices?: ErrorServiceConfig[];
    logExceptionServices?: LogExceptionServiceConfig[];
}): Array<ScenarioReturnType<ApmFields> | ScenarioReturnType<LogDocument>>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields | LogDocument>;
export default _default;
