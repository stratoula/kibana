import React from 'react';
import type { ConversationRoundStep } from '@kbn/agent-builder-common';
interface SendMessageState {
    sendMessage: ({ message }: {
        message: string;
    }) => void;
    isResponseLoading: boolean;
    pendingMessage: string | undefined;
    error: unknown;
    errorSteps: ConversationRoundStep[];
    agentReasoning: string | null;
    retry: () => void;
    canCancel: boolean;
    cancel: () => void;
    cleanConversation: () => void;
    removeError: () => void;
    resumeRound: (opts: {
        prompts: Record<string, {
            allow: boolean;
        }>;
    }) => void;
    isResuming: boolean;
    regenerate: () => void;
    isRegenerating: boolean;
    connectorSelection: {
        selectedConnector: string | undefined;
        selectConnector: (connectorId: string) => void;
        defaultConnectorId?: string;
    };
}
export declare const SendMessageProvider: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const useSendMessage: () => SendMessageState;
export {};
