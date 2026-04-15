import React from 'react';
import type { PromptContext } from '../assistant/prompt_context/types';
export type Props = Omit<PromptContext, 'id'> & {
    children?: React.ReactNode;
    /** Optionally automatically add this context to a conversation when the assistant is shown */
    conversationTitle?: string;
    /** Defaults to `discuss`. If null, the button will not have an icon. Not available for link */
    iconType?: string | null;
    /** Optionally specify a well known ID, or default to a UUID */
    promptContextId?: string;
    /** Optionally specify color of empty button */
    color?: 'text' | 'accent' | 'primary' | 'success' | 'warning' | 'danger';
    /** Required to identify the availability of the Assistant for the current license level */
    isAssistantEnabled: boolean;
    /** Optionally render new chat as a link */
    asLink?: boolean;
    /** Optional callback when overlay shows */
    onShowOverlay?: () => void;
    /** Optional callback that returns copied code block */
    onExportCodeBlock?: (codeBlock: string) => void;
};
/**
 * `NewChat` displays a _New chat_ icon button, providing all the context
 * necessary to start a new chat. You may optionally style the button icon,
 * or override the default _New chat_ text with custom content, like `🪄✨`
 *
 * USE THIS WHEN: All the data necessary to start a new chat is available
 * in the same part of the React tree as the _New chat_ button.
 */
export declare const NewChat: React.NamedExoticComponent<Props>;
