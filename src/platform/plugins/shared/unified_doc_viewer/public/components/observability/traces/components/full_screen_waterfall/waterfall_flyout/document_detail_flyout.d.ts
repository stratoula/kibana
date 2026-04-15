import { type EuiFlyoutProps } from '@elastic/eui';
import type { DocViewRenderProps } from '@kbn/unified-doc-viewer/types';
import React from 'react';
import type { TraceOverviewSections } from '../../../doc_viewer_overview/overview';
import { type DocumentType } from './use_document_flyout_data';
export type { DocumentType } from './use_document_flyout_data';
export interface DocumentDetailFlyoutProps {
    type: DocumentType;
    docId: string;
    docIndex?: string;
    traceId: string;
    dataView: DocViewRenderProps['dataView'];
    dataTestSubj?: string;
    hasAnimation?: boolean;
    onCloseFlyout: EuiFlyoutProps['onClose'];
    activeSection?: TraceOverviewSections;
    skipNextEventReport?: boolean;
}
export declare function DocumentDetailFlyout({ type, docId, docIndex, traceId, dataView, dataTestSubj, hasAnimation, onCloseFlyout, activeSection, skipNextEventReport, }: DocumentDetailFlyoutProps): React.JSX.Element;
