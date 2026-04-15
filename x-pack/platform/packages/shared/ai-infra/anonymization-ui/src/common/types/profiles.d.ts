import type { UpdateAnonymizationProfileRequest, FieldRule, NerRule, RegexRule } from '@kbn/anonymization-common';
import type { TargetType as SharedTargetType } from '../target_types';
export type TargetType = SharedTargetType;
export interface ProfilesListQuery {
    filter?: string;
    targetType?: TargetType;
    targetId?: string;
    sortField?: 'createdAt' | 'name' | 'updatedAt';
    sortOrder?: 'asc' | 'desc';
    page?: number;
    perPage?: number;
}
export interface UpdateProfileInput {
    id: string;
    name?: UpdateAnonymizationProfileRequest['name'];
    description?: UpdateAnonymizationProfileRequest['description'];
    rules?: {
        fieldRules: FieldRule[];
        regexRules?: RegexRule[];
        nerRules?: NerRule[];
    };
}
export interface ProfilesQueryContext {
    spaceId: string;
}
