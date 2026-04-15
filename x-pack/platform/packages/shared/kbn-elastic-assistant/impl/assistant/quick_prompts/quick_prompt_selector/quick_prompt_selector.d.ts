import React from 'react';
import type { EuiComboBoxOptionOption } from '@elastic/eui';
import type { PromptResponse } from '@kbn/elastic-assistant-common';
interface Props {
    isDisabled?: boolean;
    onQuickPromptDeleted: (quickPromptTitle: string) => void;
    onQuickPromptSelectionChange: (quickPrompt: PromptResponse | string, selectedColor: string) => void;
    quickPrompts: PromptResponse[];
    selectedColor: string;
    selectedQuickPrompt?: PromptResponse;
    resetSettings?: () => void;
}
export type QuickPromptSelectorOption = EuiComboBoxOptionOption<{
    isDefault: boolean;
}>;
/**
 * Selector for choosing and deleting Quick Prompts
 */
export declare const QuickPromptSelector: React.FC<Props>;
export {};
