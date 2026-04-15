import type { DatatableVisualizationState } from '@kbn/lens-common';
import type { DatatableState } from '../../../../schema';
import type { ColumnIdMapping } from './columns';
export declare function convertAppearanceToAPIFormat(visualization: DatatableVisualizationState, columnIdMapping: ColumnIdMapping): Pick<DatatableState, 'density' | 'paging' | 'sort_by' | 'row_numbers'>;
