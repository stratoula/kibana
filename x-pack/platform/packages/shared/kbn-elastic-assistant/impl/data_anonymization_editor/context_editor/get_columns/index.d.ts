import type { EuiBasicTableColumn } from '@elastic/eui';
import type { ContextEditorRow } from '../types';
import type { HandleRowChecked } from '../selection/types';
import type { OnListUpdated } from '../../../assistant/settings/use_settings_updater/use_anonymization_updater';
export declare const getColumns: ({ compressed, handleRowChecked, hasUpdateAIAssistantAnonymization, onListUpdated, rawData, selectedFields, }: {
    compressed?: boolean;
    handleRowChecked: HandleRowChecked;
    hasUpdateAIAssistantAnonymization: boolean;
    onListUpdated: OnListUpdated;
    rawData: Record<string, string[]> | null;
    selectedFields: string[];
}) => Array<EuiBasicTableColumn<ContextEditorRow>>;
