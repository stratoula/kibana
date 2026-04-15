import React from 'react';
import type { AIConnector, Conversation } from '../../..';
export declare const AssistantConversationBanner: React.MemoExoticComponent<({ isSettingsModalVisible, setIsSettingsModalVisible, shouldShowMissingConnectorCallout, currentConversation, connectors, }: {
    isSettingsModalVisible: boolean;
    setIsSettingsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    shouldShowMissingConnectorCallout: boolean;
    currentConversation: Conversation | undefined;
    connectors: AIConnector[] | undefined;
}) => React.JSX.Element | null>;
