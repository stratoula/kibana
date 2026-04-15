import type { Dispatch, SetStateAction } from 'react';
import type { InfiniteData, QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@kbn/react-query';
import type { PromptResponse, User, ConversationSharedState } from '@kbn/elastic-assistant-common';
import type { FetchConversationsResponse } from '../api';
import type { AIConnector } from '../../connectorland/connector_selector';
import type { Conversation } from '../../..';
import type { LastConversation } from '../use_space_aware_context';
export interface Props {
    allSystemPrompts: PromptResponse[];
    connectors?: AIConnector[];
    currentAppId?: string;
    currentUser?: User;
    lastConversation: LastConversation;
    conversations: Record<string, Conversation>;
    defaultConnector?: AIConnector;
    spaceId: string;
    mayUpdateConversations: boolean;
    refetchCurrentUserConversations: <TPageData>(options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<QueryObserverResult<InfiniteData<FetchConversationsResponse>, unknown>>;
    setLastConversation: (lastConversation: LastConversation) => void;
}
interface UseCurrentConversation {
    conversationSharedState: ConversationSharedState;
    currentConversation: Conversation | undefined;
    currentSystemPrompt: PromptResponse | undefined;
    handleCreateConversation: () => Promise<void>;
    handleOnConversationDeleted: (cTitle: string) => Promise<void>;
    handleOnConversationSelected: ({ cId, cTitle, }: {
        cId: string;
        cTitle?: string;
    }) => Promise<void>;
    isConversationOwner: boolean;
    refetchCurrentConversation: (options?: {
        cId?: string;
        isStreamRefetch?: boolean;
    }) => Promise<Conversation | undefined>;
    setCurrentConversation: Dispatch<SetStateAction<Conversation | undefined>>;
    setCurrentSystemPromptId: (promptId: string | undefined) => void;
}
/**
 * Manages the current conversation state. Interacts with the conversation API and keeps local state up to date.
 * Manages system prompt as that is per conversation
 * Provides methods to handle conversation selection, creation, deletion, and system prompt selection.
 */
export declare const useCurrentConversation: ({ allSystemPrompts, connectors, currentAppId, lastConversation, conversations, currentUser, spaceId, defaultConnector, mayUpdateConversations, refetchCurrentUserConversations, setLastConversation, }: Props) => UseCurrentConversation;
export {};
