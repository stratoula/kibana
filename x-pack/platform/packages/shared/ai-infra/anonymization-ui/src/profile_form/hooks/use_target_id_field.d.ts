import type React from 'react';
import type { EuiComboBoxOptionOption } from '@elastic/eui';
import type { FieldRule } from '@kbn/anonymization-common';
import type { AnonymizationUiServices } from '../../contracts';
import type { TargetType } from '../types';
interface UseTargetIdFieldParams {
    targetType: TargetType;
    targetId: string;
    includeHiddenAndSystemIndices: boolean;
    fetch: AnonymizationUiServices['http']['fetch'];
    onFieldRulesChange: (rules: FieldRule[]) => void;
    onTargetIdChange: (targetId: string) => void;
    unavailableTargetIds?: string[];
}
export interface UseTargetIdFieldResult {
    targetIdOptions: Array<EuiComboBoxOptionOption<string>>;
    selectedTargetIdOptions: Array<EuiComboBoxOptionOption<string>>;
    selectedTargetDisplayName?: string;
    targetIdHelpText: React.ReactNode;
    targetIdAsyncError?: string;
    isTargetIdValidating: boolean;
    isTargetIdLoading: boolean;
    onTargetIdSearchChange: (value: string) => void;
    onTargetIdFocus: () => void;
    onTargetIdSelectChange: (options: Array<EuiComboBoxOptionOption<string>>) => void;
    onTargetIdCreateOption?: (searchValue: string) => void;
    validateAndHydrateTargetId: () => Promise<boolean>;
}
export declare const useTargetIdField: ({ targetType, targetId, includeHiddenAndSystemIndices, fetch, onFieldRulesChange, onTargetIdChange, unavailableTargetIds, }: UseTargetIdFieldParams) => UseTargetIdFieldResult;
export {};
