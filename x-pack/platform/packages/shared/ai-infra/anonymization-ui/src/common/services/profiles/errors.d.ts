export type ProfilesApiErrorKind = 'conflict' | 'forbidden' | 'unauthorized' | 'not_found' | 'network' | 'unknown';
export interface ProfilesApiError extends Error {
    kind: ProfilesApiErrorKind;
    statusCode?: number;
    body?: unknown;
}
export declare const isProfilesApiError: (error: unknown) => error is ProfilesApiError;
export declare const mapProfilesApiError: (error: unknown) => ProfilesApiError;
export declare const ensureProfilesApiError: (error: unknown, fallbackMessage?: string) => ProfilesApiError;
