import type { ProfilesListQuery, ProfilesQueryContext } from '../../../types/profiles';
import type { AnonymizationProfilesClient } from '../client';
export interface UseProfilesParams {
    client: AnonymizationProfilesClient;
    context: ProfilesQueryContext;
}
export interface UseFindProfilesParams extends UseProfilesParams {
    query: ProfilesListQuery;
    enabled?: boolean;
}
export interface UseFindAllProfilesParams extends UseProfilesParams {
    targetType?: ProfilesListQuery['targetType'];
    enabled?: boolean;
}
