import type { EuiBasicTableColumn } from '@elastic/eui';
import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common';
import type { ContextEditorRow } from '../types';
import type { HandlePageChecked, HandlePageUnchecked, HandleRowChecked, HandleRowUnChecked } from '../selection/types';
import type { HandlePageReset, HandleRowReset } from '../../../assistant/settings/use_settings_updater/use_anonymization_updater';
export declare const getSelectionColumns: ({ anonymizationPageFields, handlePageChecked, handlePageReset, handlePageUnchecked, handleRowChecked, handleRowReset, handleRowUnChecked, hasUpdateAIAssistantAnonymization, selectedFields, totalItemCount, }: {
    anonymizationPageFields: FindAnonymizationFieldsResponse["data"];
    handlePageChecked: HandlePageChecked;
    handlePageReset: HandlePageReset;
    handlePageUnchecked: HandlePageUnchecked;
    handleRowChecked: HandleRowChecked;
    handleRowReset: HandleRowReset;
    handleRowUnChecked: HandleRowUnChecked;
    hasUpdateAIAssistantAnonymization: boolean;
    selectedFields: string[];
    totalItemCount: number;
}) => Array<EuiBasicTableColumn<ContextEditorRow>>;
