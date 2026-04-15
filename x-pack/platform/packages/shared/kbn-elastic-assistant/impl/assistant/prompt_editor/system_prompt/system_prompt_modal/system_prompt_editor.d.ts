import React from 'react';
import type { SystemPromptSettings } from '../../../settings/use_settings_updater/use_system_prompt_updater';
import type { Conversation } from '../../../../..';
interface Props {
    conversations: Record<string, Conversation>;
    onConversationSelectionChange: (currentPromptConversations: Conversation[]) => void;
    onNewConversationDefaultChange: (isChecked: boolean) => void;
    onPromptContentChange: (newValue: string) => void;
    onSystemPromptDelete: (id: string) => void;
    onSystemPromptSelect: (systemPrompt?: SystemPromptSettings | string) => void;
    resetSettings?: () => void;
    selectedSystemPrompt: SystemPromptSettings | undefined;
    setPaginationObserver: (ref: HTMLDivElement) => void;
    systemPromptSettings: SystemPromptSettings[];
}
/**
 * Settings for adding/removing system prompts. Configure name, prompt and default conversations.
 */
export declare const SystemPromptEditorComponent: React.FC<Props>;
export declare const SystemPromptEditor: React.NamedExoticComponent<Props>;
export {};
