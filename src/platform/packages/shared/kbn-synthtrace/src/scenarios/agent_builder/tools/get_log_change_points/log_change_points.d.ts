import type { LogDocument, Timerange } from '@kbn/synthtrace-client';
import type { LogsSynthtraceEsClient } from '../../../../lib/logs/logs_synthtrace_es_client';
import type { ScenarioReturnType } from '../../../../lib/utils/with_client';
export declare const LOG_CHANGE_POINTS_DATA_STREAM = "logs-app.logs-default";
export declare const LOG_CHANGE_POINTS_ANALYSIS_WINDOW: {
    start: string;
    end: string;
};
export declare const LOG_CHANGE_POINTS_ANALYSIS_SPIKE_WINDOW: {
    start: string;
    end: string;
};
export declare function generateLogChangePointsData({ logsEsClient, range, }: {
    logsEsClient: LogsSynthtraceEsClient;
    range?: Timerange;
}): ScenarioReturnType<LogDocument>;
declare const _default: import("../../../../cli/scenario").Scenario<LogDocument>;
export default _default;
