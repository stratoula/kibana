/**
 * SCENARIO: JVM Runtime Metrics
 *
 * Story: Generates JVM runtime metrics for testing the `get_runtime_metrics` tool.
 * This tool returns CPU usage, heap/non-heap memory, thread count, and GC duration
 * for Java services.
 *
 * Data Sources:
 * - Elastic APM: Uses native JVM field paths (jvm.memory.heap.*, system.process.cpu.*)
 * - OTel Stable Semconv (native ingest): Uses metrics.jvm.* with attributes.jvm.memory.type
 * - OTel Stable Semconv (APM Server ingest): Uses metrics.jvm.* with labels.jvm_memory_type
 *
 * Services:
 * - `java-payment-service` (Elastic APM, production):
 *   - High CPU (75%), moderate memory (500MB/1GB heap), 42 threads
 *
 * - `otel-order-service` (OTel native, production):
 *   - Moderate CPU (65%), high memory (400MB/800MB heap), 35 threads
 *
 * - `otel-apm-user-service` (OTel via APM Server, production):
 *   - Low CPU (55%), moderate memory (300MB/600MB heap), 28 threads
 *
 * Run via CLI:
 * ```
 * node scripts/synthtrace \
 *   src/platform/packages/shared/kbn-synthtrace/src/scenarios/agent_builder/tools/get_runtime_metrics/runtime_metrics.ts \
 *   --from "now-15m" --to "now" --clean
 * ```
 *
 * Validate via:
 * ```
 * POST kbn:///api/agent_builder/tools/_execute
 * {
 *   "tool_id": "observability.get_runtime_metrics",
 *   "tool_params": {
 *     "start": "now-15m",
 *     "end": "now"
 *   }
 * }
 * ```
 */
import type { ApmFields, Timerange } from '@kbn/synthtrace-client';
import type { Client } from '@elastic/elasticsearch';
import type { Scenario } from '../../../../cli/scenario';
import { type ScenarioReturnType } from '../../../../lib/utils/with_client';
import type { ApmSynthtraceEsClient } from '../../../../lib/apm/client/apm_synthtrace_es_client';
export interface ElasticApmJvmServiceConfig {
    name: string;
    environment: string;
    instanceName: string;
    hostName: string;
    cpuPercent: number;
    heapMemoryUsed: number;
    heapMemoryMax: number;
    nonHeapMemoryUsed: number;
    nonHeapMemoryMax: number;
    threadCount: number;
    gcTime: number;
}
export declare const DEFAULT_ELASTIC_APM_SERVICES: ElasticApmJvmServiceConfig[];
/**
 * Generates Elastic APM JVM metrics data.
 * Uses native Elastic APM field paths: jvm.memory.heap.*, system.process.cpu.*, etc.
 */
export declare function generateElasticApmJvmMetrics({ range, apmEsClient, services, }: {
    range: Timerange;
    apmEsClient: ApmSynthtraceEsClient;
    services?: ElasticApmJvmServiceConfig[];
}): ScenarioReturnType<ApmFields>;
export type OtelIngestPath = 'native' | 'apm_server';
export interface OtelJvmServiceConfig {
    name: string;
    environment: string;
    instanceName: string;
    hostName: string;
    ingestPath: OtelIngestPath;
    cpuUtilization: number;
    heapMemoryUsed: number;
    heapMemoryLimit: number;
    nonHeapMemoryUsed: number;
    nonHeapMemoryLimit: number;
    threadCount: number;
    gcDurationSeconds: number;
}
export declare const DEFAULT_OTEL_SERVICES: OtelJvmServiceConfig[];
/**
 * Generates OTel stable semconv JVM metrics documents for direct ES indexing.
 * This is needed because synthtrace doesn't have native OTel metrics support.
 *
 * @param startMs - Start timestamp in milliseconds
 * @param endMs - End timestamp in milliseconds
 * @param services - OTel service configurations
 * @returns Array of documents ready for ES bulk indexing
 */
export declare function generateOtelJvmMetricsDocs({ startMs, endMs, services, }: {
    startMs: number;
    endMs: number;
    services?: OtelJvmServiceConfig[];
}): Array<{
    index: string;
    doc: Record<string, unknown>;
}>;
/**
 * Indexes OTel JVM metrics documents directly to Elasticsearch.
 * Used by tests and the CLI bootstrap phase.
 */
export declare function indexOtelJvmMetrics({ esClient, startMs, endMs, services, }: {
    esClient: Client;
    startMs: number;
    endMs: number;
    services?: OtelJvmServiceConfig[];
}): Promise<void>;
/**
 * Cleans up OTel JVM metrics documents from Elasticsearch.
 */
export declare function cleanupOtelJvmMetrics({ esClient, services, }: {
    esClient: Client;
    services?: OtelJvmServiceConfig[];
}): Promise<void>;
declare const scenario: Scenario<ApmFields>;
export default scenario;
