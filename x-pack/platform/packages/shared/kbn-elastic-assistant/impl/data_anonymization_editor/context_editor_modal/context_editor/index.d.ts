import React from 'react';
import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common/impl/schemas';
import type { BatchUpdateListItem } from '../../context_editor/types';
export interface Props {
    anonymizationFields: FindAnonymizationFieldsResponse;
    compressed?: boolean;
    onListUpdated: (updates: BatchUpdateListItem[]) => void;
    rawData: Record<string, string[]> | null;
}
export declare const ContextEditor: React.NamedExoticComponent<Props>;
