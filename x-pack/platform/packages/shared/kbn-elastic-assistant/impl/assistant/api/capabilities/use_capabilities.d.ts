import type { UseQueryResult } from '@kbn/react-query';
import type { HttpSetup, IHttpFetchError } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
import type { GetCapabilitiesResponse } from '@kbn/elastic-assistant-common';
export interface UseCapabilitiesParams {
    http: HttpSetup;
    toasts?: IToasts;
}
/**
 * Hook for getting the feature capabilities of the assistant
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {IToasts} options.toasts - IToasts
 *
 * @returns {useQuery} hook for getting the status of the Knowledge Base
 */
export declare const useCapabilities: ({ http, toasts, }: UseCapabilitiesParams) => UseQueryResult<GetCapabilitiesResponse, IHttpFetchError>;
