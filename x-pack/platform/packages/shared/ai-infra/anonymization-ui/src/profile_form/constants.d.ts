import type { FieldRule } from '@kbn/anonymization-common';
import { type FieldRuleAction } from './hooks/field_rule_actions';
import type { TargetType } from './types';
export declare const FIELD_PAGE_SIZE = 10;
export declare const TARGET_LOOKUP_DEBOUNCE_MS = 250;
export declare const TARGET_ID_OPTIONS_LIMIT = 100;
export declare const TARGET_TYPE_OPTIONS: Array<{
    value: TargetType;
    text: string;
}>;
export declare const TARGET_TYPE_FILTER_OPTIONS: Array<{
    value: '' | TargetType;
    text: string;
}>;
export declare const FIELD_ACTION_OPTIONS: readonly [{
    readonly value: "all";
    readonly text: string;
}, {
    readonly value: "allow";
    readonly text: string;
}, {
    readonly value: "anonymize";
    readonly text: string;
}, {
    readonly value: "deny";
    readonly text: string;
}];
export declare const POLICY_ACTION_OPTIONS: Array<{
    value: FieldRuleAction;
    text: string;
}>;
export declare const SAMPLE_PREVIEW_DOCUMENT: Record<string, unknown>;
export declare const toFieldAction: (rule: FieldRule) => FieldRuleAction;
export declare const getFieldPolicyBehaviorLabel: (action: FieldRuleAction) => string;
