/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import './timeseries_visualization.scss';

import React, { useCallback, useEffect } from 'react';

import { get } from 'lodash';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { XYChartSeriesIdentifier, GeometryValue } from '@elastic/charts';
import { IUiSettingsClient } from 'src/core/public';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';
import { PersistedState } from 'src/plugins/visualizations/public';
import { PaletteRegistry } from 'src/plugins/charts/public';
import { ValueClickContext } from 'src/plugins/embeddable/public';

// @ts-expect-error
import { ErrorComponent } from './error';
import { TimeseriesVisTypes } from './vis_types';
import { TimeseriesVisData, PanelData, isVisSeriesData } from '../../../common/types';
import { fetchIndexPattern } from '../../../common/index_patterns_utils';
import { TimeseriesVisParams } from '../../types';
import { getDataStart } from '../../services';
import { convertSeriesToDataTable } from './lib/convert_series_to_datatable';
import { X_ACCESSOR_INDEX } from '../visualizations/constants';
import { LastValueModeIndicator } from './last_value_mode_indicator';
import { getInterval } from './lib/get_interval';
import { AUTO_INTERVAL } from '../../../common/constants';
import { TIME_RANGE_DATA_MODES } from '../../../common/timerange_data_modes';
import { PANEL_TYPES } from '../../../common/panel_types';

interface TimeseriesVisualizationProps {
  className?: string;
  getConfig: IUiSettingsClient['get'];
  handlers: IInterpreterRenderHandlers;
  model: TimeseriesVisParams;
  visData: TimeseriesVisData;
  uiState: PersistedState;
  syncColors: boolean;
  palettesService: PaletteRegistry;
}

function TimeseriesVisualization({
  className = 'tvbVis',
  visData,
  model,
  handlers,
  uiState,
  getConfig,
  syncColors,
  palettesService,
}: TimeseriesVisualizationProps) {
  const onBrush = useCallback(
    async (gte: string, lte: string, series: PanelData[]) => {
      const indexPatternValue = model.index_pattern || '';
      const { indexPatterns } = getDataStart();
      const { indexPattern } = await fetchIndexPattern(indexPatternValue, indexPatterns);

      const tables = indexPattern
        ? await convertSeriesToDataTable(model, series, indexPattern)
        : null;
      const table = tables?.[model.series[0].id];

      const range: [number, number] = [parseInt(gte, 10), parseInt(lte, 10)];
      const event = {
        data: {
          table,
          column: X_ACCESSOR_INDEX,
          range,
          timeFieldName: indexPattern?.timeFieldName,
        },
        name: 'brush',
      };
      handlers.event(event);
    },
    [handlers, model]
  );

  const handleFilterClick = useCallback(
    async (series: PanelData[], points: Array<[GeometryValue, XYChartSeriesIdentifier]>) => {
      const data: ValueClickContext['data']['data'] = [];
      const indexPatternValue = model.index_pattern || '';
      const { indexPatterns } = getDataStart();
      const { indexPattern } = await fetchIndexPattern(indexPatternValue, indexPatterns);

      const tables = indexPattern
        ? await convertSeriesToDataTable(model, series, indexPattern)
        : null;

      points.forEach((point) => {
        const [geometry] = point;
        const { specId } = point[1];
        const termArray = specId.split(':');
        const table = tables?.[termArray[0]];
        if (!table) return;

        const index = table?.rows.findIndex((row) => {
          const condition =
            geometry.x === row[X_ACCESSOR_INDEX] && geometry.y === row[X_ACCESSOR_INDEX + 1];
          return termArray.length > 1
            ? condition && row[X_ACCESSOR_INDEX + 2] === termArray[1]
            : condition;
        });
        if (!index) return;

        // Filter out the metric column
        const bucketCols = table?.columns.filter(
          (col) => col?.meta?.sourceParams?.schema === 'group'
        );

        const newData = bucketCols?.map(({ id }) => ({
          table,
          column: parseInt(id, 10),
          row: index,
          value: table?.rows?.[index]?.[id] ?? null,
        }));
        if (newData?.length) {
          data.push(...newData);
        }
      });

      const event = {
        name: 'filterBucket',
        data: {
          data,
          negate: false,
          timeFieldName: indexPattern?.timeFieldName,
        },
      };

      handlers.event(event);
    },
    [handlers, model]
  );

  const handleUiState = useCallback(
    (field: string, value: { column: string; order: string }) => {
      uiState.set(field, value);
      // reload visualization because data might need to be re-fetched
      uiState.emit('reload');
    },
    [uiState]
  );

  useEffect(() => {
    handlers.done();
  });

  // Show the error panel
  const error = isVisSeriesData(visData) && visData[model.id]?.error;
  if (error) {
    return (
      <div className={className}>
        <ErrorComponent error={error} />
      </div>
    );
  }

  const VisComponent = TimeseriesVisTypes[model.type];

  const isLastValueMode =
    !model.time_range_mode || model.time_range_mode === TIME_RANGE_DATA_MODES.LAST_VALUE;
  const shouldDisplayLastValueIndicator =
    isLastValueMode && !model.hide_last_value_indicator && model.type !== PANEL_TYPES.TIMESERIES;

  if (VisComponent) {
    return (
      <EuiFlexGroup direction="column" gutterSize="none" responsive={false}>
        {shouldDisplayLastValueIndicator && (
          <EuiFlexItem className="tvbLastValueIndicator" grow={false}>
            <LastValueModeIndicator
              seriesData={get(
                visData,
                `${isVisSeriesData(visData) ? model.id : 'series[0]'}.series[0].data`,
                undefined
              )}
              panelInterval={getInterval(visData, model)}
              modelInterval={model.interval ?? AUTO_INTERVAL}
            />
          </EuiFlexItem>
        )}
        <EuiFlexItem>
          <VisComponent
            getConfig={getConfig}
            model={model}
            visData={visData}
            uiState={uiState}
            onBrush={onBrush}
            onFilterClick={handleFilterClick}
            onUiState={handleUiState}
            syncColors={syncColors}
            palettesService={palettesService}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  return <div className={className} />;
}

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { TimeseriesVisualization as default };
