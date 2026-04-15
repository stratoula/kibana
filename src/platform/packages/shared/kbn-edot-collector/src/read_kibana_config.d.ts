import type { ToolingLog } from '@kbn/tooling-log';
interface ElasticsearchConfig {
    hosts: string;
    username: string;
    password: string;
}
interface KibanaConfig {
    elasticsearch: ElasticsearchConfig;
}
/**
 * Reads Kibana configuration from a single config file.
 * Uses provided configPath or defaults to kibana.dev.yml.
 * Environment variables override config file values.
 */
export declare const readKibanaConfig: (log: ToolingLog, configPath?: string) => KibanaConfig;
export {};
