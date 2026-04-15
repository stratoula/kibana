import type { ContextEditorRow } from '../types';
import type { FindAnonymizationFieldsClientResponse } from '../selection/types';
export declare const getRows: ({ anonymizationFields, rawData, }: {
    anonymizationFields?: FindAnonymizationFieldsClientResponse;
    rawData: Record<string, string[]> | null;
}) => ContextEditorRow[];
