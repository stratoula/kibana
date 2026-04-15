import type { UseProfilesParams } from './types';
export declare const useCreateProfile: ({ client, context }: UseProfilesParams) => import("@kbn/react-query").UseMutationResult<{
    id: string;
    name: string;
    targetType: "index" | "index_pattern" | "data_view";
    targetId: string;
    rules: {
        fieldRules: {
            field: string;
            allowed: boolean;
            anonymized: boolean;
            entityClass?: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID" | undefined;
        }[];
        regexRules: {
            id: string;
            type: "regex";
            entityClass: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID";
            pattern: string;
            enabled: boolean;
        }[];
        nerRules: {
            id: string;
            type: "ner";
            allowedEntityClasses: ("PER" | "ORG" | "LOC" | "MISC")[];
            enabled: boolean;
            modelId?: string | undefined;
        }[];
    };
    saltId: string;
    namespace: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    description?: string | undefined;
}, unknown, {
    name: string;
    targetType: "index" | "index_pattern" | "data_view";
    targetId: string;
    rules: {
        fieldRules: {
            field: string;
            allowed: boolean;
            anonymized: boolean;
            entityClass?: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID" | undefined;
        }[];
        regexRules: {
            id: string;
            type: "regex";
            entityClass: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID";
            pattern: string;
            enabled: boolean;
        }[];
        nerRules: {
            id: string;
            type: "ner";
            allowedEntityClasses: ("PER" | "ORG" | "LOC" | "MISC")[];
            enabled: boolean;
            modelId?: string | undefined;
        }[];
    };
    description?: string | undefined;
}, unknown>;
