import type { UseQueryResult } from '@kbn/react-query';
import type { HttpSetup, IHttpFetchError } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
import type { ReadKnowledgeBaseResponse } from '@kbn/elastic-assistant-common';
import type { InstallationStatus } from '@kbn/product-doc-base-plugin/common/install_status';
export interface UseKnowledgeBaseStatusParams {
    http: HttpSetup;
    resource?: string;
    toasts?: IToasts;
    enabled: boolean;
}
/**
 * Hook for getting the status of the Knowledge Base. Provide a resource name to include
 * the status for that specific resource within the KB.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns {useQuery} hook for getting the status of the Knowledge Base
 */
export declare const useKnowledgeBaseStatus: ({ http, resource, toasts, enabled, }: UseKnowledgeBaseStatusParams) => UseQueryResult<ReadKnowledgeBaseResponse & {
    product_documentation_status: InstallationStatus;
}, IHttpFetchError>;
/**
 * Use this hook to invalidate the Knowledge Base Status cache. For example,
 * Knowledge Base actions setting up, adding resources, or deleting should lead
 * to cache invalidation.
 *
 * @returns {Function} - Function to invalidate the Knowledge Base Status cache
 */
export declare const useInvalidateKnowledgeBaseStatus: () => () => void;
/**
 * Helper for determining if Knowledge Base setup is complete.
 *
 * Note: Consider moving to API
 *
 * @param kbStatus ReadKnowledgeBaseResponse
 */
export declare const isKnowledgeBaseSetup: (kbStatus: ReadKnowledgeBaseResponse | undefined) => boolean;
