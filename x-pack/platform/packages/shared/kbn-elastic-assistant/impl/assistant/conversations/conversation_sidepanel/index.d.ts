import React from 'react';
import type { User } from '@kbn/elastic-assistant-common';
import type { ConversationWithOwner } from '../../api';
import type { DataStreamApis } from '../../use_data_stream_apis';
import type { Conversation } from '../../../..';
interface Props {
    currentConversation?: Conversation;
    currentUser?: User;
    onConversationSelected: ({ cId }: {
        cId: string;
    }) => void;
    shouldDisableKeyboardShortcut?: () => boolean;
    isDisabled?: boolean;
    isFetchingCurrentUserConversations: boolean;
    conversations: Record<string, ConversationWithOwner>;
    onConversationDeleted: (conversationId: string) => void;
    onConversationCreate: () => void;
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
    setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | undefined>>;
    setPaginationObserver: (ref: HTMLDivElement) => void;
}
export declare const ConversationSidePanel: React.NamedExoticComponent<Props>;
export {};
