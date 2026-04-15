import type { ConversationAction, ConversationRoundStep } from '@kbn/agent-builder-common/chat/conversation';
interface UseSendMessageMutationProps {
    connectorId?: string;
}
interface SendMessageParams {
    message?: string;
    action?: ConversationAction;
}
export declare const useSendMessageMutation: ({ connectorId }?: UseSendMessageMutationProps) => {
    sendMessage: import("@kbn/react-query").UseMutateFunction<void, unknown, SendMessageParams, void>;
    isResponseLoading: boolean;
    error: unknown;
    errorSteps: ConversationRoundStep[];
    pendingMessage: string | undefined;
    agentReasoning: string | null;
    retry: () => void;
    canCancel: boolean;
    cancel: () => void;
    cleanConversation: () => void;
    /**
     * Regenerate the last conversation round.
     * Uses the same mutation flow but with action=regenerate.
     */
    regenerate: () => void;
    isRegenerating: boolean;
    removeError: () => void;
};
export {};
