import type { ProfilesApiError } from '../errors';
export declare const getConflictState: (error: unknown) => {
    isConflict: boolean;
    error?: ProfilesApiError;
};
