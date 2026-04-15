import type { LogDocument, Timerange } from '@kbn/synthtrace-client';
import type { LogsSynthtraceEsClient } from '../../../../lib/logs/logs_synthtrace_es_client';
import type { ScenarioReturnType } from '../../../../lib/utils/with_client';
/**
 * Baseline time window for log rate analysis (before the spike)
 */
export declare const LOG_RATE_ANALYSIS_SPIKE_BASELINE_WINDOW: {
    readonly start: "now-60m";
    readonly end: "now-20m";
};
/**
 * Deviation time window for log rate analysis (during the spike)
 */
export declare const LOG_RATE_ANALYSIS_SPIKE_DEVIATION_WINDOW: {
    readonly start: "now-20m";
    readonly end: "now";
};
/**
 * Data stream name for log rate analysis spike data
 */
export declare const LOG_RATE_ANALYSIS_SPIKE_DATA_STREAM = "logs-payments.api-default";
/**
 * Generates a spike-pattern log dataset for log rate analysis.
 * Emits steady baseline logs and introduces a flood of timeout errors
 * in the last 20 minutes of the range so the tool can attribute the spike.
 *
 */
export declare function generateLogRateAnalysisSpikeData({ logsEsClient, range, isLogsDb, }: {
    logsEsClient: LogsSynthtraceEsClient;
    range?: Timerange;
    isLogsDb?: boolean;
}): ScenarioReturnType<LogDocument>;
declare const _default: import("../../../../cli/scenario").Scenario<LogDocument>;
export default _default;
