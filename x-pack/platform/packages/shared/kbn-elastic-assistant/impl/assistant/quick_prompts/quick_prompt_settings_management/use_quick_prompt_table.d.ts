import type { EuiBasicTableColumn } from '@elastic/eui';
import type { PromptResponse } from '@kbn/elastic-assistant-common';
import type { PromptContextTemplate } from '../../prompt_context/types';
export declare const useQuickPromptTable: () => {
    getColumns: ({ isActionsDisabled, isDeleteEnabled, isEditEnabled, basePromptContexts, onEditActionClicked, onDeleteActionClicked, }: {
        isActionsDisabled: boolean;
        isDeleteEnabled: (prompt: PromptResponse) => boolean;
        isEditEnabled: (prompt: PromptResponse) => boolean;
        basePromptContexts: PromptContextTemplate[];
        onEditActionClicked: (prompt: PromptResponse, color?: string) => void;
        onDeleteActionClicked: (prompt: PromptResponse) => void;
    }) => Array<EuiBasicTableColumn<PromptResponse>>;
};
