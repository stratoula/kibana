/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { AggregateQuery, Query } from '@kbn/es-query';
import { isEqual } from 'lodash';
import type { Suggestion } from '@kbn/lens-plugin/public';
import type { DataView } from '@kbn/data-views-plugin/public';
import type { Datatable } from '@kbn/expressions-plugin/common';

import type { UnifiedHistogramServices } from '../../types';
import type { LensAttributesContext } from '../utils/get_lens_attributes';

export function useChartConfigPanel({
  services,
  lensAttributesContext,
  dataView,
  lensTablesAdapter,
  currentSuggestion,
  setIsFlyoutVisible,
  isPlainRecord,
  query,
  onSuggestionChange,
}: {
  services: UnifiedHistogramServices;
  lensAttributesContext: LensAttributesContext;
  dataView: DataView;
  setIsFlyoutVisible: (flag: boolean) => void;
  lensTablesAdapter?: Record<string, Datatable>;
  currentSuggestion?: Suggestion;
  isPlainRecord?: boolean;
  query?: Query | AggregateQuery;
  onSuggestionChange?: (suggestion: Suggestion | undefined) => void;
}) {
  const [EditLensConfigPanel, setEditLensConfigPanel] = useState<JSX.Element | null>(null);
  const shouldUpdateConfigPanel = useRef<boolean>(true);
  const previousSuggestion = useRef<Suggestion | undefined>(undefined);
  const previousQuery = useRef<Query | AggregateQuery | undefined>(undefined);
  const previousAdapters = useRef<Record<string, Datatable> | undefined>(undefined);
  const updateSuggestion = useCallback(
    (datasourceState, visualizationState) => {
      const updatedSuggestion = {
        ...currentSuggestion,
        ...(datasourceState && { datasourceState }),
        ...(visualizationState && { visualizationState }),
      } as Suggestion;
      onSuggestionChange?.(updatedSuggestion);
    },
    [currentSuggestion, onSuggestionChange]
  );
  useEffect(() => {
    const suggestionHasChanged = currentSuggestion?.title !== previousSuggestion?.current?.title;
    const queryHasChanged = !isEqual(query, previousQuery.current);
    shouldUpdateConfigPanel.current = queryHasChanged || suggestionHasChanged;
  }, [currentSuggestion, currentSuggestion?.title, query]);

  useEffect(() => {
    async function fetchLensConfigComponent() {
      const Component = await services.lens.EditLensConfigPanelApi();
      const panel = (
        <Component
          attributes={lensAttributesContext.attributes}
          dataView={dataView}
          adaptersTables={lensTablesAdapter}
          updateAll={updateSuggestion}
          setIsFlyoutVisible={setIsFlyoutVisible}
          datasourceId="textBased"
        />
      );
      setEditLensConfigPanel(panel);
      shouldUpdateConfigPanel.current = false;
      previousSuggestion.current = currentSuggestion;
      previousQuery.current = query;
      previousAdapters.current = lensTablesAdapter;
    }
    const dataHasChanged =
      Boolean(lensTablesAdapter) && !isEqual(previousAdapters.current, lensTablesAdapter);
    if (isPlainRecord && shouldUpdateConfigPanel.current && dataHasChanged) {
      fetchLensConfigComponent();
    }
  }, [
    lensAttributesContext.attributes,
    services.lens,
    dataView,
    updateSuggestion,
    isPlainRecord,
    currentSuggestion,
    query,
    lensTablesAdapter,
    setIsFlyoutVisible,
  ]);

  return isPlainRecord ? EditLensConfigPanel : null;
}
