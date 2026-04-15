import React from 'react';
import type { ResultFieldProps } from './result_types';
interface Props {
    documentId: string;
    fields: ResultFieldProps[];
    isExpanded: boolean;
}
export declare const ResultFields: React.FC<Props>;
export {};
