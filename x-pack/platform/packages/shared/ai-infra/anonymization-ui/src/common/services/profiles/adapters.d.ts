import type { AnonymizationProfile, CreateAnonymizationProfileRequest, FindAnonymizationProfilesQuery, FindAnonymizationProfilesResponse } from '@kbn/anonymization-common';
import type { ProfilesListQuery, UpdateProfileInput } from '../../types/profiles';
export declare const toProfile: (profile: unknown) => AnonymizationProfile;
export declare const toProfilesListResult: (response: unknown) => FindAnonymizationProfilesResponse;
export declare const toFindProfilesQuery: (query: ProfilesListQuery) => FindAnonymizationProfilesQuery;
export declare const toCreateProfilePayload: (input: CreateAnonymizationProfileRequest) => {
    name: string;
    description: string | undefined;
    targetType: "index" | "index_pattern" | "data_view";
    targetId: string;
    rules: {
        fieldRules: {
            field: string;
            allowed: boolean;
            anonymized: boolean;
            entityClass: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID" | undefined;
        }[];
        regexRules: {
            id: string;
            type: string;
            entityClass: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID";
            pattern: string;
            enabled: boolean;
        }[];
        nerRules: {
            id: string;
            type: string;
            modelId: string | undefined;
            allowedEntityClasses: ("PER" | "ORG" | "LOC" | "MISC")[];
            enabled: boolean;
        }[];
    };
};
export declare const toUpdateProfilePayload: (input: UpdateProfileInput) => {
    name: string | undefined;
    description: string | undefined;
    rules: {
        fieldRules: {
            field: string;
            allowed: boolean;
            anonymized: boolean;
            entityClass: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID" | undefined;
        }[];
        regexRules: {
            id: string;
            type: string;
            entityClass: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID";
            pattern: string;
            enabled: boolean;
        }[];
        nerRules: {
            id: string;
            type: string;
            modelId: string | undefined;
            allowedEntityClasses: ("PER" | "ORG" | "LOC" | "MISC")[];
            enabled: boolean;
        }[];
    } | undefined;
};
