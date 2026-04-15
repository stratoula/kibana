import React from 'react';
interface UserActionShowAlertProps {
    id: string;
    alertId: string;
    index: string;
    onShowAlertDetails?: (alertId: string, index: string) => void;
}
export declare const UserActionShowAlert: React.MemoExoticComponent<{
    ({ id, alertId, index, onShowAlertDetails, }: UserActionShowAlertProps): React.JSX.Element;
    displayName: string;
}>;
export {};
