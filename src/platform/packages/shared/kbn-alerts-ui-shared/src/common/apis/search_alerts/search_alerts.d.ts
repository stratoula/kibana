import type { MappingRuntimeFields, QueryDslFieldAndFormat, QueryDslQueryContainer, SortCombinations } from '@elastic/elasticsearch/lib/api/types';
import type { Alert, EsQuerySnapshot, LegacyField } from '@kbn/alerting-types';
import type { DataPublicPluginStart } from '@kbn/data-plugin/public';
export interface SearchAlertsParams {
    /**
     * Kibana data plugin, used to perform the query
     */
    data: DataPublicPluginStart;
    /**
     * Abort signal used to cancel the request
     */
    signal?: AbortSignal;
    /**
     * Array of rule type ids used area-based filtering
     */
    ruleTypeIds: string[];
    /**
     * Array of consumers used area-based filtering
     */
    consumers?: string[];
    /**
     * ES query to perform on the affected alert indices
     */
    query: Partial<Pick<NonNullable<QueryDslQueryContainer>, 'bool' | 'ids'>>;
    /**
     * The alert document fields to include in the response
     */
    fields?: QueryDslFieldAndFormat[];
    /**
     * Sort combinations to apply to the query
     */
    sort: SortCombinations[];
    /**
     * Runtime mappings to apply to the query
     */
    runtimeMappings?: MappingRuntimeFields;
    /**
     * The page index to fetch
     */
    pageIndex: number;
    /**
     * The page size to fetch
     */
    pageSize: number;
    /**
     * Force using the default context, otherwise use the AlertQueryContext
     */
    skipAlertsQueryContext?: boolean;
    /**
     * The minimum score to apply to the query
     */
    minScore?: number;
    /**
     * Whether to track the score of the query
     */
    trackScores?: boolean;
}
export interface SearchAlertsResult {
    alerts: Alert[];
    oldAlertsData: LegacyField[][];
    ecsAlertsData: unknown[];
    total: number;
    querySnapshot?: EsQuerySnapshot;
    error?: Error;
}
/**
 * Performs an ES search query to fetch alerts applying alerting RBAC and area-based filtering
 */
export declare const searchAlerts: ({ data, signal, ruleTypeIds, consumers, fields, query, sort, runtimeMappings, pageIndex, pageSize, minScore, trackScores, }: SearchAlertsParams) => Promise<SearchAlertsResult>;
