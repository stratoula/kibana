import React from 'react';
interface Props {
    children: React.ReactNode;
    title?: string;
    flyoutVisible: boolean;
    onClose: () => void;
    onSaveCancelled: () => void;
    onSaveConfirmed: () => void;
    saveButtonDisabled?: boolean;
    saveButtonLoading?: boolean;
}
export declare const Flyout: React.NamedExoticComponent<Props>;
export {};
