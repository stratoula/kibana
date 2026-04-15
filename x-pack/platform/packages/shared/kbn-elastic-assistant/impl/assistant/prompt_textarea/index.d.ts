import React from 'react';
export interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    setUserPrompt: (value: string) => void;
    isDisabled?: boolean;
    onPromptSubmit: (value: string) => void;
    value: string;
}
export declare const PromptTextArea: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLTextAreaElement>>;
