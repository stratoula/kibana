import type { HttpSetup, IHttpFetchError } from '@kbn/core-http-browser';
import type { GetCapabilitiesResponse } from '@kbn/elastic-assistant-common';
export interface GetCapabilitiesParams {
    http: HttpSetup;
    signal?: AbortSignal | undefined;
}
/**
 * API call for fetching assistant capabilities
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {Promise<GetCapabilitiesResponse | IHttpFetchError>}
 */
export declare const getCapabilities: ({ http, signal, }: GetCapabilitiesParams) => Promise<GetCapabilitiesResponse | IHttpFetchError>;
