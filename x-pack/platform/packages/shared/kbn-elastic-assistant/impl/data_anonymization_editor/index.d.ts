import React from 'react';
import type { AnonymizedData } from '@kbn/elastic-assistant-common/impl/data_anonymization/types';
import type { SelectedPromptContext } from '../assistant/prompt_context/types';
export interface Props {
    selectedPromptContext: SelectedPromptContext;
    setSelectedPromptContexts: React.Dispatch<React.SetStateAction<Record<string, SelectedPromptContext>>>;
    currentReplacements: AnonymizedData['replacements'] | undefined;
}
export declare const DataAnonymizationEditor: React.NamedExoticComponent<Props>;
