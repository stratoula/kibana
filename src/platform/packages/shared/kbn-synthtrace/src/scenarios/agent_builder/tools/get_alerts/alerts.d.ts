import type { Timerange } from '@kbn/synthtrace-client';
import type { LogsSynthtraceEsClient } from '../../../../lib/logs/logs_synthtrace_es_client';
import type { ScenarioReturnType } from '../../../../lib/utils/with_client';
export declare function generateSyntheticAlerts({ range, logsEsClient, serviceName, hostName, environment, }: {
    range: Timerange;
    logsEsClient: LogsSynthtraceEsClient;
    serviceName: string;
    hostName: string;
    environment: string;
}): ScenarioReturnType<Record<string, unknown>>;
declare const _default: import("../../../../cli/scenario").Scenario<Record<string, unknown>>;
export default _default;
