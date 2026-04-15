import type { ToolingLog } from '@kbn/tooling-log';
/**
 * Ensures the EDOT Collector (Elastic Distribution of OpenTelemetry Collector) is running in Gateway mode.
 * Reads configuration from kibana.dev.yml, generates EDOT Collector configuration,
 * and starts the Docker container.
 *
 * @param log - Tooling logger for output
 * @param signal - Abort signal for cleanup
 * @param grpcPort - Host port for gRPC endpoint (defaults to 4317)
 * @param httpPort - Host port for HTTP endpoint (defaults to 4318)
 */
export declare function ensureEdotCollector({ log, signal, configPath, grpcPort, httpPort, }: {
    log: ToolingLog;
    signal: AbortSignal;
    configPath?: string | undefined;
    grpcPort?: number;
    httpPort?: number;
}): Promise<void>;
