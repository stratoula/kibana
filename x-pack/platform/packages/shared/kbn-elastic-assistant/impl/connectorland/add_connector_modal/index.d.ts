import React from 'react';
import type { ActionType } from '@kbn/actions-plugin/common';
import type { ActionConnector, ActionTypeRegistryContract } from '@kbn/triggers-actions-ui-plugin/public';
interface Props {
    actionTypeRegistry: ActionTypeRegistryContract;
    actionTypes?: ActionType[];
    onClose: () => void;
    onSaveConnector: (connector: ActionConnector) => void;
    onSelectActionType: (actionType: ActionType) => void;
    selectedActionType: ActionType | null;
    actionTypeSelectorInline?: boolean;
    isMissingConnectorPrivileges?: boolean;
    missingPrivilegesTooltip?: string;
}
export declare const AddConnectorModal: React.FC<Props>;
export {};
