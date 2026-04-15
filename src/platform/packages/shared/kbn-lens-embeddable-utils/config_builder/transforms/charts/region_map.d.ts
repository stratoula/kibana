import type { TypedLensSerializedState } from '@kbn/lens-common';
import type { LensApiState, RegionMapState } from '../../schema';
import type { LensAttributes } from '../../types';
type RegionMapAttributes = Extract<TypedLensSerializedState['attributes'], {
    visualizationType: 'lnsChoropleth';
}>;
type RegionMapAttributesWithoutFiltersAndQuery = Omit<RegionMapAttributes, 'state'> & {
    state: Omit<RegionMapAttributes['state'], 'filters' | 'query'>;
};
export declare function fromAPItoLensState(config: RegionMapState): RegionMapAttributesWithoutFiltersAndQuery;
export declare function fromLensStateToAPI(config: LensAttributes): Extract<LensApiState, {
    type: 'region_map';
}>;
export {};
