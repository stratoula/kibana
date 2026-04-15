import React from 'react';
import type { EuiComboBoxOptionOption } from '@elastic/eui';
import type { PromptContextTemplate } from '../../../..';
interface Props {
    isDisabled?: boolean;
    onPromptContextSelectionChange: (promptContexts: PromptContextTemplate[]) => void;
    promptContexts: PromptContextTemplate[];
    selectedPromptContexts?: PromptContextTemplate[];
}
export type PromptContextSelectorOption = EuiComboBoxOptionOption<{
    category: string;
}>;
/**
 * Selector for choosing multiple Prompt Context Categories
 */
export declare const PromptContextSelector: React.FC<Props>;
export {};
