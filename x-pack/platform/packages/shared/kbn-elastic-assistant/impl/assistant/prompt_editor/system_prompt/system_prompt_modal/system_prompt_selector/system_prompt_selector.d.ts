import React from 'react';
import type { EuiComboBoxOptionOption } from '@elastic/eui';
import type { SystemPromptSettings } from '../../../../settings/use_settings_updater/use_system_prompt_updater';
export declare const SYSTEM_PROMPT_SELECTOR_CLASSNAME = "systemPromptSelector";
interface Props {
    autoFocus?: boolean;
    onSystemPromptDeleted: (systemPromptTitle: string) => void;
    onSystemPromptSelectionChange: (systemPrompt?: SystemPromptSettings | string) => void;
    systemPrompts: SystemPromptSettings[];
    selectedSystemPrompt?: SystemPromptSettings;
    resetSettings?: () => void;
}
export type SystemPromptSelectorOption = EuiComboBoxOptionOption<{
    isDefault: boolean;
    isNewConversationDefault: boolean;
}>;
/**
 * Selector for choosing and deleting System Prompts
 */
export declare const SystemPromptSelector: React.FC<Props>;
export {};
