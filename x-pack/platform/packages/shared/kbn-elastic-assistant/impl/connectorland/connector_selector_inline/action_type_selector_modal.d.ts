import React from 'react';
import type { ActionType } from '@kbn/actions-plugin/common';
import type { ActionTypeRegistryContract } from '@kbn/triggers-actions-ui-plugin/public';
interface ActionTypeSelectorModalProps {
    actionTypes?: ActionType[];
    actionTypeRegistry: ActionTypeRegistryContract;
    onClose: () => void;
    onSelect: (actionType: ActionType) => void;
    actionTypeSelectorInline: boolean;
    isMissingConnectorPrivileges?: boolean;
    missingPrivilegesTooltip?: string;
}
export declare const ActionTypeSelectorModal: React.FC<ActionTypeSelectorModalProps>;
export {};
