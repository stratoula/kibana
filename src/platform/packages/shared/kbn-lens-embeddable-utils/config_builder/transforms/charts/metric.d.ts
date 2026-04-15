import { type TypedLensSerializedState } from '@kbn/lens-common';
import type { LensAttributes } from '../../types';
import type { MetricState } from '../../schema';
type MetricAttributes = Extract<TypedLensSerializedState['attributes'], {
    visualizationType: 'lnsMetric';
}>;
export type MetricAttributesWithoutFiltersAndQuery = Omit<MetricAttributes, 'state'> & {
    state: Omit<MetricAttributes['state'], 'filters' | 'query'>;
};
export declare function fromAPItoLensState(config: MetricState): MetricAttributesWithoutFiltersAndQuery;
export declare function fromLensStateToAPI(config: LensAttributes): MetricState;
export {};
