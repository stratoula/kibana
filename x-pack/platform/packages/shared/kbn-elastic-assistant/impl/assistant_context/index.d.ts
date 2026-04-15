import type { HttpSetup } from '@kbn/core-http-browser';
import type { User, AssistantFeatures } from '@kbn/elastic-assistant-common';
import React from 'react';
import type { IToasts } from '@kbn/core-notifications-browser';
import type { Observable } from 'rxjs';
import type { AIExperienceSelection } from '@kbn/ai-assistant-management-plugin/public';
import type { ActionTypeRegistryContract } from '@kbn/triggers-actions-ui-plugin/public';
import type { DocLinksStart } from '@kbn/core-doc-links-browser';
import type { ChromeStart, UnmountCallback, ApplicationStart, UserProfileService } from '@kbn/core/public';
import type { ProductDocBasePluginStart } from '@kbn/product-doc-base-plugin/public';
import type { SettingsStart } from '@kbn/core-ui-settings-browser';
import type { PromptContext, RegisterPromptContext, UnRegisterPromptContext, PromptContextTemplate } from '../assistant/prompt_context/types';
import type { AssistantAvailability, AssistantTelemetry, Conversation, GetAssistantMessages } from './types';
import type { KnowledgeBaseConfig, TraceOptions } from '../assistant/types';
import type { ModalSettingsTabs } from '../assistant/settings/types';
export type SelectedConversation = {
    id: string;
} | {
    title: string;
};
export interface ShowAssistantOverlayProps {
    showOverlay: boolean;
    promptContextId?: string;
    selectedConversation?: SelectedConversation;
}
type ShowAssistantOverlay = ({ showOverlay, promptContextId, selectedConversation, }: ShowAssistantOverlayProps) => void;
type GetUrlForApp = ApplicationStart['getUrlForApp'];
export interface AssistantProviderProps {
    actionTypeRegistry: ActionTypeRegistryContract;
    alertsIndexPattern?: string;
    assistantAvailability: AssistantAvailability;
    assistantTelemetry?: AssistantTelemetry;
    augmentMessageCodeBlocks: {
        mount: (args: {
            currentConversation: Conversation;
            showAnonymizedValues: boolean;
        }) => UnmountCallback;
    };
    basePath: string;
    basePromptContexts?: PromptContextTemplate[];
    docLinks: DocLinksStart;
    getUrlForApp: GetUrlForApp;
    getComments: GetAssistantMessages;
    http: HttpSetup;
    inferenceEnabled?: boolean;
    nameSpace?: string;
    navigateToApp: ApplicationStart['navigateToApp'];
    title?: string;
    settings: SettingsStart;
    toasts?: IToasts;
    currentAppId: string;
    productDocBase: ProductDocBasePluginStart;
    userProfileService: UserProfileService;
    chrome: ChromeStart;
    openChatTrigger$?: Observable<AIExperienceSelection>;
    completeOpenChat?: () => void;
}
export interface UserAvatar {
    color: string;
    imageUrl?: string;
    initials: string;
}
export interface UseAssistantContext {
    actionTypeRegistry: ActionTypeRegistryContract;
    alertsIndexPattern: string | undefined;
    assistantAvailability: AssistantAvailability;
    assistantFeatures: Partial<AssistantFeatures>;
    assistantStreamingEnabled: boolean;
    assistantTelemetry?: AssistantTelemetry;
    augmentMessageCodeBlocks: {
        mount: (args: {
            currentConversation: Conversation;
            showAnonymizedValues: boolean;
        }) => UnmountCallback;
    };
    docLinks: DocLinksStart;
    basePath: string;
    currentUser?: User;
    getComments: GetAssistantMessages;
    getUrlForApp: GetUrlForApp;
    http: HttpSetup;
    inferenceEnabled: boolean;
    knowledgeBase: KnowledgeBaseConfig;
    promptContexts: Record<string, PromptContext>;
    navigateToApp: ApplicationStart['navigateToApp'];
    nameSpace: string;
    registerPromptContext: RegisterPromptContext;
    selectedSettingsTab: ModalSettingsTabs | null;
    contentReferencesVisible: boolean;
    showAnonymizedValues: boolean;
    settings: SettingsStart;
    setShowAnonymizedValues: React.Dispatch<React.SetStateAction<boolean>>;
    setContentReferencesVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setAssistantStreamingEnabled: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    setKnowledgeBase: React.Dispatch<React.SetStateAction<KnowledgeBaseConfig | undefined>>;
    setSelectedSettingsTab: React.Dispatch<React.SetStateAction<ModalSettingsTabs | null>>;
    setShowAssistantOverlay: (showAssistantOverlay: ShowAssistantOverlay) => void;
    showAssistantOverlay: ShowAssistantOverlay;
    isOverlayOpen: boolean;
    setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTraceOptions: (traceOptions: {
        apmUrl: string;
        langSmithProject: string;
        langSmithApiKey: string;
    }) => void;
    title: string;
    toasts: IToasts | undefined;
    traceOptions: TraceOptions;
    basePromptContexts: PromptContextTemplate[];
    unRegisterPromptContext: UnRegisterPromptContext;
    currentAppId: string;
    codeBlockRef: React.MutableRefObject<(codeBlock: string) => void>;
    productDocBase: ProductDocBasePluginStart;
    userProfileService: UserProfileService;
    chrome: ChromeStart;
    openChatTrigger$?: Observable<AIExperienceSelection>;
    completeOpenChat?: () => void;
}
export declare const useAssistantContext: () => UseAssistantContext;
export declare const useAssistantContextValue: (props: AssistantProviderProps) => UseAssistantContext;
export declare const AssistantProvider: React.FC<{
    children: React.ReactNode;
    value: ReturnType<typeof useAssistantContextValue>;
}>;
export {};
