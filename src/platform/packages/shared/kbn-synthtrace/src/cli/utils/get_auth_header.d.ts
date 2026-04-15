export declare const getApiKeyHeader: (apiKey?: string) => {
    Authorization: string;
} | undefined;
export declare const getBasicAuthHeader: (username?: string, password?: string) => {
    Authorization: string;
} | {
    Authorization?: undefined;
};
