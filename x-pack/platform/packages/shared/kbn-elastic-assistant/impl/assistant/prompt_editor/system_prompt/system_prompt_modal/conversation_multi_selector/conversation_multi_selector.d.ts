import React from 'react';
import type { Conversation } from '../../../../../..';
interface Props {
    isDisabled?: boolean;
    onConversationSelectionChange: (currentPromptConversations: Conversation[]) => void;
    conversations: Conversation[];
    selectedConversations?: Conversation[];
    setPaginationObserver: (ref: HTMLDivElement) => void;
}
/**
 * Selector for choosing multiple Conversations
 */
export declare const ConversationMultiSelector: React.FC<Props>;
export {};
