import type { SelectedPromptContext } from '../../assistant/prompt_context/types';
export declare const getIsDataAnonymizable: (rawData: string | Record<string, string[]>) => boolean;
export interface Stats {
    allowed: number;
    anonymized: number;
    denied: number;
    total: number;
}
export declare const updateSelectedPromptContext: ({ field, operation, selectedPromptContext, update, }: {
    field: string;
    operation: "add" | "remove";
    selectedPromptContext: SelectedPromptContext;
    update: "allow" | "allowReplacement" | "defaultAllow" | "defaultAllowReplacement" | "deny" | "denyReplacement";
}) => SelectedPromptContext;
