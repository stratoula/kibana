import type { AnonymizationProfilesClient } from '../../common/services/profiles/client';
import type { ProfilesApiError } from '../../common/services/profiles/errors';
import type { ProfilesQueryContext } from '../../common/types/profiles';
interface UseDeleteProfileFlowParams {
    client: AnonymizationProfilesClient;
    context: ProfilesQueryContext;
}
export interface DeleteProfileFlowController {
    pendingProfileId?: string;
    isDeleting: boolean;
    error?: ProfilesApiError;
    openConfirmation: (profileId: string) => void;
    cancel: () => void;
    confirmDelete: () => Promise<boolean>;
}
export declare const useDeleteProfileFlow: ({ client, context, }: UseDeleteProfileFlowParams) => DeleteProfileFlowController;
export {};
