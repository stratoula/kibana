import type { HttpSetup, IHttpFetchError, ResponseErrorBody } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
export interface UseDeleteKnowledgeEntriesParams {
    http: HttpSetup;
    signal?: AbortSignal;
    toasts?: IToasts;
}
/**
 * Hook for deleting Knowledge Base Entries by id or query.
 *
 * @param {Object} options - The options object
 * @param {HttpSetup} options.http - HttpSetup
 * @param {AbortSignal} [options.signal] - AbortSignal
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns mutation hook for deleting Knowledge Base Entries
 *
 */
export declare const useDeleteKnowledgeBaseEntries: ({ http, signal, toasts, }: UseDeleteKnowledgeEntriesParams) => import("@kbn/react-query").UseMutationResult<{
    attributes: {
        results: {
            updated: ({
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
            created: ({
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
            deleted: string[];
            skipped: {
                id: string;
                skip_reason: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                name?: string | undefined;
            }[];
        };
        summary: {
            failed: number;
            skipped: number;
            succeeded: number;
            total: number;
        };
        errors?: {
            message: string;
            statusCode: number;
            knowledgeBaseEntries: {
                id: string;
                name?: string | undefined;
            }[];
            err_code?: string | undefined;
        }[] | undefined;
    };
    success?: boolean | undefined;
    statusCode?: number | undefined;
    message?: string | undefined;
    knowledgeBaseEntriesCount?: number | undefined;
}, IHttpFetchError<ResponseErrorBody>, {
    query?: string | undefined;
    ids?: string[] | undefined;
}, unknown>;
