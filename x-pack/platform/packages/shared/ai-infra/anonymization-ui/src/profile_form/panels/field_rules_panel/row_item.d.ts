import React from 'react';
import { type FieldRule } from '@kbn/anonymization-common';
import { type FieldRuleAction } from '../../hooks/field_rule_actions';
interface FieldRulesPanelRowItemProps {
    rule: FieldRule;
    isSelected: boolean;
    showValidationErrors: boolean;
    isManageMode: boolean;
    isSubmitting: boolean;
    onToggleSelection: (field: string) => void;
    onRuleActionChange: (field: string, action: FieldRuleAction) => void;
    onRuleEntityClassChange: (field: string, entityClass: string) => void;
}
export declare const FIELD_RULE_POLICY_COLUMN_WIDTH = 220;
export declare const FIELD_RULE_MASK_COLUMN_WIDTH = 180;
export declare const FIELD_RULE_SELECTION_COLUMN_WIDTH = 24;
export declare const FieldRulesPanelRowItem: ({ rule, isSelected, showValidationErrors, isManageMode, isSubmitting, onToggleSelection, onRuleActionChange, onRuleEntityClassChange, }: FieldRulesPanelRowItemProps) => React.JSX.Element;
export {};
