import React from 'react';
import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common';
import type { HandlePageChecked, HandlePageUnchecked, HandleRowChecked, HandleRowUnChecked } from './types';
import type { ContextEditorRow } from '../types';
export declare const PageSelectionCheckbox: ({ anonymizationPageFields, selectedFields, handlePageChecked, handlePageUnchecked, totalItemCount, handlePageReset, }: {
    anonymizationPageFields?: FindAnonymizationFieldsResponse["data"];
    selectedFields?: string[];
    handlePageChecked: HandlePageChecked;
    handlePageUnchecked: HandlePageUnchecked;
    totalItemCount: number;
    handlePageReset: (fields: string[]) => void;
}) => React.JSX.Element | null;
export declare const InputCheckbox: ({ row, selectedFields, handleRowChecked, handleRowUnChecked, handleRowReset, }: {
    row: ContextEditorRow;
    selectedFields?: string[];
    handleRowChecked: HandleRowChecked;
    handleRowUnChecked: HandleRowUnChecked;
    handleRowReset: (field: string) => void;
}) => React.JSX.Element;
