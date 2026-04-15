import React from 'react';
import type { BoolQuery, Filter } from '@kbn/es-query';
import type { AlertsSearchBarProps } from './types';
export interface UrlSyncedAlertsSearchBarProps extends Omit<AlertsSearchBarProps, 'query' | 'rangeFrom' | 'rangeTo' | 'filters' | 'onQuerySubmit'> {
    showFilterControls?: boolean;
    urlStorageKey?: string;
    onEsQueryChange: (esQuery: {
        bool: BoolQuery;
    }) => void;
    onFilterSelected?: (filters: Filter[]) => void;
}
/**
 * An abstraction over AlertsSearchBar that syncs the query state with the url
 */
export declare const UrlSyncedAlertsSearchBar: ({ ruleTypeIds, showFilterControls, urlStorageKey, onEsQueryChange, onFilterSelected, ...rest }: UrlSyncedAlertsSearchBarProps) => React.JSX.Element;
