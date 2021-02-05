/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useState } from 'react';
import { assign, get } from 'lodash';
import { FormattedMessage } from '@kbn/i18n/react';
import type { PersistedState } from '../../../../visualizations/public';
import type {
  SanitizedFieldType,
  TimeseriesVisData,
  PanelData,
  PanelSchema,
} from '../../../common/types';
import { TimeseriesVisParams } from '../../metrics_fn';
import { DragHandleProps } from '../../types';
// @ts-ignore
import { TimeseriesSeries as timeseries } from './vis_types/timeseries/series';
// @ts-ignore
import { MetricSeries as metric } from './vis_types/metric/series';
// @ts-ignore
import { TopNSeries as topN } from './vis_types/top_n/series';
// @ts-ignore
import { TableSeries as table } from './vis_types/table/series';
// @ts-ignore
import { GaugeSeries as gauge } from './vis_types/gauge/series';
// @ts-ignore
import { MarkdownSeries as markdown } from './vis_types/markdown/series';
// @ts-ignore
import { VisDataContext } from '../contexts/vis_data_context';

const lookup = {
  top_n: topN,
  table,
  metric,
  timeseries,
  gauge,
  markdown,
};

interface SeriesProps {
  className: string;
  disableAdd: boolean;
  disableDelete: boolean;
  fields: Record<string, SanitizedFieldType[]>;
  name: string;
  style: string;
  onAdd: (props: Record<string, any>) => void;
  onChange: (props: Record<string, any>) => void;
  onClone: (props: Record<string, any>) => void;
  onDelete: (props: Record<string, any>) => void;
  model: TimeseriesVisParams;
  panel: PanelSchema;
  dragHandleProps: DragHandleProps;
  uiState: PersistedState;
}

export function Series(props: SeriesProps) {
  const [selectedTab, setSelectedTab] = useState('metrics');
  const [visible, setVisible] = useState(true);

  const switchTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleChange = (part: unknown) => {
    if (props.onChange) {
      const { model } = props;
      const doc = assign({}, model, part);
      props.onChange(doc);
    }
  };

  const togglePanelActivation = () => {
    const { model } = props;

    handleChange({
      hidden: !model.hidden,
    });
  };

  const toggleVisible = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setVisible(!visible);
  };
  const { panel } = props;
  const Component = lookup[panel.type];
  return (
    <>
      {Boolean(Component) ? (
        <VisDataContext.Consumer>
          {(visData: TimeseriesVisData) => {
            const series = get(visData, `${panel.id}.series`, []) as PanelData[];
            const counter: { [key: string]: number } = {};
            const seriesQuantity = series.reduce((acc: { [key: string]: number }, value) => {
              counter[value.seriesId] = counter[value.seriesId] + 1 || 1;
              acc[value.seriesId] = counter[value.seriesId];
              return acc;
            }, {});

            return (
              <Component
                className={props.className}
                disableAdd={props.disableAdd}
                uiRestrictions={visData.uiRestrictions}
                seriesQuantity={seriesQuantity}
                disableDelete={props.disableDelete}
                fields={props.fields}
                name={props.name}
                onAdd={props.onAdd}
                onChange={handleChange}
                onClone={props.onClone}
                onDelete={props.onDelete}
                model={props.model}
                panel={props.panel}
                selectedTab={selectedTab}
                style={props.style}
                switchTab={switchTab}
                toggleVisible={toggleVisible}
                togglePanelActivation={togglePanelActivation}
                visible={visible}
                dragHandleProps={props.dragHandleProps}
                indexPatternForQuery={panel.index_pattern || panel.default_index_pattern}
                uiState={props.uiState}
              />
            );
          }}
        </VisDataContext.Consumer>
      ) : (
        <FormattedMessage
          id="visTypeTimeseries.seriesConfig.missingSeriesComponentDescription"
          defaultMessage="Missing Series component for panel type: {panelType}"
          values={{ panelType: panel.type }}
        />
      )}
    </>
  );
}
