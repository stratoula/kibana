import type { AnonymizationProfile, FieldRule, RegexRule, NerRule } from '@kbn/anonymization-common';
import type { AnonymizationProfilesClient } from '../services/profiles/client';
import type { ProfilesApiError } from '../services/profiles/errors';
import type { ProfilesQueryContext, TargetType } from '../types/profiles';
import type { ProfileFormSubmitResult, ProfileFormValidationErrors, ProfileFormValues } from './profile_form_types';
interface UseProfileFormParams {
    client: AnonymizationProfilesClient;
    context: ProfilesQueryContext;
    initialProfile?: AnonymizationProfile;
}
export interface ProfileFormController {
    values: ProfileFormValues;
    validationErrors: ProfileFormValidationErrors;
    submitError?: ProfilesApiError;
    isSubmitting: boolean;
    isEdit: boolean;
    reset: () => void;
    setName: (name: string) => void;
    setDescription: (description: string) => void;
    setTargetType: (targetType: TargetType) => void;
    setTargetId: (targetId: string) => void;
    setFieldRules: (fieldRules: FieldRule[]) => void;
    setRegexRules: (regexRules: RegexRule[]) => void;
    setNerRules: (nerRules: NerRule[]) => void;
    submit: () => Promise<ProfileFormSubmitResult | undefined>;
}
export declare const useProfileForm: ({ client, context, initialProfile, }: UseProfileFormParams) => ProfileFormController;
export {};
