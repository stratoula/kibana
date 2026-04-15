import type React from 'react';
import type { ApiConfig, PromptResponse } from '@kbn/elastic-assistant-common';
import type { Conversation } from '../../assistant_context/types';
import type { AIConnector } from '../../connectorland/connector_selector';
export interface CodeBlockDetails {
    type: QueryType;
    content: string;
    start: number;
    end: number;
    getControlContainer?: () => Element | undefined;
    button?: React.ReactNode;
}
export type QueryType = 'eql' | 'esql' | 'kql' | 'dsl' | 'json' | 'no-type' | 'sql';
/**
 * `analyzeMarkdown` is a helper that enriches content returned from a query
 * with action buttons
 *
 * Returns a list of code block details for each code block in the markdown,
 * including the type of code block and the content of the code block.
 *
 * @param markdown
 */
export declare const analyzeMarkdown: (markdown: string) => CodeBlockDetails[];
/**
 * Returns the new conversation default system prompt
 *
 * @param allSystemPrompts All available System Prompts
 */
export declare const getDefaultNewSystemPrompt: (allSystemPrompts: PromptResponse[]) => PromptResponse | undefined;
/**
 * Returns the default system prompt for a given conversation
 *
 * @param allSystemPrompts All available System Prompts
 * @param conversation Conversation to get the default system prompt for
 */
export declare const getDefaultSystemPrompt: ({ allSystemPrompts, conversation, }: {
    allSystemPrompts: PromptResponse[];
    conversation: Conversation | undefined;
}) => PromptResponse | undefined;
/**
 * Returns the API config for a conversation
 *
 * @param allSystemPrompts All available System Prompts
 * @param conversation Conversation to get the API config for
 * @param connectors All available connectors
 * @param defaultConnector Default connector to use
 */
export declare const getConversationApiConfig: ({ allSystemPrompts, conversation, connectors, defaultConnector, }: {
    allSystemPrompts: PromptResponse[];
    conversation: Conversation;
    connectors?: AIConnector[];
    defaultConnector?: AIConnector;
}) => {
    apiConfig: ApiConfig;
};
