import React from 'react';
import type { ConversationTableItem, HandlePageChecked, HandlePageUnchecked, HandleRowChecked, HandleRowUnChecked } from './types';
export declare const PageSelectionCheckbox: ({ conversationOptions, deletedConversationsIds, excludedIds, handlePageChecked, handlePageUnchecked, isExcludedMode, totalItemCount, }: {
    conversationOptions: ConversationTableItem[];
    deletedConversationsIds: string[];
    excludedIds: string[];
    handlePageChecked: HandlePageChecked;
    handlePageUnchecked: HandlePageUnchecked;
    isExcludedMode: boolean;
    totalItemCount: number;
}) => React.JSX.Element | null;
export declare const InputCheckbox: ({ conversation, deletedConversationsIds, excludedIds, isExcludedMode, handleRowChecked, handleRowUnChecked, totalItemCount, }: {
    conversation: ConversationTableItem;
    deletedConversationsIds: string[];
    excludedIds: string[];
    isExcludedMode: boolean;
    handleRowChecked: HandleRowChecked;
    handleRowUnChecked: HandleRowUnChecked;
    totalItemCount: number;
}) => React.JSX.Element;
