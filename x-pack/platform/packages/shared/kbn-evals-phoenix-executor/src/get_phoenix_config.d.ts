export interface PhoenixConfig {
    baseUrl: string;
    headers?: Record<string, string>;
}
export declare function getPhoenixConfig(): PhoenixConfig;
