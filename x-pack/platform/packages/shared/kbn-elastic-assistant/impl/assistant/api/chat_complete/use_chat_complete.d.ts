import type { PromptIds, Replacements } from '@kbn/elastic-assistant-common';
import type { HttpFetchQuery } from '@kbn/core-http-browser';
import type { ChatCompleteResponse } from './post_chat_complete';
interface SendMessageProps {
    message: string;
    promptIds?: PromptIds;
    replacements: Replacements;
    query?: HttpFetchQuery;
}
interface UseChatComplete {
    abortStream: () => void;
    isLoading: boolean;
    sendMessage: (props: SendMessageProps) => Promise<ChatCompleteResponse>;
}
export declare const useChatComplete: ({ connectorId }: {
    connectorId: string;
}) => UseChatComplete;
export {};
