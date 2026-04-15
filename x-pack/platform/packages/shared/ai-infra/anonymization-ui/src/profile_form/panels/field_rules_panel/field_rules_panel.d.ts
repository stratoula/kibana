import React from 'react';
import type { FieldRule } from '@kbn/anonymization-common';
interface FieldRulesPanelProps {
    fieldRules: FieldRule[];
    onFieldRulesChange: (rules: FieldRule[]) => void;
    validationError?: string;
    selectedTargetName?: string;
    isManageMode: boolean;
    isSubmitting: boolean;
}
export declare const FieldRulesPanel: ({ fieldRules, onFieldRulesChange, validationError, selectedTargetName, isManageMode, isSubmitting, }: FieldRulesPanelProps) => React.JSX.Element;
export {};
