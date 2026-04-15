import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { ScenarioReturnType } from '../../../../lib/utils/with_client';
export declare function generateApmErrorData({ range, apmEsClient, serviceName, environment, language, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
    serviceName: string | string[];
    environment: string;
    language: string;
}): ScenarioReturnType<ApmFields>[];
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields>;
export default _default;
