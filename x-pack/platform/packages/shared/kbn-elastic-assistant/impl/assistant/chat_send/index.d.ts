import React from 'react';
import type { UseChatSend } from './use_chat_send';
export interface Props extends Omit<UseChatSend, 'abortStream' | 'handleOnChatCleared'> {
    isDisabled: boolean;
    shouldRefocusPrompt: boolean;
    userPrompt: string | null;
}
/**
 * Renders the user input prompt text area.
 * Allows the user to clear the chat and switch between different system prompts.
 */
export declare const ChatSend: React.FC<Props>;
