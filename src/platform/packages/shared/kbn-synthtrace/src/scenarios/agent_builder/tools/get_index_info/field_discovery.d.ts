/**
 * SCENARIO: Field Discovery Test Data
 *
 * Story: An SRE investigates a payment processing incident. The get_index_info tool
 * helps them discover what data is available and drill down to specific fields.
 *
 * Drill-down demonstration:
 * 1. get-index-patterns → See data streams: logs, metrics, traces
 * 2. list-fields on metrics-system.cpu → Find system.cpu.* fields
 * 3. get-field-values on host.name → See hosts: payment-host-01, order-host-02
 * 4. get-field-values on message (text) → See log message samples
 *
 * Services:
 * - `payment-service` (production) - High latency issues
 * - `order-service` (production) - Downstream dependency
 * - `notification-service` (staging) - Healthy baseline
 *
 * Hosts:
 * - `payment-host-01` (AWS, us-east-1): 85% CPU, 90% Memory - stressed
 * - `order-host-02` (AWS, us-west-2): 45% CPU, 60% Memory - normal
 * - `notification-host-03` (GCP, europe-west1): 25% CPU, 40% Memory - healthy
 *
 * Field types covered:
 * - keyword: service.name, host.name, cloud.provider, log.level
 * - numeric: system.cpu.total.norm.pct, transaction.duration.us
 * - date: @timestamp
 * - boolean: event.ingested
 * - text: message (log messages with varied content)
 *
 * Run:
 * ```
 * node scripts/synthtrace \
 *   src/platform/packages/shared/kbn-synthtrace/src/scenarios/agent_builder/tools/get_index_info/field_discovery.ts \
 *   --from "now-15m" --to "now" --clean
 * ```
 */
import type { ApmFields, InfraDocument, LogDocument, Timerange } from '@kbn/synthtrace-client';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
import type { InfraSynthtraceEsClient } from '../../../../lib/infra/infra_synthtrace_es_client';
import type { LogsSynthtraceEsClient } from '../../../../lib/logs/logs_synthtrace_es_client';
interface ServiceConfig {
    name: string;
    environment: string;
    host: string;
    agentName: 'nodejs' | 'java' | 'go';
    errorRate: number;
    avgLatencyMs: number;
}
interface HostConfig {
    name: string;
    cpuUsage: number;
    memoryUsage: number;
    diskUsage: number;
    cloudProvider: 'aws' | 'gcp';
    cloudRegion: string;
    k8sNamespace: string;
    k8sPodName: string;
}
export interface FieldDiscoveryDataParams {
    range: Timerange;
    infraEsClient: InfraSynthtraceEsClient;
    apmEsClient: ApmSynthtraceEsClient;
    logsEsClient: LogsSynthtraceEsClient;
    hosts?: HostConfig[];
    services?: ServiceConfig[];
}
/**
 * Generates comprehensive observability data for testing get_index_info.
 * Exports reusable function for API integration tests.
 */
export declare function generateFieldDiscoveryData({ range, infraEsClient, apmEsClient, logsEsClient, hosts, services, }: FieldDiscoveryDataParams): Array<ScenarioReturnType<InfraDocument | ApmFields | LogDocument>>;
declare const _default: import("../../../../cli/scenario").Scenario<ApmFields | InfraDocument | LogDocument>;
export default _default;
