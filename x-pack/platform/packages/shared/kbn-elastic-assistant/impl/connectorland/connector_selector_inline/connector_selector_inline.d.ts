import React from 'react';
import type { ApiConfig, AttackDiscoveryStats } from '@kbn/elastic-assistant-common';
import type { Conversation } from '../../..';
export declare const ADD_NEW_CONNECTOR = "ADD_NEW_CONNECTOR";
interface Props {
    fullWidth?: boolean;
    isDisabled?: boolean;
    selectedConnectorId?: string;
    selectedConversation?: Conversation;
    onConnectorIdSelected?: (connectorId: string) => void;
    onConnectorSelected?: (conversation: Conversation, apiConfig?: ApiConfig) => void;
    stats?: AttackDiscoveryStats | null;
    loadConnectorFeatureId?: string;
    /**
     * Allows parent components to control whether the default connector should be
     * automatically selected or the explicit user selection action required.
     */
    explicitConnectorSelection?: boolean;
}
/**
 * A compact wrapper of the ConnectorSelector component used in the Settings modal.
 */
export declare const ConnectorSelectorInline: React.FC<Props>;
export {};
