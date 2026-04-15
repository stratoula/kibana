export type ReplacementsApiErrorKind = 'forbidden' | 'unauthorized' | 'not_found' | 'network' | 'unknown';
export interface ReplacementsApiError extends Error {
    kind: ReplacementsApiErrorKind;
    statusCode?: number;
    body?: unknown;
}
export declare const mapReplacementsApiError: (error: unknown) => ReplacementsApiError;
