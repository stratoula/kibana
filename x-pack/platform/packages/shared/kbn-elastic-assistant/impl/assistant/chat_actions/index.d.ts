import React from 'react';
interface OwnProps {
    isDisabled: boolean;
    isLoading: boolean;
    promptValue?: string;
    onSendMessage: () => void;
}
type Props = OwnProps;
/**
 * Renders two EuiButtonIcon components with tooltips for clearing the chat and submitting a message,
 * while handling the disabled and loading states of the buttons.
 */
export declare const ChatActions: React.FC<Props>;
export {};
