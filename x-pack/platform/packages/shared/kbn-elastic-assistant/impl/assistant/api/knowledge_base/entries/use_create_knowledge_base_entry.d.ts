import type { HttpSetup, IHttpFetchError, ResponseErrorBody } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
export interface UseCreateKnowledgeBaseEntryParams {
    http: HttpSetup;
    signal?: AbortSignal;
    toasts?: IToasts;
}
/**
 * Hook for creating a Knowledge Base Entry
 *
 * @param {Object} options - The options object
 * @param {HttpSetup} options.http - HttpSetup
 * @param {AbortSignal} [options.signal] - AbortSignal
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns mutation hook for creating a Knowledge Base Entry
 *
 */
export declare const useCreateKnowledgeBaseEntry: ({ http, signal, toasts, }: UseCreateKnowledgeBaseEntryParams) => import("@kbn/react-query").UseMutationResult<{
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
}, IHttpFetchError<ResponseErrorBody>, {
    name: string;
    type: "document";
    kbResource: "user" | "security_labs" | "defend_insights";
    source: string;
    text: string;
    namespace?: string | undefined;
    global?: boolean | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    required?: boolean | undefined;
    vector?: {
        modelId: string;
        tokens: {
            [x: string]: number;
        };
    } | undefined;
} | {
    name: string;
    type: "index";
    index: string;
    field: string;
    description: string;
    queryDescription: string;
    namespace?: string | undefined;
    global?: boolean | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    inputSchema?: {
        fieldName: string;
        fieldType: string;
        description: string;
    }[] | undefined;
    outputFields?: string[] | undefined;
}, unknown>;
