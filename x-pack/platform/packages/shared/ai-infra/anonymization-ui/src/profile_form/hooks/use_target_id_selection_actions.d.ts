import type { FieldRule } from '@kbn/anonymization-common';
import type { TargetLookupClient } from '../../common/services/target_lookup/client';
import type { TargetType } from '../types';
interface QueryClientLike {
    fetchQuery: <T>(params: {
        queryKey: readonly unknown[];
        queryFn: () => Promise<T>;
        staleTime?: number;
    }) => Promise<T>;
}
interface UseTargetIdSelectionActionsParams {
    targetType: TargetType;
    targetId: string;
    includeHiddenAndSystemIndices: boolean;
    onFieldRulesChange: (rules: FieldRule[]) => void;
    queryClient: QueryClientLike;
    targetLookupClient: TargetLookupClient;
}
export declare const useTargetIdSelectionActions: ({ targetType, targetId, includeHiddenAndSystemIndices, onFieldRulesChange, queryClient, targetLookupClient, }: UseTargetIdSelectionActionsParams) => {
    targetIdAsyncError: string | undefined;
    isValidatingTargetId: boolean;
    applyTargetIdSelection: (value: string, options?: {
        hydrate?: boolean;
    }) => Promise<boolean>;
};
export {};
