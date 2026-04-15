import type { HttpSetup } from '@kbn/core/public';
import type { CreateAnonymizationProfileRequest, FindAnonymizationProfilesResponse, DeleteAnonymizationProfileResponse } from '@kbn/anonymization-common';
import { toProfile } from './adapters';
import type { ProfilesListQuery, UpdateProfileInput } from '../../types/profiles';
export interface AnonymizationProfilesClient {
    findProfiles: (query: ProfilesListQuery) => Promise<FindAnonymizationProfilesResponse>;
    getProfile: (id: string) => Promise<ReturnType<typeof toProfile>>;
    createProfile: (input: CreateAnonymizationProfileRequest) => Promise<ReturnType<typeof toProfile>>;
    updateProfile: (input: UpdateProfileInput) => Promise<ReturnType<typeof toProfile>>;
    deleteProfile: (id: string) => Promise<DeleteAnonymizationProfileResponse>;
}
interface AnonymizationProfilesHttpService {
    fetch: HttpSetup['fetch'];
}
export declare const createAnonymizationProfilesClient: (http: AnonymizationProfilesHttpService) => AnonymizationProfilesClient;
export {};
