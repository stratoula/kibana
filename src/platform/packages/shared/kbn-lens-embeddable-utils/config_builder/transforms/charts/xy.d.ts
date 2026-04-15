import type { TypedLensSerializedState, XYPersistedState } from '@kbn/lens-common';
import type { XYState } from '../../schema';
import type { LensAttributes } from '../../types';
type XYLens = Extract<TypedLensSerializedState['attributes'], {
    visualizationType: 'lnsXY';
}>;
type XYLensState = Omit<XYLens['state'], 'filters' | 'query'>;
type XYLensWithoutQueryAndFilters = Omit<XYLens, 'state'> & {
    state: Omit<XYLensState, 'visualization'> & {
        visualization: XYPersistedState;
    };
};
export declare function fromAPItoLensState(config: XYState): XYLensWithoutQueryAndFilters;
export declare function fromLensStateToAPI(config: LensAttributes): XYState;
export {};
