import React from 'react';
interface Props {
    isConnectorConfigured: boolean;
    isSettingsModalVisible: boolean;
    setIsSettingsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
/**
 * Error callout to be displayed when there is no connector configured for a conversation. Includes deep-link
 * to conversation settings to quickly resolve. Falls back to <ConnectorButton /> connector if privileges aren't met.
 *
 * TODO: Add 'quick fix' button to just pick a connector
 * TODO: Add setting for 'default connector' so we can auto-resolve and not even show this
 */
export declare const ConnectorMissingCallout: React.FC<Props>;
export {};
