import type { DataViewsContract, DataView, DataViewSpec, DataViewField } from '@kbn/data-views-plugin/public';
import type { HttpStart } from '@kbn/core/public';
import type { IndexPattern, IndexPatternField, IndexPatternMap, IndexPatternRef, TextBasedPersistedState } from '@kbn/lens-common';
type ErrorHandler = (err: Error) => void;
type MinimalDataViewsContract = Pick<DataViewsContract, 'get' | 'getIdsWithTitle' | 'create'>;
/**
 * All these functions will be used by the Embeddable instance too,
 * therefore keep all these functions pretty raw here and do not use the IndexPatternService
 */
export declare function getFieldByNameFactory(newFields: IndexPatternField[]): (name: string) => IndexPatternField;
export declare function convertDataViewIntoLensIndexPattern(dataView: DataView, restrictionRemapper?: (name: string) => string): IndexPattern;
export declare function buildIndexPatternField(field: DataViewField, metaKeys?: Set<string>): IndexPatternField;
export declare function loadIndexPatternRefs(dataViews: MinimalDataViewsContract): Promise<IndexPatternRef[]>;
/**
 * Ensures ESQL ad-hoc DataView specs have a valid `timeFieldName` if any.
 *
 * Persisted specs may be missing time field info. For each text-based layer with
 * an ES|QL query, this function checks whether the corresponding ad-hoc DataView
 * spec already has a `timeFieldName`. If it does, the spec is kept as-is. If not,
 * `getESQLAdHocDataview` is called to detect the time field via the TIMEFIELD_ROUTE.
 *
 * After calling this function the DataViewService instance cache is also populated
 * with the correct DataView, so downstream `dataViews.create(spec)` calls
 * (in `loadIndexPatterns`, `getUsedDataViews`, etc.) will return the cached instance
 * with the right time field — even if they receive a stale spec.
 */
export declare function ensureESQLTimeFieldOnAdHocDataViews({ adHocDataViews, textBasedState, dataViewsService, http, }: {
    adHocDataViews: Record<string, DataViewSpec>;
    textBasedState: TextBasedPersistedState | undefined;
    dataViewsService: DataViewsContract;
    http?: HttpStart;
}): Promise<Record<string, DataViewSpec>>;
export declare function loadIndexPatterns({ dataViews, patterns, notUsedPatterns, cache, adHocDataViews, onIndexPatternRefresh, }: {
    dataViews: MinimalDataViewsContract;
    patterns: string[];
    notUsedPatterns?: string[];
    cache: Record<string, IndexPattern>;
    adHocDataViews?: Record<string, DataViewSpec>;
    onIndexPatternRefresh?: () => void;
}): Promise<Record<string, IndexPattern>>;
export declare function ensureIndexPattern({ id, onError, dataViews, cache, }: {
    id: string;
    onError: ErrorHandler;
    dataViews: MinimalDataViewsContract;
    cache?: IndexPatternMap;
}): Promise<{
    [x: string]: IndexPattern;
} | undefined>;
export {};
