import type { QueryClient } from '@kbn/react-query';
import type { ReasoningStep, ToolCallProgress, ToolCallStep } from '@kbn/agent-builder-common';
import type { PromptRequest } from '@kbn/agent-builder-common/agents';
import type { ToolResult } from '@kbn/agent-builder-common/tools/tool_result';
import type { AttachmentInput } from '@kbn/agent-builder-common/attachments';
import type { ConversationsService } from '../../../services/conversations';
export interface ConversationActions {
    removeNewConversationQuery: () => void;
    invalidateConversation: () => void;
    addOptimisticRound: ({ userMessage, attachments, }: {
        userMessage: string;
        attachments?: AttachmentInput[];
    }) => void;
    removeOptimisticRound: () => void;
    clearLastRoundResponse: () => void;
    setAgentId: (agentId: string) => void;
    addReasoningStep: ({ step }: {
        step: ReasoningStep;
    }) => void;
    addToolCall: ({ step }: {
        step: ToolCallStep;
    }) => void;
    setToolCallProgress: ({ progress, toolCallId, }: {
        progress: ToolCallProgress;
        toolCallId: string;
    }) => void;
    setToolCallResult: ({ results, toolCallId, }: {
        results: ToolResult[];
        toolCallId: string;
    }) => void;
    setAssistantMessage: ({ assistantMessage }: {
        assistantMessage: string;
    }) => void;
    addAssistantMessageChunk: ({ messageChunk }: {
        messageChunk: string;
    }) => void;
    setTimeToFirstToken: ({ timeToFirstToken }: {
        timeToFirstToken: number;
    }) => void;
    addPendingPrompt: ({ prompt }: {
        prompt: PromptRequest;
    }) => void;
    clearPendingPrompts: () => void;
    onConversationCreated: ({ conversationId, title, }: {
        conversationId: string;
        title: string;
    }) => void;
    addCompactionStep: ({ tokenCountBefore }: {
        tokenCountBefore: number;
    }) => void;
    setCompactionStepComplete: ({ tokenCountAfter, summarizedRoundCount, }: {
        tokenCountAfter: number;
        summarizedRoundCount: number;
    }) => void;
    deleteConversation: (id: string) => Promise<void>;
    renameConversation: (id: string, title: string) => Promise<void>;
}
interface UseConversationActionsParams {
    conversationId?: string;
    queryClient: QueryClient;
    conversationsService: ConversationsService;
    onConversationCreated?: (params: {
        conversationId: string;
        title: string;
    }) => void;
    onDeleteConversation?: (params: {
        id: string;
        isCurrentConversation: boolean;
    }) => void;
}
export declare const useConversationActions: ({ conversationId, queryClient, conversationsService, onConversationCreated, onDeleteConversation, }: UseConversationActionsParams) => ConversationActions;
export {};
