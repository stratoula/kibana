import type { FieldRule, RegexRule } from '@kbn/anonymization-common';
import type { FetchPreviewDocument } from '../../contracts';
import { type PreviewRow } from './preview';
import type { TargetType } from '../types';
export type PreviewViewMode = 'table' | 'json';
export type PreviewValueMode = 'original' | 'tokens';
interface UsePreviewPanelStateParams {
    fieldRules: FieldRule[];
    regexRules: RegexRule[];
    isSubmitting: boolean;
    targetType: TargetType;
    targetId: string;
    fetchPreviewDocument?: FetchPreviewDocument;
}
export interface UsePreviewPanelStateResult {
    previewInput: string;
    setPreviewInput: (value: string) => void;
    previewViewMode: PreviewViewMode;
    setPreviewViewMode: (value: PreviewViewMode) => void;
    previewValueMode: PreviewValueMode;
    setPreviewValueMode: (value: PreviewValueMode) => void;
    parsedPreviewDocument?: Record<string, unknown>;
    previewRows: PreviewRow[];
    transformedPreviewDocument?: Record<string, unknown>;
    isLoadingPreviewDocument: boolean;
    previewDocumentLoadError?: string;
    previewDocumentSource: 'target' | 'fallback';
    isControlsDisabled: boolean;
    isInvalidPreviewJson: boolean;
    isEmptyPreviewRows: boolean;
}
export declare const usePreviewPanelState: ({ fieldRules, regexRules, isSubmitting, targetType, targetId, fetchPreviewDocument, }: UsePreviewPanelStateParams) => UsePreviewPanelStateResult;
export {};
