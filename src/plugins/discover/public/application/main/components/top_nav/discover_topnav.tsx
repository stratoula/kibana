/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDiscoverServices } from '../../../../utils/use_discover_services';
import { DiscoverLayoutProps } from '../layout/types';
import { getTopNavLinks } from './get_top_nav_links';
import { Query, TimeRange } from '../../../../../../data/common/query';
import { getHeaderActionMenuMounter } from '../../../../kibana_services';
import { GetStateReturn } from '../../services/discover_state';
import { DataViewType, DataView } from '../../../../../../data_views/common';

export type DiscoverTopNavProps = Pick<
  DiscoverLayoutProps,
  'indexPattern' | 'navigateTo' | 'savedSearch' | 'searchSource'
> & {
  onOpenInspector: () => void;
  query?: Query;
  savedQuery?: string;
  updateQuery: (payload: { dateRange: TimeRange; query?: Query }, isUpdate?: boolean) => void;
  stateContainer: GetStateReturn;
  resetSavedSearch: () => void;
  onChangeIndexPattern: (indexPattern: string) => void;
  onEditRuntimeField: () => void;
};

export const DiscoverTopNav = ({
  indexPattern,
  onOpenInspector,
  query,
  savedQuery,
  stateContainer,
  updateQuery,
  searchSource,
  navigateTo,
  savedSearch,
  resetSavedSearch,
  onChangeIndexPattern,
  onEditRuntimeField,
}: DiscoverTopNavProps) => {
  const history = useHistory();
  const showDatePicker = useMemo(
    () => indexPattern.isTimeBased() && indexPattern.type !== DataViewType.ROLLUP,
    [indexPattern]
  );
  const services = useDiscoverServices();
  const { DataViewPickerComponent, navigation } = services;
  const { TopNavMenu } = navigation.ui;

  const onOpenSavedSearch = useCallback(
    (newSavedSearchId: string) => {
      if (savedSearch.id && savedSearch.id === newSavedSearchId) {
        resetSavedSearch();
      } else {
        history.push(`/view/${encodeURIComponent(newSavedSearchId)}`);
      }
    },
    [history, resetSavedSearch, savedSearch.id]
  );

  const topNavMenu = useMemo(
    () =>
      getTopNavLinks({
        indexPattern,
        navigateTo,
        savedSearch,
        services,
        state: stateContainer,
        onOpenInspector,
        searchSource,
        onOpenSavedSearch,
      }),
    [
      indexPattern,
      navigateTo,
      savedSearch,
      services,
      stateContainer,
      onOpenInspector,
      searchSource,
      onOpenSavedSearch,
    ]
  );

  const updateSavedQueryId = (newSavedQueryId: string | undefined) => {
    const { appStateContainer, setAppState } = stateContainer;
    if (newSavedQueryId) {
      setAppState({ savedQuery: newSavedQueryId });
    } else {
      // remove savedQueryId from state
      const newState = {
        ...appStateContainer.getState(),
      };
      delete newState.savedQuery;
      appStateContainer.set(newState);
    }
  };
  const setMenuMountPoint = useMemo(() => {
    return getHeaderActionMenuMounter();
  }, []);

  const dataViewPickerProps = {
    'data-test-subj': 'discover-dataView-switcher',
    trigger: {
      label: indexPattern?.title || '',
      'data-test-subj': 'discover-dataView-switch-link',
      title: indexPattern?.title || '',
    },
    indexPatternId: indexPattern?.id,
    onAddField: onEditRuntimeField,
    onDataViewCreated: (dataView: DataView) => {
      if (dataView.id) {
        onChangeIndexPattern(dataView.id);
      }
    },
    onChangeDataView: (newIndexPatternId: string) => onChangeIndexPattern(newIndexPatternId),
  };

  return (
    <TopNavMenu
      appName="discover"
      config={topNavMenu}
      indexPatterns={[indexPattern]}
      onQuerySubmit={updateQuery}
      onSavedQueryIdChange={updateSavedQueryId}
      query={query}
      setMenuMountPoint={setMenuMountPoint}
      savedQueryId={savedQuery}
      screenTitle={savedSearch.title}
      showDatePicker={showDatePicker}
      showSaveQuery={!!services.capabilities.discover.saveQuery}
      showSearchBar={true}
      useDefaultBehaviors={true}
      dataViewPickerComponent={<DataViewPickerComponent {...dataViewPickerProps} />}
    />
  );
};
