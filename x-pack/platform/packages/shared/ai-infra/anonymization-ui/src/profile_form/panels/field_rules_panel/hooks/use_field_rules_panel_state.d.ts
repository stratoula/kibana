import { type FieldRule } from '@kbn/anonymization-common';
import { type FieldRuleAction } from '../../../hooks/field_rule_actions';
interface UseFieldRulesPanelStateParams {
    fieldRules: FieldRule[];
    onFieldRulesChange: (rules: FieldRule[]) => void;
}
export declare const useFieldRulesPanelState: ({ fieldRules, onFieldRulesChange, }: UseFieldRulesPanelStateParams) => {
    fieldSearchQuery: string;
    setFieldSearchQuery: import("react").Dispatch<import("react").SetStateAction<string>>;
    fieldActionFilter: "all" | "allow" | "deny" | "anonymize";
    setFieldActionFilter: import("react").Dispatch<import("react").SetStateAction<"all" | "allow" | "deny" | "anonymize">>;
    fieldPageIndex: number;
    setFieldPageIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    bulkAction: FieldRuleAction;
    setBulkAction: import("react").Dispatch<import("react").SetStateAction<FieldRuleAction>>;
    bulkEntityClass: string;
    setBulkEntityClass: import("react").Dispatch<import("react").SetStateAction<string>>;
    pagedRules: {
        field: string;
        allowed: boolean;
        anonymized: boolean;
        entityClass?: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID" | undefined;
    }[];
    filteredRules: {
        field: string;
        allowed: boolean;
        anonymized: boolean;
        entityClass?: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID" | undefined;
    }[];
    allRules: {
        field: string;
        allowed: boolean;
        anonymized: boolean;
        entityClass?: "IP" | "URL" | "PER" | "ORG" | "LOC" | "MISC" | "HOST_NAME" | "USER_NAME" | "EMAIL" | "CLOUD_ACCOUNT" | "ENTITY_NAME" | "RESOURCE_NAME" | "RESOURCE_ID" | undefined;
    }[];
    selectedFields: string[];
    setSelectedFields: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    allFieldsSelected: boolean;
    selectedCount: number;
    toggleSelectAllFields: () => void;
    onRuleActionChange: (field: string, action: FieldRuleAction) => void;
    onRuleEntityClassChange: (field: string, entityClass: string) => void;
    applyBulkAction: () => void;
    policyCounters: import("./policy_helpers").PolicyCounters;
    hasActiveFieldFilters: boolean;
};
export {};
