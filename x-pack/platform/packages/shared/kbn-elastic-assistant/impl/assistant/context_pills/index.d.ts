import React from 'react';
import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common/impl/schemas';
import type { PromptContext, SelectedPromptContext } from '../prompt_context/types';
interface Props {
    anonymizationFields: FindAnonymizationFieldsResponse;
    promptContexts: Record<string, PromptContext>;
    selectedPromptContexts: Record<string, SelectedPromptContext>;
    setSelectedPromptContexts: React.Dispatch<React.SetStateAction<Record<string, SelectedPromptContext>>>;
}
export declare const ContextPills: React.NamedExoticComponent<Props>;
export {};
