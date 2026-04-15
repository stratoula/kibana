import React from 'react';
import type { IndicesGetMappingResponse, SearchHit } from '@elastic/elasticsearch/lib/api/types';
import type { Pagination } from '@elastic/eui';
import { type ResultProps } from './result/result';
interface DocumentListProps {
    executionTime?: number;
    dataTelemetryIdPrefix: string;
    docs: SearchHit[];
    docsPerPage: number;
    isLoading: boolean;
    mappings: IndicesGetMappingResponse | undefined;
    meta: Pagination;
    onPaginate: (newPageIndex: number) => void;
    setDocsPerPage?: (docsPerPage: number) => void;
    onDocumentClick?: (doc: SearchHit) => void;
    resultProps?: Partial<ResultProps>;
}
export declare const DocumentList: React.FC<DocumentListProps>;
export {};
