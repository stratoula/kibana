/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { useEffect, useMemo, useState } from 'react';
import type { DataView, DataViewsContract } from '@kbn/data-views-plugin/public';

import { Capabilities, IUiSettingsClient } from '@kbn/core/public';
import { isEqual } from 'lodash';
import {
  AppState as DiscoverState,
  GetStateReturn as DiscoverGetStateReturn,
} from '../application/main/services/discover_state';
import {
  AppState as ContextState,
  GetStateReturn as ContextGetStateReturn,
} from '../application/context/services/context_state';
import { getStateColumnActions } from '../components/doc_table/actions/columns';

interface UseColumnsProps {
  capabilities: Capabilities;
  config: IUiSettingsClient;
  dataView: DataView;
  dataViews: DataViewsContract;
  useNewFieldsApi: boolean;
  setAppState: DiscoverGetStateReturn['setAppState'] | ContextGetStateReturn['setAppState'];
  state: DiscoverState | ContextState;
}

export const useColumns = ({
  capabilities,
  config,
  dataView,
  dataViews,
  setAppState,
  state,
  useNewFieldsApi,
}: UseColumnsProps) => {
  const [usedColumns, setUsedColumns] = useState(getColumns(state.columns, useNewFieldsApi));
  useEffect(() => {
    const nextColumns = getColumns(state.columns, useNewFieldsApi);
    if (isEqual(usedColumns, nextColumns)) {
      return;
    }
    setUsedColumns(nextColumns);
  }, [state.columns, useNewFieldsApi, usedColumns]);
  const { onAddColumn, onRemoveColumn, onSetColumns, onMoveColumn } = useMemo(
    () =>
      getStateColumnActions({
        capabilities,
        config,
        dataView,
        dataViews,
        setAppState,
        useNewFieldsApi,
        columns: usedColumns,
        sort: state.sort,
      }),
    [
      capabilities,
      config,
      dataView,
      dataViews,
      setAppState,
      state.sort,
      useNewFieldsApi,
      usedColumns,
    ]
  );

  return {
    columns: usedColumns,
    onAddColumn,
    onRemoveColumn,
    onMoveColumn,
    onSetColumns,
  };
};

function getColumns(columns: string[] | undefined, useNewFieldsApi: boolean) {
  if (!columns) {
    return [];
  }
  return useNewFieldsApi ? columns.filter((col) => col !== '_source') : columns;
}
