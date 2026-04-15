import type { DatatableVisualizationState } from '@kbn/lens-common';
import type { DatatableState } from '../../../../schema';
export declare function buildAppearanceState(config: DatatableState): Pick<DatatableVisualizationState, 'headerRowHeight' | 'headerRowHeightLines' | 'rowHeight' | 'rowHeightLines' | 'density' | 'paging' | 'sorting' | 'showRowNumbers'>;
