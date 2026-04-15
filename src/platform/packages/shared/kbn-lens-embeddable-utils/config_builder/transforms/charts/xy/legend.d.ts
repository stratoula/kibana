import type { XYVisualizationState } from '@kbn/lens-common';
import type { XYState } from '../../../schema';
export declare function convertLegendToStateFormat(legend: XYState['legend']): {
    legend: XYVisualizationState['legend'];
};
export declare function convertLegendToAPIFormat(legend: XYVisualizationState['legend']): Pick<XYState, 'legend'> | {};
