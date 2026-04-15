/**
 * SCENARIO: `observability.get_traces` data
 *
 * Story: Generates a small set of distributed traces (transactions + spans + error) plus
 * multiple log sequences using a variety of correlation identifiers.
 *
 * This scenario is designed to exercise the tool's capabilities:
 * - Direct trace lookup via `kqlFilter` on `trace.id`
 * - Anchor-based lookup via broader `kqlFilter` (discovers multiple trace.id values)
 * - Using a specific document `_id` as the anchor in `kqlFilter`
 * - Limiting results via `maxTraces` (how many trace ids) and `maxDocsPerTrace` (docs per trace)
 *
 * Validate via:
 *
 * 1) Direct lookup by trace id
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_traces",
 *   "tool_params": {
 *     "start": "now-1h",
 *     "end": "now",
 *     "kqlFilter": "trace.id: \"trace-get-traces-001\"",
 *     "maxTraces": 1
 *   }
 * }
 * ```
 *
 * 2) Anchor from logs by query (may discover multiple trace ids)
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_traces",
 *   "tool_params": {
 *     "start": "now-1h",
 *     "end": "now",
 *     "kqlFilter": "service.name: payment-service",
 *     "maxTraces": 5,
 *     "maxDocsPerTrace": 100
 *   }
 * }
 * ```
 *
 * 3) Anchor from a specific document id
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_traces",
 *   "tool_params": {
 *     "kqlFilter": "_id: \"<document_id>\"",
 *     "maxTraces": 1
 *   }
 * }
 */
import type { ApmFields, LogDocument, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { LogsSynthtraceEsClient } from '../../../../lib/logs/logs_synthtrace_es_client';
interface SpanConfig {
    spanName: string;
    spanType: string;
    spanSubtype: string;
    duration: number;
}
export interface GetTracesScenarioConfig {
    traceId: string;
    serviceName: string;
    environment: string;
    transactionName: string;
    transactionType: string;
    duration: number;
    outcome: 'success' | 'failure';
    error?: {
        message: string;
        type: string;
    };
    children?: SpanConfig[];
}
export interface LogEntry {
    message: string;
    '@timestamp'?: number;
    [key: string]: unknown;
}
export declare const DEFAULT_TRACE_CONFIGS: GetTracesScenarioConfig[];
export declare const DEFAULT_LOGS: LogEntry[];
/**
 * Generates log data.
 *
 * @param range - Time range for log generation
 * @param logsEsClient - Synthtrace ES client
 * @param logs - Optional array of log entries. If not provided, generates default realistic sequences.
 */
export declare function generateLogsData({ range, logsEsClient, logs, }: {
    range: Timerange;
    logsEsClient: LogsSynthtraceEsClient;
    logs: LogEntry[];
}): ScenarioReturnType<LogDocument>;
export declare function createLogSequence({ service, correlation, logs, defaults, }: {
    /** Service name (maps to service.name) */
    service: string;
    /** Correlation field(s) shared by all logs, e.g. { 'trace.id': 'abc' } or { order_id: '123' } */
    correlation: Record<string, string>;
    /** Log entries - each must have `message`, other fields are optional */
    logs: LogEntry[];
    /** Additional fields to apply to all logs */
    defaults?: Record<string, unknown>;
}): LogEntry[];
export declare function generateGetTracesApmDataset({ range, apmEsClient, traces, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
    traces: GetTracesScenarioConfig[];
}): ScenarioReturnType<ApmFields>;
export declare function generateGetTracesLogsData({ range, logsEsClient, config, }: {
    range: Timerange;
    logsEsClient: LogsSynthtraceEsClient;
    config: GetTracesScenarioConfig;
}): ScenarioReturnType<LogDocument>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields | LogDocument>;
export default _default;
