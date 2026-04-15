export interface EdotCollectorParams {
    elasticsearchEndpoint: string;
    username: string;
    password: string;
}
/**
 * Returns the EDOT Collector configuration as a plain object.
 * Useful when callers need to extend the config before serializing.
 *
 * @param elasticsearchEndpoint - The Elasticsearch endpoint URL
 * @param username - Elasticsearch username
 * @param password - Elasticsearch password
 */
export declare function getEdotCollectorConfig({ elasticsearchEndpoint, username, password, }: EdotCollectorParams): Record<string, unknown>;
/**
 * Generates the OpenTelemetry Collector configuration for the EDOT Collector.
 *
 * @returns YAML configuration string for the EDOT Collector
 */
export declare function getEdotCollectorConfiguration(params: EdotCollectorParams): string;
