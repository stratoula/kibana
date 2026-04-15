import React from 'react';
export interface ConnectorButtonProps {
    setIsConnectorModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}
/**
 * Simple button component for adding a connector. Note: component is basic and does not handle connector
 * add logic. See ConnectorSetup component if wanting to manage connector add logic.
 */
export declare const ConnectorButton: React.FC<ConnectorButtonProps>;
