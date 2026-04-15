import type { AnonymizationProfile } from '@kbn/anonymization-common';
import type { AnonymizationUiServices } from '../contracts';
import type { DeleteProfileFlowController } from './hooks/use_delete_profile_flow';
import type { ProfileFormController } from '../common/hooks/use_profile_form';
import type { ProfilesListViewController } from './hooks/use_profiles_list_view';
export type AnonymizationMode = 'manage' | 'readOnly' | 'hidden';
export type FlyoutState = {
    mode: 'create';
} | {
    mode: 'edit';
    profile: AnonymizationProfile;
} | null;
interface UseAnonymizationProfilesSectionStateParams {
    fetch: AnonymizationUiServices['http']['fetch'];
    spaceId: string;
    canShow: boolean;
    canManage: boolean;
    onCreateSuccess?: () => void;
    onUpdateSuccess?: () => void;
    onDeleteSuccess?: () => void;
    onCreateConflict?: () => void;
    onOpenConflictError?: (error: unknown) => void;
}
export interface AnonymizationProfilesSectionState {
    listView: ProfilesListViewController;
    deleteFlow: DeleteProfileFlowController;
    form: ProfileFormController;
    flyoutState: FlyoutState;
    createConflictProfileId?: string;
    hasCreateConflict: boolean;
    effectiveMode: AnonymizationMode;
    hasReadOnlyApiError: boolean;
    isManageMode: boolean;
    closeFlyout: () => void;
    closeDeleteModal: () => void;
    confirmDelete: () => Promise<void>;
    openProfileById: (profileId: string) => Promise<void>;
    submitFlyout: () => Promise<void>;
    onCreateProfile: () => void;
    onEditProfile: (profile: AnonymizationProfile) => void;
    onTablePageChange: (page: number, size: number) => void;
}
export declare const useAnonymizationProfilesSectionState: ({ fetch, spaceId, canShow, canManage, onCreateSuccess, onUpdateSuccess, onDeleteSuccess, onCreateConflict, onOpenConflictError, }: UseAnonymizationProfilesSectionStateParams) => AnonymizationProfilesSectionState;
export {};
