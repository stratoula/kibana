import React from 'react';
import type { ConfirmPromptDefinition } from '@kbn/agent-builder-common/agents';
export interface ConfirmationPromptProps {
    prompt: ConfirmPromptDefinition;
    onConfirm: () => void;
    onCancel: () => void;
    isLoading?: boolean;
    isAnswered?: boolean;
    answeredValue?: boolean;
}
export declare const ConfirmationPrompt: React.FC<ConfirmationPromptProps>;
