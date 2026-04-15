import type { TypedLensSerializedState } from '@kbn/lens-common';
import type { LensAttributes } from '../../types';
import type { LensApiState, LegacyMetricState } from '../../schema';
type LegacyMetricAttributes = Extract<TypedLensSerializedState['attributes'], {
    visualizationType: 'lnsLegacyMetric';
}>;
type LegacyMetricAttributesWithoutFiltersAndQuery = Omit<LegacyMetricAttributes, 'state'> & {
    state: Omit<LegacyMetricAttributes['state'], 'filters' | 'query'>;
};
export declare function fromAPItoLensState(config: LegacyMetricState): LegacyMetricAttributesWithoutFiltersAndQuery;
export declare function fromLensStateToAPI(config: LensAttributes): Extract<LensApiState, {
    type: 'legacy_metric';
}>;
export {};
