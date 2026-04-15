import React from 'react';
import type { ActionConnector } from '@kbn/triggers-actions-ui-plugin/public';
import type { OpenAiProviderType } from '@kbn/connector-schemas/openai';
import type { AttackDiscoveryStats } from '@kbn/elastic-assistant-common';
interface Props {
    fullWidth?: boolean;
    isDisabled?: boolean;
    isOpen?: boolean;
    onConnectorSelectionChange: (connector: AIConnector) => void;
    selectedConnectorId?: string;
    displayFancy?: (label: string, aIConnector?: AIConnector) => React.ReactNode;
    setIsOpen?: (isOpen: boolean) => void;
    stats?: AttackDiscoveryStats | null;
    loadConnectorFeatureId?: string;
    /**
     * Allows parent components to control whether the default connector should be
     * automatically selected or the explicit user selection action required.
     */
    explicitConnectorSelection?: boolean;
}
export type AIConnector = ActionConnector & {
    apiProvider?: OpenAiProviderType;
    /** When true, this connector represents an Elastic-managed inference endpoint (EIS). */
    isEis?: boolean;
};
export declare const ConnectorSelector: React.FC<Props>;
export {};
