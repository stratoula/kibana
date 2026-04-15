import type { HttpSetup, IHttpFetchError, ResponseErrorBody } from '@kbn/core/public';
import type { IToasts } from '@kbn/core-notifications-browser';
import type { FindKnowledgeBaseEntriesRequestQuery } from '@kbn/elastic-assistant-common';
export interface UseKnowledgeBaseEntriesParams {
    http: HttpSetup;
    query?: FindKnowledgeBaseEntriesRequestQuery;
    signal?: AbortSignal | undefined;
    toasts?: IToasts;
    enabled?: boolean;
    isRefetching?: boolean;
}
export declare const KNOWLEDGE_BASE_ENTRY_QUERY_KEY: (number | "2023-10-31" | "/api/security_ai_assistant/knowledge_base/entries/_find")[];
/**
 * Hook for fetching Knowledge Base Entries.
 *
 * Note: RBAC is handled at kbDataClient layer, so unless user has KB feature privileges, this will only return system and their own user KB entries.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {Function} [options.query] - Query params to include, like filters, pagination, etc.
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns hook for fetching Knowledge Base Entries
 */
export declare const useKnowledgeBaseEntries: ({ http, query, signal, toasts, enabled, isRefetching, }: UseKnowledgeBaseEntriesParams) => import("@kbn/react-query").DefinedUseQueryResult<{
    page: number;
    perPage: number;
    total: number;
    data: ({
        name: string;
        namespace: string;
        global: boolean;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        id: string;
        createdAt: string;
        createdBy: string;
        updatedAt: string;
        updatedBy: string;
        type: "document";
        kbResource: "user" | "security_labs" | "defend_insights";
        source: string;
        text: string;
        required?: boolean | undefined;
        vector?: {
            modelId: string;
            tokens: {
                [x: string]: number;
            };
        } | undefined;
    } | {
        name: string;
        namespace: string;
        global: boolean;
        users: {
            id?: string | undefined;
            name?: string | undefined;
        }[];
        id: string;
        createdAt: string;
        createdBy: string;
        updatedAt: string;
        updatedBy: string;
        type: "index";
        index: string;
        field: string;
        description: string;
        queryDescription: string;
        inputSchema?: {
            fieldName: string;
            fieldType: string;
            description: string;
        }[] | undefined;
        outputFields?: string[] | undefined;
    })[];
}, IHttpFetchError<ResponseErrorBody>>;
/**
 * Use this hook to invalidate the Knowledge Base Entries cache. For example, adding,
 * editing, or deleting any Knowledge Base entries should lead to cache invalidation.
 *
 * @returns {Function} - Function to invalidate the Knowledge Base Entries cache
 */
export declare const useInvalidateKnowledgeBaseEntries: () => () => void;
