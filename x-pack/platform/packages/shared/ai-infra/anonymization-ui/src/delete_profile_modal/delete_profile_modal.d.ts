import React from 'react';
interface DeleteProfileModalProps {
    isDeleting: boolean;
    errorMessage?: string;
    onCancel: () => void;
    onConfirm: () => void;
}
export declare const DeleteProfileModal: ({ isDeleting, errorMessage, onCancel, onConfirm, }: DeleteProfileModalProps) => React.JSX.Element;
export {};
