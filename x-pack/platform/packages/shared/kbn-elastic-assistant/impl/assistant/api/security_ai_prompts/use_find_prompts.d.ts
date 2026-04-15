import type { HttpHandler, IToasts } from '@kbn/core/public';
import type { FindSecurityAIPromptsRequestQuery } from '@kbn/elastic-assistant-common';
export interface UseFindPromptsParams {
    context: {
        isAssistantEnabled: boolean;
        httpFetch: HttpHandler;
        toasts?: IToasts;
    };
    signal?: AbortSignal | undefined;
    params: FindSecurityAIPromptsRequestQuery;
}
/**
 * API call for fetching prompts for current spaceId
 *
 * @param {Object} options - The options object.
 * @param {string} options.consumer - prompt consumer
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {useQuery} hook for getting the status of the prompts
 */
export declare const useFindPrompts: (payload: UseFindPromptsParams) => import("@kbn/react-query").DefinedUseQueryResult<{
    prompts: {
        promptId: string;
        prompt: string;
    }[];
}, unknown>;
