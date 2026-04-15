import type { Dispatch, FunctionComponent, SetStateAction } from 'react';
import React from 'react';
import type { HttpSetup } from '@kbn/core-http-browser';
import type { PromptResponse } from '@kbn/elastic-assistant-common';
import { ConversationSharedState } from '@kbn/elastic-assistant-common';
import type { Conversation } from '../../..';
interface Props {
    allSystemPrompts: PromptResponse[];
    comments: JSX.Element;
    conversationSharedState: ConversationSharedState;
    currentConversation: Conversation | undefined;
    currentSystemPromptId: string | undefined;
    handleOnConversationSelected: ({ cId }: {
        cId: string;
    }) => Promise<void>;
    isAssistantEnabled: boolean;
    isConversationOwner: boolean;
    isSettingsModalVisible: boolean;
    isWelcomeSetup: boolean;
    isLoading: boolean;
    http: HttpSetup;
    setCurrentSystemPromptId: (promptId: string | undefined) => void;
    setIsSettingsModalVisible: Dispatch<SetStateAction<boolean>>;
    setUserPrompt: React.Dispatch<React.SetStateAction<string | null>>;
}
export declare const AssistantBody: FunctionComponent<Props>;
export {};
