import type { FieldRule } from '@kbn/anonymization-common';
import { type FieldRuleAction } from '../../../hooks/field_rule_actions';
export interface PolicyCounters {
    allow: number;
    anonymize: number;
    deny: number;
}
export declare const countPolicies: (rules: FieldRule[]) => PolicyCounters;
export declare const toActionOption: (value: FieldRuleAction, label: string) => {
    id: FieldRuleAction;
    label: string;
};
