import React from 'react';
import type { PromptResponse } from '@kbn/elastic-assistant-common/impl/schemas';
export declare const KNOWLEDGE_BASE_CATEGORY = "knowledge-base";
interface QuickPromptsProps {
    setInput: (input: string) => void;
    setIsSettingsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    trackPrompt: (prompt: string) => void;
    allPrompts: PromptResponse[];
}
/**
 * Component displaying a horizontal list of quick prompts, with callback for retrieving the selected quick prompt
 * text, and support for adding new quick prompts and editing existing. Also supports overflow of quick prompts,
 * and localstorage for storing new and edited prompts.
 */
export declare const QuickPrompts: React.FC<QuickPromptsProps>;
export {};
