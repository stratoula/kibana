export interface UseFetchPromptsParams {
    signal?: AbortSignal | undefined;
    consumer?: string;
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
export declare const useFetchPrompts: (payload?: UseFetchPromptsParams) => import("@kbn/react-query").DefinedUseQueryResult<{
    page: number;
    perPage: number;
    total: number;
    data: {
        id: string;
        name: string;
        promptType: "system" | "quick";
        content: string;
        timestamp?: string | undefined;
        categories?: string[] | undefined;
        color?: string | undefined;
        isNewConversationDefault?: boolean | undefined;
        isDefault?: boolean | undefined;
        consumer?: string | undefined;
        updatedAt?: string | undefined;
        updatedBy?: string | undefined;
        createdAt?: string | undefined;
        createdBy?: string | undefined;
        users?: {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        namespace?: string | undefined;
    }[];
}, unknown>;
