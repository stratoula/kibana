import React from 'react';
import type { Conversation } from '../../..';
export interface ConnectorSetupProps {
    conversation?: Conversation;
    onConversationUpdate?: ({ cId }: {
        cId: string;
    }) => Promise<void>;
    updateConversationsOnSaveConnector?: boolean;
    /**
     * The ID of the feature to load connectors for.
     * By default, it loads connectors for 'elastic_assistant'.
     */
    loadConnectorFeatureId?: string;
}
export declare const ConnectorSetup: ({ conversation: defaultConversation, onConversationUpdate, updateConversationsOnSaveConnector, loadConnectorFeatureId, }: ConnectorSetupProps) => React.JSX.Element;
