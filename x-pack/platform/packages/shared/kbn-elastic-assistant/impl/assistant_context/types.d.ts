import type { ApiConfig, InterruptResumeValue, Message, Replacements, User } from '@kbn/elastic-assistant-common';
import type { EuiCommentProps } from '@elastic/eui';
export interface MessagePresentation {
    delay?: number;
    stream?: boolean;
}
export interface ClientMessage extends Omit<Message, 'content' | 'reader'> {
    reader?: ReadableStreamDefaultReader<Uint8Array>;
    content?: string;
    presentation?: MessagePresentation;
}
/**
 * Complete state to reconstruct a conversation instance.
 * Includes all messages, connector configured, and relevant UI state.
 *
 */
export interface Conversation {
    '@timestamp'?: string;
    apiConfig?: ApiConfig;
    createdBy: User;
    users: User[];
    category: string;
    id: string;
    title: string;
    messages: ClientMessage[];
    updatedAt?: string;
    createdAt: string;
    replacements: Replacements;
    excludeFromLastConversationStorage?: boolean;
}
export interface AssistantTelemetry {
    reportAssistantInvoked: (params: {
        invokedBy: string;
    }) => void;
    reportAssistantMessageSent: (params: {
        role: string;
        actionTypeId: string;
        model?: string;
        provider?: string;
        isEnabledKnowledgeBase: boolean;
    }) => void;
    reportAssistantQuickPrompt: (params: {
        promptTitle: string;
    }) => void;
    reportAssistantStarterPrompt: (params: {
        promptTitle: string;
    }) => void;
    reportAssistantSettingToggled: (params: {
        assistantStreamingEnabled?: boolean;
        alertsCountUpdated?: boolean;
    }) => void;
}
export interface AssistantAvailability {
    hasSearchAILakeConfigurations: boolean;
    isAssistantEnabled: boolean;
    isAssistantVisible: boolean;
    isAssistantManagementEnabled: boolean;
    hasAssistantPrivilege: boolean;
    hasConnectorsAllPrivilege: boolean;
    hasConnectorsReadPrivilege: boolean;
    hasUpdateAIAssistantAnonymization: boolean;
    hasManageGlobalKnowledgeBase: boolean;
    hasAgentBuilderPrivilege?: boolean;
    hasAgentBuilderManagePrivilege?: boolean;
}
export type GetAssistantMessages = (commentArgs: {
    abortStream: () => void;
    currentConversation?: Conversation;
    isConversationOwner: boolean;
    isFetchingResponse: boolean;
    refetchCurrentConversation: ({ isStreamRefetch }: {
        isStreamRefetch?: boolean;
    }) => void;
    regenerateMessage: (conversationId: string) => void;
    showAnonymizedValues: boolean;
    setIsStreaming: (isStreaming: boolean) => void;
    systemPromptContent?: string;
    contentReferencesVisible: boolean;
}) => EuiCommentProps[];
export type ResumeGraphFunction = (threadId: string, resumeValue: InterruptResumeValue) => Promise<void>;
