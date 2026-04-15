import type { HttpSetup, IHttpFetchError, ResponseErrorBody } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
export interface UseSetupKnowledgeBaseParams {
    http: HttpSetup;
    toasts?: IToasts;
}
/**
 * Hook for setting up the Knowledge Base. Provide a resource name to set
 * up a specific part of the KB.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns {useMutation} mutation hook for setting up the Knowledge Base
 */
export declare const useSetupKnowledgeBase: ({ http, toasts }: UseSetupKnowledgeBaseParams) => import("@kbn/react-query").UseMutationResult<{
    success?: boolean | undefined;
}, IHttpFetchError<ResponseErrorBody>, string | void | undefined, unknown>;
