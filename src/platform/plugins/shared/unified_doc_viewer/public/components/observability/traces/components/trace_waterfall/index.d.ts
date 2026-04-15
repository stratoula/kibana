import type { DocViewRenderProps } from '@kbn/unified-doc-viewer/types';
import React from 'react';
import type { DocumentType } from '../full_screen_waterfall/waterfall_flyout/document_detail_flyout';
interface Props {
    traceId: string;
    docId?: string;
    serviceName?: string;
    dataView: DocViewRenderProps['dataView'];
}
export interface TraceWaterfallRestorableState {
    restoredTraceId: string | null;
    showFullScreenWaterfall: boolean;
    activeFlyoutType: DocumentType | null;
    activeSection: 'errors-table' | undefined;
    activeDocId: string | null;
    activeDocIndex: string | undefined;
}
export declare const fullScreenButtonLabel: string;
export declare const TraceWaterfall: React.ForwardRefExoticComponent<Props & Pick<import("@kbn/restorable-state").RestorableStateProviderProps<TraceWaterfallRestorableState>, "onInitialStateChange" | "initialState"> & React.RefAttributes<never>>;
export {};
