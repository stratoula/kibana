import type { FormBasedLayer, DatatableVisualizationState, TextBasedLayer } from '@kbn/lens-common';
import type { DatatableStateESQL, DatatableStateNoESQL } from '../../../../schema';
type DatatableColumnsNoESQLAndMapping = Pick<DatatableStateNoESQL, 'metrics' | 'rows' | 'split_metrics_by'> & {
    columnIdMapping: ColumnIdMapping;
};
type DatatableColumnsESQLAndMapping = Pick<DatatableStateESQL, 'metrics' | 'rows' | 'split_metrics_by'> & {
    columnIdMapping: ColumnIdMapping;
};
export interface ColumnIdMappingValue {
    type: 'metric' | 'row' | 'split_metrics_by';
    index: number;
}
/**
 * Maps old column IDs to their new type and index in the API format.
 * Used to translate sorting column references during transformation.
 */
export type ColumnIdMapping = Map<string, ColumnIdMappingValue>;
export declare function convertDatatableColumnsToAPI(layer: Omit<FormBasedLayer, 'indexPatternId'>, visualization: DatatableVisualizationState): DatatableColumnsNoESQLAndMapping;
export declare function convertDatatableColumnsToAPI(layer: TextBasedLayer, visualization: DatatableVisualizationState): DatatableColumnsESQLAndMapping;
export {};
