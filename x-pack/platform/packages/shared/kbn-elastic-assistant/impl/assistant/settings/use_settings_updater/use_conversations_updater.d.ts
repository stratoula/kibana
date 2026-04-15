import type React from 'react';
import type { Conversation } from '../../../..';
import type { ConversationsBulkActions } from '../../api/conversations/bulk_update_actions_conversations';
export type SaveConversationsSettingsParams = {
    isDeleteAll?: boolean;
    bulkActions?: ConversationsBulkActions;
    excludedIds?: string[];
} | undefined;
interface UseConversationsUpdater {
    assistantStreamingEnabled: boolean;
    conversationSettings: Record<string, Conversation>;
    conversationsSettingsBulkActions: ConversationsBulkActions;
    onConversationDeleted: (cId: string) => void;
    onConversationsBulkDeleted: (cIds: string[]) => void;
    resetConversationsSettings: () => void;
    setConversationSettings: React.Dispatch<React.SetStateAction<Record<string, Conversation>>>;
    setConversationsSettingsBulkActions: React.Dispatch<React.SetStateAction<ConversationsBulkActions>>;
    setUpdatedAssistantStreamingEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    saveConversationsSettings: (params?: SaveConversationsSettingsParams) => Promise<boolean>;
}
export declare const useConversationsUpdater: (conversations: Record<string, Conversation>, conversationsLoaded: boolean) => UseConversationsUpdater;
export {};
