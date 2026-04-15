import React from 'react';
import type { Conversation } from '../../..';
interface Props {
    conversationList: Conversation[];
    currentConversationId?: string;
    deleteConversationItem: Conversation | null;
    onConversationDeleted: (conversationId: string) => void;
    onConversationSelected: ({ cId }: {
        cId: string;
    }) => void;
    setDeleteConversationItem: React.Dispatch<React.SetStateAction<Conversation | null>>;
}
export declare const DeleteConversationModal: React.FC<Props>;
export {};
