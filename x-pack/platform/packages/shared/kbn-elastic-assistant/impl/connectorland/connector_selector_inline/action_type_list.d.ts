import React from 'react';
import type { ActionType } from '@kbn/actions-plugin/common';
import type { ActionTypeRegistryContract } from '@kbn/triggers-actions-ui-plugin/public';
export interface ActionTypeListProps {
    actionTypes: ActionType[];
    actionTypeRegistry: ActionTypeRegistryContract;
    onSelect: (actionType: ActionType) => void;
    isMissingConnectorPrivileges?: boolean;
    missingPrivilegesTooltip?: string;
}
export declare const ActionTypeList: React.FC<ActionTypeListProps>;
