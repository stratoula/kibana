import React from 'react';
import { type User } from '@kbn/elastic-assistant-common';
import type { ConversationWithOwner } from '../../api';
import type { Conversation } from '../../../..';
interface Props {
    conversation: ConversationWithOwner;
    currentUser?: User;
    handleCopyUrl: (conversation: Conversation) => Promise<void>;
    handleDuplicateConversation: (conversation: Conversation) => Promise<void>;
    isActiveConversation: boolean;
    lastConversationId: string;
    onConversationSelected: ({ cId }: {
        cId: string;
    }) => void;
    setDeleteConversationItem: React.Dispatch<React.SetStateAction<Conversation | null>>;
    setPaginationObserver: (ref: HTMLDivElement) => void;
}
export declare const ConversationListItem: React.FC<Props>;
export {};
