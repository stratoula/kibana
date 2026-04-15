import type { PromptContext } from '../assistant/prompt_context/types';
export declare const getUniquePromptContextId: () => string;
export declare const updatePromptContexts: ({ prevPromptContexts, promptContext, }: {
    prevPromptContexts: Record<string, PromptContext>;
    promptContext: PromptContext;
}) => Record<string, PromptContext>;
