import React from 'react';
import type { PromptResponse } from '@kbn/elastic-assistant-common';
interface Props {
    allSystemPrompts: PromptResponse[];
    currentSystemPromptId: string | undefined;
    isSettingsModalVisible: boolean;
    compressed?: boolean;
    onSystemPromptSelectionChange: (systemPromptId: string | undefined) => void;
    setIsSettingsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const SystemPrompt: React.NamedExoticComponent<Props>;
export {};
