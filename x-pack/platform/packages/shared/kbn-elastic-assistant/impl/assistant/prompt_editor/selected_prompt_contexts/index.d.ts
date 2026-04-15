import React from 'react';
import type { Conversation } from '../../../assistant_context/types';
import type { PromptContext, SelectedPromptContext } from '../../prompt_context/types';
export interface Props {
    promptContexts: Record<string, PromptContext>;
    selectedPromptContexts: Record<string, SelectedPromptContext>;
    setSelectedPromptContexts: React.Dispatch<React.SetStateAction<Record<string, SelectedPromptContext>>>;
    currentReplacements: Conversation['replacements'] | undefined;
}
export declare const SelectedPromptContexts: React.NamedExoticComponent<Props>;
