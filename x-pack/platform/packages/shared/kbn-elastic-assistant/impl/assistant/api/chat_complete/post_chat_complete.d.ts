import type { HttpFetchQuery, HttpSetup } from '@kbn/core-http-browser';
import type { MessageMetadata, PromptIds, Replacements } from '@kbn/elastic-assistant-common';
import type { TraceOptions } from '../../types';
export interface PostChatCompleteParams {
    actionTypeId: string;
    alertsIndexPattern?: string;
    connectorId: string;
    http: HttpSetup;
    message: string;
    promptIds?: PromptIds;
    replacements: Replacements;
    query?: HttpFetchQuery;
    signal?: AbortSignal | undefined;
    traceOptions?: TraceOptions;
}
export interface ChatCompleteResponse {
    response: string;
    isError: boolean;
    isStream: boolean;
    traceData?: {
        transactionId: string;
        traceId: string;
    };
    metadata?: MessageMetadata;
}
export declare const postChatComplete: ({ actionTypeId, alertsIndexPattern, connectorId, http, message, promptIds, replacements, query, signal, traceOptions, }: PostChatCompleteParams) => Promise<ChatCompleteResponse>;
