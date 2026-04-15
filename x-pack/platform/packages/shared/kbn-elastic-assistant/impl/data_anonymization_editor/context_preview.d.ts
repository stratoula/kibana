import React from 'react';
import type { AnonymizedData } from '@kbn/elastic-assistant-common/impl/data_anonymization/types';
import type { SelectedPromptContext } from '../assistant/prompt_context/types';
export interface Props {
    selectedPromptContext: SelectedPromptContext;
    showRealValues: boolean;
    currentReplacements: AnonymizedData['replacements'] | undefined;
    onToggleShowAnonymizedValues: () => void;
}
export declare const SelectedPromptContextPreview: React.MemoExoticComponent<{
    ({ selectedPromptContext, currentReplacements, showRealValues, onToggleShowAnonymizedValues, }: Props): React.JSX.Element;
    displayName: string;
}>;
