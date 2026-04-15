import React from 'react';
import type { MetaDataProps, ResultFieldProps } from './result_types';
export declare const DEFAULT_VISIBLE_FIELDS = 3;
export interface ResultProps {
    fields: ResultFieldProps[];
    metaData: MetaDataProps;
    defaultVisibleFields?: number;
    showScore?: boolean;
    compactCard?: boolean;
    onDocumentClick?: () => void;
    onDocumentDelete?: () => void;
    hasDeleteDocumentsPrivilege?: boolean;
}
export declare const Result: React.FC<ResultProps>;
