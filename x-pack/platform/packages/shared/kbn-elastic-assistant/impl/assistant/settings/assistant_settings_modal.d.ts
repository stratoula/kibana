import React from 'react';
import type { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@kbn/react-query';
import type { DataStreamApis } from '../use_data_stream_apis';
import type { AIConnector } from '../../connectorland/connector_selector';
import type { Conversation } from '../../..';
interface Props {
    defaultConnector?: AIConnector;
    isSettingsModalVisible: boolean;
    selectedConversationId?: string;
    setIsSettingsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onConversationSelected: ({ cId }: {
        cId: string;
    }) => void;
    isDisabled?: boolean;
    conversations: Record<string, Conversation>;
    conversationsLoaded: boolean;
    refetchCurrentConversation: ({ isStreamRefetch }: {
        isStreamRefetch?: boolean;
    }) => void;
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
    refetchPrompts?: (options?: RefetchOptions & RefetchQueryFilters<unknown>) => Promise<QueryObserverResult<unknown, unknown>>;
    setPaginationObserver: (ref: HTMLDivElement) => void;
}
/**
 * Assistant settings modal
 */
export declare const AssistantSettingsModal: React.FC<Props>;
export {};
