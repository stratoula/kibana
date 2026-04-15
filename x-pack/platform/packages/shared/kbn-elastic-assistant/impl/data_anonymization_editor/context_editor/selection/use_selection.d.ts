import type { FindAnonymizationFieldsClientResponse } from './types';
export type UseSelectionReturn = ReturnType<typeof useSelection>;
export declare const useSelection: ({ anonymizationAllFields, anonymizationPageFields, }: {
    anonymizationAllFields: FindAnonymizationFieldsClientResponse;
    anonymizationPageFields: FindAnonymizationFieldsClientResponse;
}) => {
    selectionState: {
        isSelectAll: boolean;
        selectedFields: string[];
        totalSelectedItems: number;
    };
    selectionActions: {
        handleUnselectAll: () => void;
        handleSelectAll: () => void;
        handlePageUnchecked: () => void;
        handlePageChecked: () => void;
        handleRowUnChecked: (selectedField: string) => void;
        handleRowChecked: (selectedField: string) => void;
        setSelectedFields: import("react").Dispatch<import("react").SetStateAction<string[]>>;
        setIsSelectAll: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        setTotalSelectedItems: import("react").Dispatch<import("react").SetStateAction<number>>;
    };
};
