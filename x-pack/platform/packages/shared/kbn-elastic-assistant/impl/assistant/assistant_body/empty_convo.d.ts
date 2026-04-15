import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import type { PromptResponse } from '@kbn/elastic-assistant-common';
interface Props {
    connectorId?: string;
    currentSystemPromptId: string | undefined;
    isSettingsModalVisible: boolean;
    setIsSettingsModalVisible: Dispatch<SetStateAction<boolean>>;
    setCurrentSystemPromptId: (promptId: string | undefined) => void;
    allSystemPrompts: PromptResponse[];
    setUserPrompt: React.Dispatch<React.SetStateAction<string | null>>;
}
export declare const EmptyConvo: React.FC<Props>;
export {};
