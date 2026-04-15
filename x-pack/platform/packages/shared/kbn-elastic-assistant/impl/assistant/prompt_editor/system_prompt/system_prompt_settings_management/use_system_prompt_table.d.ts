import type { EuiBasicTableColumn } from '@elastic/eui';
import type { SystemPromptSettings } from '../../../settings/use_settings_updater/use_system_prompt_updater';
export declare const useSystemPromptTable: () => {
    getColumns: ({ isActionsDisabled, isDeleteEnabled, isEditEnabled, onEditActionClicked, onDeleteActionClicked, }: {
        isActionsDisabled: boolean;
        isDeleteEnabled: (conversation: SystemPromptSettings) => boolean;
        isEditEnabled: (conversation: SystemPromptSettings) => boolean;
        onEditActionClicked: (prompt: SystemPromptSettings) => void;
        onDeleteActionClicked: (prompt: SystemPromptSettings) => void;
    }) => Array<EuiBasicTableColumn<SystemPromptSettings>>;
};
