import type { TargetType } from '../../types/profiles';
import type { ExpandWildcardsMode } from './client';
export declare const targetLookupQueryKeys: {
    root: readonly ["anonymizationTargetLookup"];
    dataViewsList: () => readonly ["anonymizationTargetLookup", "dataViewsList"];
    dataViewById: (dataViewId: string) => readonly ["anonymizationTargetLookup", "dataViewById", string];
    resolveIndex: (query: string, targetType: TargetType, expandWildcards: ExpandWildcardsMode) => readonly ["anonymizationTargetLookup", "resolveIndex", "index" | "index_pattern" | "data_view", ExpandWildcardsMode, string];
    fieldsForWildcard: (pattern: string) => readonly ["anonymizationTargetLookup", "fieldsForWildcard", string];
};
