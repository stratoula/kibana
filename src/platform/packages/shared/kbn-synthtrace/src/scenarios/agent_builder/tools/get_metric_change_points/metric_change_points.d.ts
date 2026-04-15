import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { ScenarioReturnType } from '../../../../lib/utils/with_client';
export declare const METRIC_CHANGE_POINTS_INDEX = "metrics-apm.app.test-service-default";
export declare const METRIC_CHANGE_POINTS_ANALYSIS_WINDOW: {
    start: string;
    end: string;
};
export declare const METRIC_CHANGE_POINTS_ANALYSIS_SPIKE_WINDOW: {
    start: string;
    end: string;
};
export declare function generateMetricChangePointsData({ range, apmEsClient, }: {
    range?: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
}): ScenarioReturnType<ApmFields>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields>;
export default _default;
