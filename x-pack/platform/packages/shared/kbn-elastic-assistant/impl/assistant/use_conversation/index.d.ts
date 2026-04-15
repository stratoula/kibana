import type React from 'react';
import type { ApiConfig, User } from '@kbn/elastic-assistant-common';
import type { DataStreamApis } from '../use_data_stream_apis';
import type { Conversation, ClientMessage } from '../../assistant_context/types';
interface SetApiConfigProps {
    conversation: Conversation;
    apiConfig: ApiConfig;
}
interface UpdateConversationTitleProps {
    conversationId: string;
    updatedTitle: string;
}
interface UpdateConversationUsersProps {
    conversationId: string;
    updatedUsers: User[];
}
export interface UseConversation {
    clearConversation: (conversation: Conversation) => Promise<Conversation | undefined>;
    copyConversationUrl: (conversation?: Conversation) => Promise<void>;
    duplicateConversation: (args: {
        refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
        selectedConversation?: Conversation;
        setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | undefined>>;
    }) => Promise<void>;
    deleteConversation: (conversationId: string) => void;
    removeLastMessage: (conversationId: string) => Promise<ClientMessage[] | undefined>;
    setApiConfig: ({ conversation, apiConfig, }: SetApiConfigProps) => Promise<Conversation | undefined>;
    createConversation: (conversation: Partial<Conversation>) => Promise<Conversation | undefined>;
    getConversation: (conversationId: string, silent?: boolean) => Promise<Conversation | undefined>;
    updateConversationTitle: ({ conversationId, updatedTitle, }: UpdateConversationTitleProps) => Promise<Conversation>;
    updateConversationUsers: ({ conversationId, updatedUsers, }: UpdateConversationUsersProps) => Promise<Conversation>;
}
export declare const useConversation: () => UseConversation;
export {};
