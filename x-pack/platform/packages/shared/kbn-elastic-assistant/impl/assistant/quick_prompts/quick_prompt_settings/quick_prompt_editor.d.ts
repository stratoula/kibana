import React from 'react';
import type { EuiSetColorMethod } from '@elastic/eui/src/services/color_picker/color_picker';
import type { PromptResponse } from '@kbn/elastic-assistant-common/impl/schemas';
import type { PromptContextTemplate } from '../../../..';
interface Props {
    onPromptContentChange: (newValue: string) => void;
    onQuickPromptColorChange: EuiSetColorMethod;
    onQuickPromptContextChange: (promptContexts: PromptContextTemplate[]) => void;
    onQuickPromptDelete: (id: string) => void;
    onQuickPromptSelect: (quickPrompt?: PromptResponse | string) => void;
    resetSettings?: () => void;
    selectedQuickPrompt: PromptResponse | undefined;
    quickPromptSettings: PromptResponse[];
}
export declare const QuickPromptSettingsEditor: React.MemoExoticComponent<({ onPromptContentChange, onQuickPromptColorChange, onQuickPromptContextChange, onQuickPromptDelete, onQuickPromptSelect, resetSettings, selectedQuickPrompt, quickPromptSettings, }: Props) => React.JSX.Element>;
export {};
