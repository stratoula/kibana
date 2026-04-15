import React from 'react';
import type { AnonymizedData } from '@kbn/elastic-assistant-common/impl/data_anonymization/types';
import type { SelectedPromptContext } from '../../assistant/prompt_context/types';
import type { BatchUpdateListItem } from '../context_editor/types';
interface ContextEditorFlyoutComponentProps {
    selectedPromptContext: SelectedPromptContext;
    currentReplacements?: AnonymizedData['replacements'];
    onListUpdated: (updates: BatchUpdateListItem[]) => void;
    isDataAnonymizable: boolean;
}
export declare const ContextEditorFlyout: React.NamedExoticComponent<ContextEditorFlyoutComponentProps>;
export {};
