import type { HttpSetup, IToasts } from '@kbn/core/public';
import type { ApiConfig, Replacements, ScreenContext, MessageMetadata } from '@kbn/elastic-assistant-common';
import type { TraceOptions } from '../types';
export * from './conversations';
export * from './prompts';
export interface FetchConnectorExecuteAction {
    conversationId: string;
    alertsIndexPattern?: string;
    assistantStreamingEnabled: boolean;
    apiConfig: ApiConfig;
    http: HttpSetup;
    message?: string;
    replacements: Replacements;
    signal?: AbortSignal | undefined;
    size?: number;
    traceOptions?: TraceOptions;
    toasts?: IToasts;
    screenContext: ScreenContext;
}
export interface FetchConnectorExecuteResponse {
    response: string | ReadableStreamDefaultReader<Uint8Array>;
    isError: boolean;
    isStream: boolean;
    traceData?: {
        transactionId: string;
        traceId: string;
    };
    metadata?: MessageMetadata;
}
export declare const fetchConnectorExecuteAction: ({ conversationId, alertsIndexPattern, assistantStreamingEnabled, http, message, replacements, apiConfig, signal, size, toasts, traceOptions, screenContext, }: FetchConnectorExecuteAction) => Promise<FetchConnectorExecuteResponse>;
