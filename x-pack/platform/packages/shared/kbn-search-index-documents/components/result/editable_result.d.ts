import React from 'react';
import type { ResultFieldProps } from './result_types';
export interface EditableResultProps {
    leftSideItem?: React.ReactNode;
    hasIndexSelector?: boolean;
    onDeleteDocument: () => void;
    onIndexSelectorChange?: (index: string) => void;
    onIdSelectorChange?: (id: string) => void;
    onExpand?: () => void;
    fields?: ResultFieldProps[];
    indices?: string[];
    initialDocId?: string;
    initialIndex?: string;
    error?: string;
    isLoading?: boolean;
}
export declare const EditableResult: React.FC<EditableResultProps>;
