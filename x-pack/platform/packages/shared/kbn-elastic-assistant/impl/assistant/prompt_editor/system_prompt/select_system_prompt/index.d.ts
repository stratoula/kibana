import React from 'react';
import type { PromptResponse } from '@kbn/elastic-assistant-common/impl/schemas';
export interface Props {
    allPrompts: PromptResponse[];
    compressed?: boolean;
    clearSelectedSystemPrompt?: () => void;
    isClearable?: boolean;
    isDisabled?: boolean;
    isOpen?: boolean;
    isSettingsModalVisible: boolean;
    selectedPrompt: PromptResponse | undefined;
    setIsSettingsModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
    onSystemPromptSelectionChange: (promptId: string | undefined) => void;
}
export declare const SelectSystemPrompt: React.NamedExoticComponent<Props>;
