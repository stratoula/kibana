import type { ProfilesListQuery, ProfilesQueryContext } from '../../types/profiles';
interface NormalizedProfilesListQuery {
    filter: string;
    targetType: ProfilesListQuery['targetType'] | null;
    targetId: string;
    sortField: NonNullable<ProfilesListQuery['sortField']>;
    sortOrder: NonNullable<ProfilesListQuery['sortOrder']>;
    page: number;
    perPage: number;
}
export declare const profilesQueryKeys: {
    root: (context: ProfilesQueryContext) => readonly ["anonymizationProfiles", string];
    list: (context: ProfilesQueryContext, query: ProfilesListQuery) => readonly ["anonymizationProfiles", string, "list", NormalizedProfilesListQuery];
    detail: (context: ProfilesQueryContext, profileId: string) => readonly ["anonymizationProfiles", string, "detail", string];
};
export {};
