/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { Position } from '@elastic/charts';
import {
  Datatable,
  ExpressionFunctionDefinition,
  ExpressionValueRender,
} from '../../../../expressions';
import { CustomPaletteState, PaletteOutput } from '../../../../charts/common';
// import { VisParams, visType } from './expression_renderers';
import {
  EXPRESSION_HEATMAP_NAME,
  EXPRESSION_HEATMAP_LEGEND_NAME,
  EXPRESSION_HEATMAP_GRID_NAME,
  HEATMAP_FUNCTION_RENDERER_NAME,
} from '../constants';

export type ChartShapes = 'heatmap';

export interface HeatmapLegendConfig {
  /**
   * Flag whether the legend should be shown. If there is just a single series, it will be hidden
   */
  isVisible: boolean;
  /**
   * Position of the legend relative to the chart
   */
  position: Position;
  /**
   * Defines the number of lines per legend item
   */
  maxLines?: number;
  /**
   * Defines if the legend items should be truncated
   */
  shouldTruncate?: boolean;
}

export type HeatmapLegendConfigResult = HeatmapLegendConfig & {
  type: typeof EXPRESSION_HEATMAP_LEGEND_NAME;
};

export interface HeatmapGridConfig {
  // grid
  strokeWidth?: number;
  strokeColor?: string;
  cellHeight?: number;
  cellWidth?: number;
  // cells
  isCellLabelVisible: boolean;
  // Y-axis
  isYAxisLabelVisible: boolean;
  yAxisLabelWidth?: number;
  yAxisLabelColor?: string;
  // X-axis
  isXAxisLabelVisible: boolean;
}

export type HeatmapGridConfigResult = HeatmapGridConfig & {
  type: typeof EXPRESSION_HEATMAP_GRID_NAME;
};

export interface HeatmapArguments {
  percentageMode?: boolean;
  percentageFormatPattern?: string;
  useDistinctBands?: boolean;
  showTooltip?: boolean;
  highlightInHover?: boolean;
  palette?: PaletteOutput<CustomPaletteState>;
  shape: ChartShapes;
  xAccessor?: string | number;
  yAccessor?: string | number;
  valueAccessor?: string | number;
  splitRowAccessor?: string | number;
  splitColumnAccessor?: string | number;
  legend: HeatmapLegendConfigResult;
  gridConfig: HeatmapGridConfigResult;
}

export type HeatmapInput = Datatable;

export interface HeatmapExpressionProps {
  data: Datatable;
  args: HeatmapArguments;
}

export interface HeatmapRender {
  type: 'render';
  as: typeof HEATMAP_FUNCTION_RENDERER_NAME;
  value: HeatmapExpressionProps;
}

export type HeatmapExpressionFunctionDefinition = ExpressionFunctionDefinition<
  typeof EXPRESSION_HEATMAP_NAME,
  HeatmapInput,
  HeatmapArguments,
  ExpressionValueRender<HeatmapExpressionProps>
>;
