import React from 'react';
import type { SelectedPromptContext } from '../../assistant/prompt_context/types';
import type { BatchUpdateListItem } from '../context_editor/types';
export interface Props {
    onClose: () => void;
    onSave: (updates: BatchUpdateListItem[]) => void;
    promptContext: SelectedPromptContext;
}
export declare const SelectedPromptContextEditorModal: React.MemoExoticComponent<{
    ({ onClose, onSave, promptContext }: Props): React.JSX.Element;
    displayName: string;
}>;
