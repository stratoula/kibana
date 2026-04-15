import React from 'react';
import type { AnonymizationUiServices, FetchPreviewDocument, TrustedNerModelOption } from '../contracts';
export interface AnonymizationProfilesSectionProps {
    fetch: AnonymizationUiServices['http']['fetch'];
    spaceId: string;
    canShow: boolean;
    canManage: boolean;
    listTrustedNerModels?: () => Promise<TrustedNerModelOption[]>;
    fetchPreviewDocument?: FetchPreviewDocument;
    onCreateSuccess?: () => void;
    onUpdateSuccess?: () => void;
    onDeleteSuccess?: () => void;
    onCreateConflict?: () => void;
    onOpenConflictError?: (error: unknown) => void;
}
export declare const AnonymizationProfilesSection: ({ fetch, spaceId, canShow, canManage, onCreateSuccess, onUpdateSuccess, onDeleteSuccess, listTrustedNerModels, fetchPreviewDocument, onCreateConflict, onOpenConflictError, }: AnonymizationProfilesSectionProps) => React.JSX.Element | null;
