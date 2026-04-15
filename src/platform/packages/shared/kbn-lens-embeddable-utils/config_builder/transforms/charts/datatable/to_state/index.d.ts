import type { DatatableVisualizationState, FormBasedPersistedState } from '@kbn/lens-common';
import type { DatatableState, DatatableStateESQL, DatatableStateNoESQL } from '../../../../schema';
export declare function buildFormBasedLayer(config: DatatableStateNoESQL): FormBasedPersistedState['layers'];
export declare function getValueColumns(config: DatatableStateESQL): import("@kbn/lens-common").TextBasedLayerColumn[];
export declare function buildVisualizationState(config: DatatableState): DatatableVisualizationState;
