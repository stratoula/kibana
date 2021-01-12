/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { i18n } from '@kbn/i18n';
import { Position } from '@elastic/charts';
import { UiCounterMetricType } from '@kbn/analytics';
import { AggGroupNames } from '../../../data/public';
import { PaletteRegistry } from '../../../charts/public';
import { VIS_EVENT_TO_TRIGGER, BaseVisTypeOptions } from '../../../visualizations/public';

import { PieVisParams, LabelPositions, ValueFormats } from '../types';
import { toExpressionAst } from '../to_ast';
import { getLegendPositions } from '../editor';
import { getPieOptions } from '../editor/components';
import { SplitTooltip } from './split_tooltip';

export const getPieVisTypeDefinition = (
  showElasticChartsOptions = false,
  palettes: PaletteRegistry | undefined,
  trackUiMetric?: (metricType: UiCounterMetricType, eventName: string | string[]) => void
): BaseVisTypeOptions<PieVisParams> => ({
  name: 'pie',
  title: i18n.translate('visTypePie.pie.pieTitle', { defaultMessage: 'Pie' }),
  icon: 'visPie',
  description: i18n.translate('visTypePie.pie.pieDescription', {
    defaultMessage: 'Compare data in proportion to a whole.',
  }),
  toExpressionAst,
  getSupportedTriggers: () => [VIS_EVENT_TO_TRIGGER.filter],
  visConfig: {
    defaults: {
      type: 'pie',
      addTooltip: true,
      addLegend: true,
      legendPosition: Position.Right,
      nestedLegend: false,
      isDonut: true,
      palette: {
        type: 'palette',
        name: 'default',
      },
      labels: {
        show: true,
        last_level: true,
        values: true,
        valuesFormat: ValueFormats.PERCENT,
        truncate: 100,
        position: LabelPositions.DEFAULT,
      },
    },
  },
  editorConfig: {
    collections: {
      legendPositions: getLegendPositions(),
    },
    optionsTemplate: getPieOptions(palettes, showElasticChartsOptions, trackUiMetric),
    schemas: [
      {
        group: AggGroupNames.Metrics,
        name: 'metric',
        title: i18n.translate('visTypePie.pie.metricTitle', {
          defaultMessage: 'Slice size',
        }),
        min: 1,
        max: 1,
        aggFilter: ['sum', 'count', 'cardinality', 'top_hits'],
        defaults: [{ schema: 'metric', type: 'count' }],
      },
      {
        group: AggGroupNames.Buckets,
        name: 'segment',
        title: i18n.translate('visTypePie.pie.segmentTitle', {
          defaultMessage: 'Split slices',
        }),
        min: 0,
        max: Infinity,
        aggFilter: ['!geohash_grid', '!geotile_grid', '!filter'],
      },
      {
        group: AggGroupNames.Buckets,
        name: 'split',
        title: i18n.translate('visTypePie.pie.splitTitle', {
          defaultMessage: 'Split chart',
        }),
        mustBeFirst: true,
        min: 0,
        max: 1,
        aggFilter: ['!geohash_grid', '!geotile_grid', '!filter'],
        // TODO: Remove when split chart aggs are supported
        ...(showElasticChartsOptions && {
          disabled: true,
          tooltip: <SplitTooltip />,
        }),
      },
    ],
  },
  hierarchicalData: true,
});
