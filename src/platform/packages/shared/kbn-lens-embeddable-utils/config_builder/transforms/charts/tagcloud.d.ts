import type { TypedLensSerializedState } from '@kbn/lens-common';
import type { LensApiState, TagcloudState } from '../../schema';
import type { LensAttributes } from '../../types';
type TagcloudAttributes = Extract<TypedLensSerializedState['attributes'], {
    visualizationType: 'lnsTagcloud';
}>;
type TagcloudAttributesWithoutFiltersAndQuery = Omit<TagcloudAttributes, 'state'> & {
    state: Omit<TagcloudAttributes['state'], 'filters' | 'query'>;
};
export declare function fromAPItoLensState(config: TagcloudState): TagcloudAttributesWithoutFiltersAndQuery;
export declare function fromLensStateToAPI(config: LensAttributes): Extract<LensApiState, {
    type: 'tag_cloud';
}>;
export {};
