import React from 'react';
import type { PromptResponse } from '@kbn/elastic-assistant-common/impl/schemas';
import type { EuiSetColorMethod } from '@elastic/eui/src/services/color_picker/color_picker';
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
/**
 * Settings adding/removing quick prompts. Configure name, color, prompt and category.
 */
export declare const QuickPromptSettings: React.FC<Props>;
export {};
