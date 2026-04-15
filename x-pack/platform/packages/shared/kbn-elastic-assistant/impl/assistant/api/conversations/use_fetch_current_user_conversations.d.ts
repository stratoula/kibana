import type { HttpSetup } from '@kbn/core/public';
import type { InfiniteData, QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@kbn/react-query';
import type { User } from '@kbn/elastic-assistant-common';
import type { Conversation } from '../../../assistant_context/types';
export interface FetchConversationsResponse {
    page: number;
    perPage: number;
    total: number;
    data: Conversation[];
}
export interface UseFetchCurrentUserConversationsParams {
    currentUser?: User;
    http: HttpSetup;
    fields?: string[];
    filter?: string;
    page?: number;
    perPage?: number;
    signal?: AbortSignal | undefined;
    sortField?: string;
    sortOrder?: string;
    refetchOnWindowFocus?: boolean;
    isConversationOwner?: boolean;
    isAssistantEnabled: boolean;
    setTotalItemCount?: (total: number) => void;
}
export interface ConversationWithOwner extends Conversation {
    isConversationOwner: boolean;
}
export interface FetchCurrentUserConversations {
    data: Record<string, ConversationWithOwner>;
    isLoading: boolean;
    refetch: <TPageData>(options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<QueryObserverResult<InfiniteData<FetchConversationsResponse>, unknown>>;
    isFetched: boolean;
    isFetching: boolean;
    setPaginationObserver: (ref: HTMLDivElement) => void;
}
/**
 * API call for fetching assistant conversations for the current user
 */
export declare const useFetchCurrentUserConversations: ({ currentUser, http, fields, filter, page, perPage, signal, sortField, sortOrder, refetchOnWindowFocus, isAssistantEnabled, isConversationOwner, setTotalItemCount, }: UseFetchCurrentUserConversationsParams) => FetchCurrentUserConversations;
