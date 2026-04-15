import React from 'react';
import type { PromptItemArray } from '@kbn/elastic-assistant-common/impl/schemas/security_ai_prompts/common_attributes.gen';
interface Props {
    connectorId?: string;
    compressed?: boolean;
    setUserPrompt: React.Dispatch<React.SetStateAction<string | null>>;
}
interface PromptGroup {
    description: string;
    title: string;
    icon: string;
    prompt: string;
}
export declare const promptGroups: {
    title: string;
    description: string;
    icon: string;
    prompt: string;
}[];
export declare const StarterPrompts: React.FC<Props>;
export declare const getAllPromptIds: (pGroups: PromptGroup[]) => any[];
export declare const formatPromptGroups: (actualPrompts: PromptItemArray) => PromptGroup[];
export {};
