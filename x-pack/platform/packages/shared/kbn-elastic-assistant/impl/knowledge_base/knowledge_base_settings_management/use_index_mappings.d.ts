import type { UseQueryResult } from '@kbn/react-query';
import type { HttpSetup, IHttpFetchError } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
import type { MappingPropertyBase } from '@elastic/elasticsearch/lib/api/types';
export interface Mappings {
    mappings: {
        properties: MappingPropertyBase['properties'];
    };
}
export interface UseIndexMappingParams {
    http: HttpSetup;
    indexName: string;
    toasts?: IToasts;
}
/**
 * Hook for getting index mappings
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} [options.http] - HttpSetup
 * @param {String} [options.indexName] - String
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns {useQuery} hook for getting mappings for a given index
 */
export declare const useIndexMappings: ({ indexName, http, toasts, }: UseIndexMappingParams) => UseQueryResult<Mappings, IHttpFetchError>;
