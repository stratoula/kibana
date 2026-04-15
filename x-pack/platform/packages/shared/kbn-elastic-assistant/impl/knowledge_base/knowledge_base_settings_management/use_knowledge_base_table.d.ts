import type { EuiBasicTableColumn } from '@elastic/eui';
import type { KnowledgeBaseEntryResponse } from '@kbn/elastic-assistant-common';
export declare const useKnowledgeBaseTable: () => {
    getColumns: ({ existingIndices, isDeleteEnabled, isEditEnabled, onDeleteActionClicked, onEditActionClicked, isKbSetupInProgress, }: {
        existingIndices?: string[];
        isDeleteEnabled: (entry: KnowledgeBaseEntryResponse) => boolean;
        isEditEnabled: (entry: KnowledgeBaseEntryResponse) => boolean;
        onDeleteActionClicked: (entry: KnowledgeBaseEntryResponse) => void;
        onEditActionClicked: (entry: KnowledgeBaseEntryResponse) => void;
        isKbSetupInProgress: boolean;
    }) => Array<EuiBasicTableColumn<KnowledgeBaseEntryResponse>>;
};
