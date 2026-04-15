import type { EuiButtonColor } from '@elastic/eui';
import React from 'react';
import type { EuiButtonEmptySizes } from '@elastic/eui/src/components/button/button_empty/button_empty';
export declare const BUTTON_TEST_ID = "newChatByTitle";
export declare const BUTTON_TEXT_TEST_ID = "newChatByTitleText";
export interface NewChatByTitleComponentProps {
    /**
     * Optionally specify color of empty button.
     * @default 'primary'
     */
    color?: EuiButtonColor;
    /**
     * Callback to display the assistant overlay
     */
    showAssistantOverlay: (show: boolean) => void;
    /**
     *
     */
    size?: EuiButtonEmptySizes;
    /**
     * Optionally specify the text to display.
     */
    text?: string;
}
/**
 * `NewChatByTitle` displays a button by providing only the `promptContextId`
 * of a context that was (already) registered by the `useAssistantOverlay` hook. You may
 * optionally override the default text.
 *
 * USE THIS WHEN: all the data necessary to start a new chat is NOT available
 * in the same part of the React tree as the button. When paired
 * with the `useAssistantOverlay` hook, this option enables context to be
 * registered where the data is available, and then the button can be displayed
 * in another part of the tree.
 */
export declare const NewChatByTitle: React.NamedExoticComponent<NewChatByTitleComponentProps>;
