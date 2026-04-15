import type { HttpSetup } from '@kbn/core-http-browser';
import type { PromptResponse, User } from '@kbn/elastic-assistant-common';
import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common/impl/schemas';
import type { InfiniteData, QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@kbn/react-query';
import type { ConversationWithOwner, FetchConversationsResponse } from './api';
interface Props {
    currentUser?: User;
    http: HttpSetup;
    isAssistantEnabled: boolean;
}
export interface DataStreamApis {
    allPrompts: PromptResponse[];
    allSystemPrompts: PromptResponse[];
    anonymizationFields: FindAnonymizationFieldsResponse;
    conversations: Record<string, ConversationWithOwner>;
    currentUser?: User;
    isErrorAnonymizationFields: boolean;
    isFetchedAnonymizationFields: boolean;
    isFetchedCurrentUserConversations: boolean;
    isFetchingCurrentUserConversations: boolean;
    isLoadingAnonymizationFields: boolean;
    isLoadingCurrentUserConversations: boolean;
    isLoadingPrompts: boolean;
    isFetchedPrompts: boolean;
    refetchPrompts: (options?: RefetchOptions & RefetchQueryFilters<unknown>) => Promise<QueryObserverResult<unknown, unknown>>;
    refetchCurrentUserConversations: <TPageData>(options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<QueryObserverResult<InfiniteData<FetchConversationsResponse>, unknown>>;
    setIsStreaming: (isStreaming: boolean) => void;
    setPaginationObserver: (ref: HTMLDivElement) => void;
}
export declare const useDataStreamApis: ({ currentUser, http, isAssistantEnabled, }: Props) => DataStreamApis;
export {};
