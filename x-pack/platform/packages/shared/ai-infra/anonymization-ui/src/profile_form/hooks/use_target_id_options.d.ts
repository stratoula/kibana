import type { EuiComboBoxOptionOption } from '@elastic/eui';
import type { TargetLookupClient } from '../../common/services/target_lookup/client';
import type { TargetType } from '../types';
interface UseTargetIdOptionsParams {
    targetType: TargetType;
    targetIdSearchValue: string;
    debouncedTargetSearchValue: string;
    targetLookupClient: TargetLookupClient;
    shouldLoadTargetOptions: boolean;
    includeHiddenAndSystemIndices: boolean;
    unavailableTargetIds?: string[];
}
export declare const useTargetIdOptions: ({ targetType, targetIdSearchValue, debouncedTargetSearchValue, targetLookupClient, shouldLoadTargetOptions, includeHiddenAndSystemIndices, unavailableTargetIds, }: UseTargetIdOptionsParams) => {
    targetIdOptions: EuiComboBoxOptionOption<string>[];
    isTargetIdLoading: boolean;
};
export {};
