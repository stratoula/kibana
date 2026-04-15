import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common';
export interface UseFetchAnonymizationFieldsParams {
    page?: number;
    perPage?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
    signal?: AbortSignal;
    filter?: string;
    all?: boolean;
}
export interface FetchAnonymizationFields {
    refetch: () => void;
    data: FindAnonymizationFieldsResponse;
    isFetched: boolean;
    isFetching: boolean;
    isError: boolean;
    isLoading: boolean;
}
export declare const QUERY_ALL: {
    page: number;
    perPage: number;
};
export declare const DEFAULTS: {
    sortField: string;
    sortOrder: string;
    page: number;
    perPage: number;
};
/**
 * API call for fetching anonymization fields for current spaceId
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {useInfiniteQuery} hook for getting the status of the anonymization fields
 */
export declare const useFetchAnonymizationFields: (params?: UseFetchAnonymizationFieldsParams) => FetchAnonymizationFields;
