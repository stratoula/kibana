import React from 'react';
export interface Props {
    onConversationsBulkDeleted: () => void;
    handleSelectAll: (totalItemCount: number) => void;
    handleUnselectAll: () => void;
    totalConversations: number;
    totalSelected: number;
    isDeleteAll: boolean;
}
export declare const Toolbar: React.NamedExoticComponent<Props>;
