import type { ColumnState } from '@kbn/lens-common';
import type { DatatableState } from '../../../../schema';
export declare function buildMetricsState(metrics: DatatableState['metrics']): ColumnState[];
export declare function buildRowsState(rows: DatatableState['rows']): ColumnState[];
export declare function buildSplitMetricsByState(splitMetrics: DatatableState['split_metrics_by']): ColumnState[];
