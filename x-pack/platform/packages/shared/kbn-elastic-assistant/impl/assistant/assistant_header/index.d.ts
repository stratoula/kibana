import React from 'react';
import type { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@kbn/react-query';
import type { ApiConfig, ConversationSharedState, User } from '@kbn/elastic-assistant-common';
import type { ConversationWithOwner } from '../api';
import type { DataStreamApis } from '../use_data_stream_apis';
import type { Conversation } from '../../..';
import type { AIConnector } from '../../connectorland/connector_selector';
interface OwnProps {
    conversationSharedState: ConversationSharedState;
    currentUser?: User;
    selectedConversation: Conversation | undefined;
    defaultConnector?: AIConnector;
    isConversationOwner: boolean;
    isDisabled: boolean;
    isLoading: boolean;
    isSettingsModalVisible: boolean;
    setIsSettingsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onChatCleared: () => void;
    onConversationDeleted: (conversationId: string) => void;
    onCloseFlyout?: () => void;
    chatHistoryVisible?: boolean;
    setChatHistoryVisible?: React.Dispatch<React.SetStateAction<boolean>>;
    onConversationSelected: ({ cId, cTitle, apiConfig, }: {
        apiConfig?: ApiConfig;
        cId: string;
        cTitle?: string;
    }) => void;
    conversations: Record<string, ConversationWithOwner>;
    conversationsLoaded: boolean;
    refetchCurrentConversation: ({ isStreamRefetch }: {
        isStreamRefetch?: boolean;
    }) => void;
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
    onConversationCreate: () => Promise<void>;
    isAssistantEnabled: boolean;
    refetchPrompts?: (options?: RefetchOptions & RefetchQueryFilters<unknown>) => Promise<QueryObserverResult<unknown, unknown>>;
    setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | undefined>>;
    setPaginationObserver: (ref: HTMLDivElement) => void;
}
type Props = OwnProps;
export declare const AI_ASSISTANT_SETTINGS_MENU_CONTAINER_ID = "aiAssistantSettingsMenuContainer";
/**
 * Renders the header of the Elastic AI Assistant.
 * Provide a user interface for selecting and managing conversations,
 * toggling the display of anonymized values, and accessing the assistant settings.
 */
export declare const AssistantHeader: React.FC<Props>;
export {};
