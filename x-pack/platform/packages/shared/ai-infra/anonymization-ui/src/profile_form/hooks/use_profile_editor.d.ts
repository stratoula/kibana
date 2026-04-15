import type { AnonymizationProfile } from '@kbn/anonymization-common';
import type { AnonymizationProfilesClient } from '../../common/services/profiles/client';
import type { ProfilesApiError } from '../../common/services/profiles/errors';
import type { ProfilesQueryContext } from '../../common/types/profiles';
import { useProfileForm } from '../../common/hooks/use_profile_form';
interface UseProfileEditorParams {
    client: AnonymizationProfilesClient;
    context: ProfilesQueryContext;
    profileId?: string;
}
interface ProfileEditorController {
    profile?: AnonymizationProfile;
    isLoadingProfile: boolean;
    loadError?: ProfilesApiError;
    loadProfileById: (profileId: string) => Promise<void>;
    form: ReturnType<typeof useProfileForm>;
}
export declare const useProfileEditor: ({ client, context, profileId, }: UseProfileEditorParams) => ProfileEditorController;
export {};
