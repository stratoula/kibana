import type { ToolingLog } from '@kbn/tooling-log';
/**
 * Generates a Docker Compose configuration for running the EDOT Collector (Elastic Distribution of OpenTelemetry Collector) in Gateway mode.
 *
 * @param collectorConfigPath - Path to the EDOT Collector configuration file
 * @param grpcPort - Host port for gRPC endpoint (defaults to 4317)
 * @param httpPort - Host port for HTTP endpoint (defaults to 4318)
 * @returns Docker Compose YAML configuration string
 */
export declare function getDockerComposeYaml({ collectorConfigPath, grpcPort, httpPort, log, }: {
    collectorConfigPath: string;
    grpcPort: number;
    httpPort: number;
    log: ToolingLog;
}): Promise<string>;
