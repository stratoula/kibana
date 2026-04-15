import type React from 'react';
import type { FindPromptsResponse, PromptResponse } from '@kbn/elastic-assistant-common';
import type { HttpSetup } from '@kbn/core-http-browser';
import type { InfiniteData, QueryObserverResult } from '@kbn/react-query';
import type { IToasts } from '@kbn/core-notifications-browser';
import type { AIConnector } from '../../../connectorland/connector_selector';
import type { Conversation, ConversationsBulkActions } from '../../../..';
import type { FetchConversationsResponse } from '../../api';
interface Params {
    allPrompts: FindPromptsResponse;
    connectors?: AIConnector[];
    conversationsSettingsBulkActions: ConversationsBulkActions;
    currentAppId: string;
    defaultConnector?: AIConnector;
    http: HttpSetup;
    isAssistantEnabled: boolean;
    setConversationsSettingsBulkActions: React.Dispatch<React.SetStateAction<ConversationsBulkActions>>;
    toasts?: IToasts;
}
export interface SystemPromptSettings extends PromptResponse {
    conversations: Conversation[];
}
interface SystemPromptUpdater {
    onConversationSelectionChange: (currentPromptConversations: Conversation[]) => void;
    onNewConversationDefaultChange: (isChecked: boolean) => void;
    onPromptContentChange: (newValue: string) => void;
    onSystemPromptDelete: (id: string) => void;
    onSystemPromptSelect: (systemPrompt?: SystemPromptSettings | string) => void;
    refetchSystemPromptConversations: () => Promise<QueryObserverResult<InfiniteData<FetchConversationsResponse>, unknown>>;
    resetSystemPromptSettings: () => void;
    saveSystemPromptSettings: () => Promise<{
        success: boolean;
        conversationUpdates?: ConversationsBulkActions;
    }>;
    selectedSystemPrompt?: SystemPromptSettings;
    systemPromptSettings: SystemPromptSettings[];
}
export declare const useSystemPromptUpdater: ({ allPrompts, connectors, conversationsSettingsBulkActions, currentAppId, defaultConnector, http, isAssistantEnabled, setConversationsSettingsBulkActions, toasts, }: Params) => SystemPromptUpdater;
export {};
