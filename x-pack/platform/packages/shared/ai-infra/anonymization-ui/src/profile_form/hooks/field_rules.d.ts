import type { AnonymizationEntityClass, FieldRule } from '@kbn/anonymization-common';
import { type FieldRuleAction } from './field_rule_actions';
interface FieldRuleActionOptions {
    entityClass?: AnonymizationEntityClass;
}
export declare const applyFieldAction: (rules: FieldRule[], field: string, action: FieldRuleAction, options?: FieldRuleActionOptions) => FieldRule[];
export declare const applyBulkFieldAction: (rules: FieldRule[], selectedFields: string[], action: FieldRuleAction, options?: FieldRuleActionOptions) => FieldRule[];
export declare const rankFieldRules: (rules: FieldRule[], { query, ecsBoost, recentFields, }: {
    query: string;
    ecsBoost?: boolean;
    recentFields?: string[];
}) => FieldRule[];
export {};
