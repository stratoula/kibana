import type React from 'react';
import type { HttpSetup } from '@kbn/core-http-browser';
import type { DataStreamApis } from '../use_data_stream_apis';
import type { SelectedPromptContext } from '../prompt_context/types';
import type { Conversation } from '../../..';
export interface UseChatSendProps {
    currentConversation?: Conversation;
    http: HttpSetup;
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
    selectedPromptContexts: Record<string, SelectedPromptContext>;
    setSelectedPromptContexts: React.Dispatch<React.SetStateAction<Record<string, SelectedPromptContext>>>;
    setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | undefined>>;
}
export interface UseChatSend {
    abortStream: () => void;
    handleOnChatCleared: () => Promise<void>;
    handleRegenerateResponse: () => void;
    handleChatSend: (promptText: string) => Promise<void>;
    setUserPrompt: React.Dispatch<React.SetStateAction<string | null>>;
    isLoading: boolean;
    userPrompt: string | null;
}
/**
 * Handles sending user messages to the API and updating the conversation state.
 */
export declare const useChatSend: ({ currentConversation, http, refetchCurrentUserConversations, selectedPromptContexts, setSelectedPromptContexts, setCurrentConversation, }: UseChatSendProps) => UseChatSend;
