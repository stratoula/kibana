import type { HttpSetup } from '@kbn/core-http-browser';
import type { ApiConfig, Replacements } from '@kbn/elastic-assistant-common';
import type { FetchConnectorExecuteResponse } from '../api';
interface SendMessageProps {
    apiConfig: ApiConfig;
    http: HttpSetup;
    message?: string;
    conversationId: string;
    replacements: Replacements;
}
interface UseSendMessage {
    abortStream: () => void;
    isLoading: boolean;
    sendMessage: ({ apiConfig, http, message, }: SendMessageProps) => Promise<FetchConnectorExecuteResponse>;
}
export declare const useSendMessage: () => UseSendMessage;
export {};
