import type { CreateKnowledgeBaseRequestParams, CreateKnowledgeBaseResponse, ReadKnowledgeBaseRequestParams, ReadKnowledgeBaseResponse } from '@kbn/elastic-assistant-common';
import type { HttpSetup, IHttpFetchError } from '@kbn/core-http-browser';
/**
 * API call for getting the status of the Knowledge Base. Provide
 * a resource to include the status of that specific resource.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {string} [options.resource] - Resource to get the status of, otherwise status of overall KB
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {Promise<ReadKnowledgeBaseResponse | IHttpFetchError>}
 */
export declare const getKnowledgeBaseStatus: ({ http, resource, signal, }: ReadKnowledgeBaseRequestParams & {
    http: HttpSetup;
    signal?: AbortSignal | undefined;
}) => Promise<ReadKnowledgeBaseResponse | IHttpFetchError>;
/**
 * API call for setting up the Knowledge Base. Provide a resource to set up a specific resource.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {string} [options.resource] - Resource to be added to the KB, otherwise sets up the base KB
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {Promise<CreateKnowledgeBaseResponse>}
 */
export declare const postKnowledgeBase: ({ http, resource, signal, }: CreateKnowledgeBaseRequestParams & {
    http: HttpSetup;
    signal?: AbortSignal | undefined;
}) => Promise<CreateKnowledgeBaseResponse>;
