import type { AnonymizationProfile } from '@kbn/anonymization-common';
import type { AnonymizationProfilesClient } from '../../common/services/profiles/client';
import type { ProfilesApiError } from '../../common/services/profiles/errors';
import type { ProfilesListQuery, ProfilesQueryContext, TargetType } from '../../common/types/profiles';
interface UseProfilesListViewParams {
    client: AnonymizationProfilesClient;
    context: ProfilesQueryContext;
    initialPerPage?: number;
    enabled?: boolean;
}
interface ProfileListFilters {
    targetType: '' | TargetType;
    queryText: string;
}
interface ProfileListPagination {
    page: number;
    perPage: number;
}
interface ProfileListViewState {
    filters: ProfileListFilters;
    pagination: ProfileListPagination;
    query: Pick<ProfilesListQuery, 'filter' | 'targetType' | 'page' | 'perPage'>;
    profiles: AnonymizationProfile[];
    total: number;
    loading: boolean;
    error?: ProfilesApiError;
}
export interface ProfilesListViewController extends ProfileListViewState {
    setTargetType: (targetType: '' | TargetType) => void;
    setTargetId: (targetId: string) => void;
    setPage: (page: number) => void;
    setPerPage: (perPage: number) => void;
    refetch: () => Promise<unknown>;
}
export declare const useProfilesListView: ({ client, context, initialPerPage, enabled, }: UseProfilesListViewParams) => ProfilesListViewController;
export {};
