import type { Conversation } from '../../../../..';
import type { SystemPromptSettings } from '../../../settings/use_settings_updater/use_system_prompt_updater';
export interface SystemPromptSettingsProps {
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
