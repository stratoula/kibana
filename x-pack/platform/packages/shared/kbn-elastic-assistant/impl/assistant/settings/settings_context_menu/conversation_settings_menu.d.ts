import React from 'react';
import type { ConversationWithOwner } from '../../api';
import type { DataStreamApis } from '../../use_data_stream_apis';
import type { Conversation } from '../../../..';
interface Params {
    isConversationOwner: boolean;
    isDisabled?: boolean;
    conversations: Record<string, ConversationWithOwner>;
    onConversationDeleted: (conversationId: string) => void;
    onConversationSelected: ({ cId }: {
        cId: string;
    }) => void;
    onChatCleared?: () => void;
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
    selectedConversation?: Conversation;
    setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | undefined>>;
}
export declare const ConversationSettingsMenu: React.FC<Params>;
export {};
