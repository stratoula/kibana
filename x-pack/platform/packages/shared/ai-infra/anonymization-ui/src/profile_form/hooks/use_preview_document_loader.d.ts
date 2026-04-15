import type { FetchPreviewDocument, PreviewTargetType } from '../../contracts';
export interface UsePreviewDocumentLoaderParams {
    targetType: PreviewTargetType;
    targetId: string;
    fetchPreviewDocument?: FetchPreviewDocument;
    onPreviewDocumentLoaded: (document: Record<string, unknown>) => void;
}
export interface UsePreviewDocumentLoaderResult {
    isLoadingPreviewDocument: boolean;
    previewDocumentLoadError?: string;
    previewDocumentSource: 'target' | 'fallback';
}
export declare const usePreviewDocumentLoader: ({ targetType, targetId, fetchPreviewDocument, onPreviewDocumentLoaded, }: UsePreviewDocumentLoaderParams) => UsePreviewDocumentLoaderResult;
