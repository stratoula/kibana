import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { ScenarioReturnType } from '../../../../lib/utils/with_client';
export declare const TRACE_CHANGE_POINTS_SERVICE_NAME = "test-service";
export declare const TRACE_CHANGE_POINTS_ANALYSIS_WINDOW: {
    start: string;
    end: string;
};
export declare const TRACE_CHANGE_POINTS_ANALYSIS_SPIKE_WINDOW: {
    start: string;
    end: string;
};
export declare function generateTraceChangePointsData({ range, apmEsClient, }: {
    range?: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
}): ScenarioReturnType<ApmFields>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields>;
export default _default;
