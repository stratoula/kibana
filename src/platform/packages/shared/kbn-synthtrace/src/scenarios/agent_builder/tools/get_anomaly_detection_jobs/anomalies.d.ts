/**
 * SCENARIO: APM anomaly detection
 *
 * Story: the production checkout service recently shipped a regression that caused
 * throughput and latency anomalies. The scenario generates a
 * clear spike and creates the APM anomaly detection job (`POST /internal/apm/settings/anomaly-detection/jobs`).
 *
 * Validate via:
 *
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_anomaly_detection_jobs",
 *   "tool_params": {}
 * }
 * ```
 */
import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import type { Client } from '@elastic/elasticsearch';
import type { Scenario } from '../../../../cli/scenario';
import type { KibanaClient } from '../../../../lib/shared/base_kibana_client';
import type { Logger } from '../../../../lib/utils/create_logger';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { ScenarioReturnType } from '../../../../lib/utils/with_client';
export declare function generateApmDataWithAnomalies({ apmEsClient, range, serviceName, environment, language, }: {
    apmEsClient: ApmSynthtraceEsClient;
    range: Timerange;
    serviceName: string;
    environment: string;
    language: string;
}): ScenarioReturnType<ApmFields>;
export declare function createApmAnomalyDetectionJob(kibanaClient: KibanaClient, environment: string): Promise<void>;
export declare function cleanupApmAnomalyDetectionJobs(esClient: Client, logger: Logger): Promise<void>;
declare const scenario: Scenario<ApmFields>;
export default scenario;
