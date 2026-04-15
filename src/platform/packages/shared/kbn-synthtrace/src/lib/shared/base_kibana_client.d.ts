export type KibanaClientFetchOptions = RequestInit & {
    ignore?: number[];
    timeout?: number;
};
type KibanaClientFetchOptionsWithIgnore = RequestInit & {
    ignore: number[];
    timeout?: number;
};
export declare class KibanaClientHttpError extends Error {
    readonly statusCode: number;
    readonly data?: unknown | undefined;
    constructor(message: string, statusCode: number, data?: unknown | undefined);
}
export declare class KibanaClient {
    private target;
    private headers;
    constructor(options: {
        target: string;
        headers?: Record<string, string>;
    });
    fetch<T>(pathname: string, options: KibanaClientFetchOptions): Promise<T>;
    fetch<T>(pathname: string, options: KibanaClientFetchOptionsWithIgnore): Promise<undefined>;
}
export {};
