import React from 'react';
import type { AIConnector } from '../../../../connectorland/connector_selector';
interface Props {
    connectors?: AIConnector[];
    defaultConnector?: AIConnector;
}
export declare const SystemPromptSettingsManagement: React.MemoExoticComponent<({ connectors, defaultConnector }: Props) => React.JSX.Element>;
export {};
