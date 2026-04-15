import React from 'react';
interface DeleteConversationModalProps {
    isOpen: boolean;
    onClose: () => void;
    conversation?: {
        id: string;
        title: string;
    };
}
export declare const DeleteConversationModal: React.FC<DeleteConversationModalProps>;
export {};
