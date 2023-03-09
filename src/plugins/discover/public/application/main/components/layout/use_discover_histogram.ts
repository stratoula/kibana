/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { DataView } from '@kbn/data-views-plugin/common';
import { useQuerySubscriber } from '@kbn/unified-field-list-plugin/public';
import {
  UnifiedHistogramApi,
  UnifiedHistogramFetchStatus,
  UnifiedHistogramInitializedApi,
  UnifiedHistogramState,
} from '@kbn/unified-histogram-plugin/public';
import { isEqual } from 'lodash';
import { AggregateQuery, Query, isOfAggregateQueryType } from '@kbn/es-query';
import { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { useDiscoverServices } from '../../../../hooks/use_discover_services';
import { getUiActions } from '../../../../kibana_services';
import { FetchStatus } from '../../../types';
import { useDataState } from '../../hooks/use_data_state';
import type { InspectorAdapters } from '../../hooks/use_inspector';
import type { DataFetch$, SavedSearchData } from '../../services/discover_data_state_container';
import { checkHitCount, sendErrorTo } from '../../hooks/use_saved_search_messages';
import { useAppStateSelector } from '../../services/discover_app_state_container';
import type { DiscoverStateContainer } from '../../services/discover_state';
import type { Suggestion } from '@kbn/lens-plugin/public';

export interface UseDiscoverHistogramProps {
  stateContainer: DiscoverStateContainer;
  savedSearchData$: SavedSearchData;
  dataView: DataView;
  inspectorAdapters: InspectorAdapters;
  savedSearchFetch$: DataFetch$;
  searchSessionId: string | undefined;
  isPlainRecord: boolean;
}

export const useDiscoverHistogram = ({
  stateContainer,
  savedSearchData$,
  dataView,
  inspectorAdapters,
  savedSearchFetch$,
  searchSessionId,
  isPlainRecord,
}: UseDiscoverHistogramProps) => {
  const services = useDiscoverServices();
  const timefilter = services.data.query.timefilter.timefilter;

  /**
   * API initialization
   */

  const [unifiedHistogram, setUnifiedHistogram] = useState<UnifiedHistogramInitializedApi>();
  const prev = useRef<{ query: AggregateQuery | Query | undefined; columns: string[] | undefined }>(
    {
      columns: [],
      query: undefined,
    }
  );

  const setUnifiedHistogramApi = useCallback(
    (api: UnifiedHistogramApi | null) => {
      if (!api) {
        return;
      }

      if (api.initialized) {
        setUnifiedHistogram(api);
      } else {
        const {
          hideChart: chartHidden,
          interval: timeInterval,
          breakdownField,
          columns,
        } = stateContainer.appState.getState();

        const { fetchStatus: totalHitsStatus, result: totalHitsResult } =
          savedSearchData$.totalHits$.getValue();

        const { query, filters, time: timeRange } = services.data.query.getState();
        prev.current.query = query;
        prev.current.columns = columns;

        api.initialize({
          services: { ...services, uiActions: getUiActions() },
          localStorageKeyPrefix: 'discover',
          disableAutoFetching: true,
          getRelativeTimeRange: timefilter.getTime,
          initialState: {
            dataView,
            query,
            filters,
            timeRange,
            chartHidden,
            timeInterval,
            columns,
            breakdownField,
            searchSessionId,
            totalHitsStatus: totalHitsStatus.toString() as UnifiedHistogramFetchStatus,
            totalHitsResult,
            requestAdapter: inspectorAdapters.requests,
          },
        });
      }
    },
    [
      dataView,
      inspectorAdapters.requests,
      savedSearchData$.totalHits$,
      searchSessionId,
      services,
      stateContainer.appState,
      timefilter.getTime,
    ]
  );

  /**
   * Sync Unified Histogram state with Discover state
   */

  useEffect(() => {
    const subscription = createStateSyncObservable(unifiedHistogram?.state$)?.subscribe((state) => {
      inspectorAdapters.lensRequests = state.lensRequestAdapter;

      const { hideChart, interval, breakdownField } = stateContainer.appState.getState();
      const oldState = { hideChart, interval, breakdownField };
      const newState = {
        hideChart: state.chartHidden,
        interval: state.timeInterval,
        breakdownField: state.breakdownField,
      };

      if (!isEqual(oldState, newState)) {
        stateContainer.appState.update(newState);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [inspectorAdapters, stateContainer, unifiedHistogram]);

  /**
   * Update Unified Histgoram request params
   */
  const { query, filters } = useQuerySubscriber({ data: services.data });
  const timeRange = timefilter.getAbsoluteTime();

  useEffect(() => {
    unifiedHistogram?.setRequestParams({
      dataView,
      query,
      filters,
      timeRange,
      searchSessionId,
      requestAdapter: inspectorAdapters.requests,
    });
  }, [
    dataView,
    filters,
    inspectorAdapters.requests,
    query,
    searchSessionId,
    timeRange,
    unifiedHistogram,
  ]);

  /**
   * Override Unified Histgoram total hits with Discover partial results
   */

  const firstLoadComplete = useRef(false);

  const { fetchStatus: totalHitsStatus, result: totalHitsResult } = useDataState(
    savedSearchData$.totalHits$
  );

  useEffect(() => {
    // We only want to show the partial results on the first load,
    // or there will be a flickering effect as the loading spinner
    // is quickly shown and hidden again on fetches
    if (!firstLoadComplete.current && !isPlainRecord) {
      unifiedHistogram?.setTotalHits({
        totalHitsStatus: totalHitsStatus.toString() as UnifiedHistogramFetchStatus,
        totalHitsResult,
      });
    }
  }, [isPlainRecord, totalHitsResult, totalHitsStatus, unifiedHistogram]);

  /**
   * Sync URL query params with Unified Histogram
   */

  const hideChart = useAppStateSelector((state) => state.hideChart);

  useEffect(() => {
    if (typeof hideChart === 'boolean') {
      unifiedHistogram?.setChartHidden(hideChart);
    }
  }, [hideChart, unifiedHistogram]);

  const timeInterval = useAppStateSelector((state) => state.interval);

  useEffect(() => {
    if (timeInterval) {
      unifiedHistogram?.setTimeInterval(timeInterval);
    }
  }, [timeInterval, unifiedHistogram]);

  const breakdownField = useAppStateSelector((state) => state.breakdownField);

  useEffect(() => {
    unifiedHistogram?.setBreakdownField(breakdownField);
  }, [breakdownField, unifiedHistogram]);

  const columns = useAppStateSelector((state) => state.columns);


  useEffect(() => {
    const currentQueryIsTextBased = query && isOfAggregateQueryType(query);
    const initialQueryIsTextBased =
      prev.current.query && isOfAggregateQueryType(prev.current.query);
    // Update the columns only when the query changes
    if (!isEqual(columns, prev.current.columns) && !isEqual(query, prev.current.query)) {
      // transitioning from dataview mode to text based mode should set the columns to []
      if (currentQueryIsTextBased && !initialQueryIsTextBased) {
        unifiedHistogram?.setColumns([]);
      } else {
        unifiedHistogram?.setColumns(columns);
      }
      prev.current.query = query;
      prev.current.columns = columns;
    }
  }, [columns, query, unifiedHistogram]);

  /**
   * Total hits
   */

  const setTotalHitsError = useMemo(
    () => sendErrorTo(savedSearchData$.totalHits$),
    [savedSearchData$.totalHits$]
  );

  useEffect(() => {
    const subscription = createTotalHitsObservable(unifiedHistogram?.state$)?.subscribe(
      ({ status, result }) => {
        if (result instanceof Error) {
          // Set totalHits$ to an error state
          setTotalHitsError(result);
          return;
        }

        if (isPlainRecord) {
          return;
        }

        const { recordRawType } = savedSearchData$.totalHits$.getValue();

        // Sync the totalHits$ observable with the unified histogram state
        savedSearchData$.totalHits$.next({
          fetchStatus: status.toString() as FetchStatus,
          result,
          recordRawType,
        });

        if (status !== UnifiedHistogramFetchStatus.complete || typeof result !== 'number') {
          return;
        }

        // Check the hits count to set a partial or no results state
        checkHitCount(savedSearchData$.main$, result);

        // Indicate the first load has completed so we don't show
        // partial results on subsequent fetches
        firstLoadComplete.current = true;
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, [
    savedSearchData$.main$,
    savedSearchData$.totalHits$,
    services.data,
    setTotalHitsError,
    unifiedHistogram,
    isPlainRecord,
  ]);

  /**
   * Data fetching
   */

  const skipRefetch = useRef<boolean>();

  // Skip refetching when showing the chart since Lens will
  // automatically fetch when the chart is shown
  useEffect(() => {
    if (skipRefetch.current === undefined) {
      skipRefetch.current = false;
    } else {
      skipRefetch.current = !hideChart;
    }
  }, [hideChart]);

  // Trigger a unified histogram refetch when savedSearchFetch$ is triggered
  useEffect(() => {
    const subscription = savedSearchFetch$.subscribe(() => {
      if (!skipRefetch.current) {
        unifiedHistogram?.refetch();
      }

      skipRefetch.current = false;
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [savedSearchFetch$, unifiedHistogram]);

  // Reload the chart when the current suggestion changes
  const [currentSuggestion, setCurrentSuggestion] = useState<Suggestion>();

  useEffect(() => {
    if (currentSuggestion) {
      unifiedHistogram?.refetch();
    }
  }, [currentSuggestion, unifiedHistogram]);

  useEffect(() => {
    const subscription = createCurrentSuggestionObservable(unifiedHistogram?.state$)?.subscribe(
      setCurrentSuggestion
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, [unifiedHistogram]);

  return { hideChart, setUnifiedHistogramApi };
};

const createStateSyncObservable = (state$?: Observable<UnifiedHistogramState>) => {
  return state$?.pipe(
    map(({ lensRequestAdapter, chartHidden, timeInterval, breakdownField }) => ({
      lensRequestAdapter,
      chartHidden,
      timeInterval,
      breakdownField,
    })),
    distinctUntilChanged((prev, curr) => {
      const { lensRequestAdapter: prevLensRequestAdapter, ...prevRest } = prev;
      const { lensRequestAdapter: currLensRequestAdapter, ...currRest } = curr;

      return prevLensRequestAdapter === currLensRequestAdapter && isEqual(prevRest, currRest);
    })
  );
};

const createTotalHitsObservable = (state$?: Observable<UnifiedHistogramState>) => {
  return state$?.pipe(
    map((state) => ({ status: state.totalHitsStatus, result: state.totalHitsResult })),
    distinctUntilChanged((prev, curr) => prev.status === curr.status && prev.result === curr.result)
  );
};

const createCurrentSuggestionObservable = (state$?: Observable<UnifiedHistogramState>) => {
  return state$?.pipe(
    map((state) => state.currentSuggestion),
    distinctUntilChanged(isEqual)
  );
};
