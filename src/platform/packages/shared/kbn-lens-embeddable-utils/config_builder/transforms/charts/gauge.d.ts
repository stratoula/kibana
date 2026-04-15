import type { TypedLensSerializedState } from '@kbn/lens-common';
import type { GaugeState, LensApiState } from '../../schema';
import type { LensAttributes } from '../../types';
type GaugeAttributes = Extract<TypedLensSerializedState['attributes'], {
    visualizationType: 'lnsGauge';
}>;
type GaugeAttributesWithoutFiltersAndQuery = Omit<GaugeAttributes, 'state'> & {
    state: Omit<GaugeAttributes['state'], 'filters' | 'query'>;
};
export declare function fromAPItoLensState(config: GaugeState): GaugeAttributesWithoutFiltersAndQuery;
export declare function fromLensStateToAPI(config: LensAttributes): Extract<LensApiState, {
    type: 'gauge';
}>;
export {};
