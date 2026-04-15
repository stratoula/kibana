import type { HasEditCapabilities, HasLibraryTransforms, HasSupportedTriggers, PublishesBlockingError, PublishesDataLoading, PublishesDataViews, PublishesDisabledActionIds, PublishesProjectRoutingOverrides, PublishesRendered, PublishesSavedObjectId, PublishesUnifiedSearch, PublishesViewMode, PublishesWritableDescription, PublishesWritableTitle, PublishesUnsavedChanges, SerializedTitles, SerializedTimeRange } from '@kbn/presentation-publishing';
import type { LensApiSchemaType } from '@kbn/lens-embeddable-utils';
import type { Simplify } from '@kbn/chart-expressions-common';
import type { LensByValueBase, LensByRefSerializedState, LensInspectorAdapters, LensRequestHandlersProps, LensApiCallbacks, LensHasEditPanel, LensSerializedState } from '@kbn/lens-common';
import type { PublishesSearchSession } from '@kbn/presentation-publishing/interfaces/fetch/publishes_search_session';
import type { DefaultEmbeddableApi } from '@kbn/embeddable-plugin/public';
import type { SerializedDrilldowns } from '@kbn/embeddable-plugin/server';
/**
 * Panel-level state that should be persisted for by-value Lens panels.
 * Excludes runtime/inherited state from unified search and dashboard contexts.
 */
type LensPersistableState = SerializedTitles & // title, description, hide_title
SerializedDrilldowns & SerializedTimeRange;
export type LensByValueSerializedAPIConfig = LensPersistableState & {
    attributes: LensApiSchemaType | LensByValueBase['attributes'];
    ref_id?: string;
};
export type LensByRefSerializedAPIConfig = LensByRefSerializedState;
/**
 * Combined properties of API config used in dashboard API for lens panels
 *
 *  Includes:
 * - Lens document state (for by-value)
 * - Panel settings
 * - other props from the embeddable
 */
export type LensSerializedAPIConfig = LensByRefSerializedAPIConfig | LensByValueSerializedAPIConfig;
export interface LegacyLensStateApi {
    /**
     * Returns legacy serialized state to avoid duplicate transformations
     *
     * @deprecated use `serializeState` instead
     */
    getLegacySerializedState: () => LensSerializedState;
}
export type LensApi = Simplify<DefaultEmbeddableApi<LensSerializedAPIConfig> & HasEditCapabilities & PublishesBlockingError & PublishesUnifiedSearch & PublishesSearchSession & PublishesDataLoading & PublishesRendered & PublishesDataViews & PublishesWritableTitle & PublishesWritableDescription & HasSupportedTriggers & PublishesDisabledActionIds & HasLibraryTransforms<LensSerializedAPIConfig, LensSerializedAPIConfig> & PublishesViewMode & PublishesSavedObjectId & PublishesUnsavedChanges & PublishesProjectRoutingOverrides & LensInspectorAdapters & LensRequestHandlersProps & LensApiCallbacks & LensHasEditPanel & LegacyLensStateApi>;
/**
 * Backward compatibility types
 */
export type LensEmbeddableOutput = LensApi;
export {};
