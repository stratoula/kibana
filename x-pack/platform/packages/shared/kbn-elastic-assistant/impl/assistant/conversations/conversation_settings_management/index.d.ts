import React from 'react';
import type { AIConnector } from '../../../connectorland/connector_selector';
interface Props {
    connectors: AIConnector[] | undefined;
    defaultConnector?: AIConnector;
    isDisabled?: boolean;
}
export declare const ConversationSettingsManagement: React.NamedExoticComponent<Props>;
export {};
