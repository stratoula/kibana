import React from 'react';
export declare const MODEL_GPT_4_TURBO = "gpt-4-turbo";
export declare const MODEL_GPT_4O_MINI = "gpt-4o-mini";
export declare const MODEL_GPT_41 = "gpt-4.1";
interface Props {
    onModelSelectionChange?: (model?: string) => void;
    models?: string[];
    selectedModel?: string;
}
/**
 * Selector for choosing and deleting models
 *
 * TODO: Pull from API once connector supports it `GET https://api.openai.com/v1/models` as models are added/deprecated
 */
export declare const ModelSelector: React.FC<Props>;
export {};
