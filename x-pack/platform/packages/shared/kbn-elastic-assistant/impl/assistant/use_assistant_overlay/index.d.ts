import type { Replacements } from '@kbn/elastic-assistant-common';
import type { PromptContext } from '../prompt_context/types';
interface UseAssistantOverlay {
    showAssistantOverlay: (show: boolean) => void;
    promptContextId: string;
}
/**
 * `useAssistantOverlay` is a hook that registers context with the assistant overlay, and
 * returns an optional `showAssistantOverlay` function to display the assistant overlay.
 * As an alterative to using the `showAssistantOverlay` returned from this hook, you may
 * use the `NewChatByTitle` component and pass it the `promptContextId` returned by this hook.
 *
 * USE THIS WHEN: You want to register context in one part of the tree, and then show
 * a _New chat_ button in another part of the tree without passing around the data, or when
 * you want to build a custom `New chat` button with features not not provided by the
 * `NewChat` component.
 */
export declare const useAssistantOverlay: (
/**
 * The category of data, e.g. `alert | alerts | event | events | string`
 *
 * `category` helps the assistant display the most relevant user prompts
 */
category: PromptContext["category"], 
/**
 * optionally automatically add this context to a specific conversation when the assistant is displayed
 */
conversationTitle: string | null, 
/**
 * The assistant will display this **short**, static description
 * in the context pill
 */
description: PromptContext["description"], 
/**
 * The assistant will invoke this function to retrieve the context data,
 * which will be included in a prompt (e.g. the contents of an alert or an event)
 */
getPromptContext: PromptContext["getPromptContext"], 
/**
 * Optionally provide a unique identifier for this prompt context, or accept the uuid default.
 */
id: PromptContext["id"] | null, 
/**
 * An optional user prompt that's filled in, but not sent, when the Elastic AI Assistant opens
 */
suggestedUserPrompt: PromptContext["suggestedUserPrompt"] | null, 
/**
 * The assistant will display this tooltip when the user hovers over the context pill
 */
tooltip: PromptContext["tooltip"], 
/** Required to identify the availability of the Assistant for the current license level */
isAssistantEnabled: boolean, 
/**
 * Optionally provide a map of replacements associated with the context, i.e. replacements for an attack discovery that's provided as context
 */
replacements?: Replacements | null) => UseAssistantOverlay;
export {};
