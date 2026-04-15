import type { ConversationTableItem } from './types';
export declare const useConversationSelection: () => {
    selectionState: {
        isDeleteAll: boolean;
        isExcludedMode: boolean;
        deletedConversations: ConversationTableItem[];
        totalSelectedConversations: number;
        excludedIds: string[];
    };
    selectionActions: {
        handleUnselectAll: () => void;
        handleSelectAll: (totalItemCount: number) => void;
        handlePageUnchecked: ({ conversationOptionsIds, totalItemCount, }: {
            conversationOptionsIds: string[];
            totalItemCount: number;
        }) => void;
        handlePageChecked: ({ conversationOptions, totalItemCount, }: {
            conversationOptions: ConversationTableItem[];
            totalItemCount: number;
        }) => void;
        handleRowUnChecked: ({ selectedItem, totalItemCount, }: {
            selectedItem: ConversationTableItem;
            totalItemCount: number;
        }) => void;
        handleRowChecked: ({ selectedItem, totalItemCount, }: {
            selectedItem: ConversationTableItem;
            totalItemCount: number;
        }) => void;
        setDeletedConversations: import("react").Dispatch<import("react").SetStateAction<ConversationTableItem[]>>;
        setExcludedIds: import("react").Dispatch<import("react").SetStateAction<string[]>>;
        setIsDeleteAll: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        setIsExcludedMode: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        setTotalSelectedConversations: import("react").Dispatch<import("react").SetStateAction<number>>;
    };
};
