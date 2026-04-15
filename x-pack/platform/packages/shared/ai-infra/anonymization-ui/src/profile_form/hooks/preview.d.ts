import type { FieldRule, RegexRule } from '@kbn/anonymization-common';
import { type FieldRuleAction } from './field_rule_actions';
export interface PreviewRow {
    field: string;
    action: FieldRuleAction;
    originalValue: unknown;
    anonymizedValue: unknown;
}
export declare const buildLocalPreviewRows: ({ document, fieldRules, regexRules, }: {
    document: Record<string, unknown>;
    fieldRules: FieldRule[];
    regexRules?: RegexRule[];
}) => PreviewRow[];
export declare const getPreviewDisplayValue: ({ row, showAnonymizedValues, resolveText, }: {
    row: PreviewRow;
    showAnonymizedValues: boolean;
    resolveText?: (value: string) => string;
}) => unknown;
export declare const buildLocalPreviewDocument: ({ document, fieldRules, regexRules, }: {
    document: Record<string, unknown>;
    fieldRules: FieldRule[];
    regexRules?: RegexRule[];
}) => Record<string, unknown>;
