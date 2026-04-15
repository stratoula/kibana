import type { EuiSearchBarOnChangeArgs, EuiSearchBarProps } from '@elastic/eui';
import type { ContextEditorRow } from '../../../data_anonymization_editor/context_editor/types';
export declare const SEARCH: EuiSearchBarProps;
export declare const useTable: (nameSpace: string) => {
    anonymizationFieldsStatus: {
        anonymized?: {
            doc_count: number;
        } | undefined;
        allowed?: {
            doc_count: number;
        } | undefined;
        denied?: {
            doc_count: number;
        } | undefined;
    } | undefined;
    anonymizationAllFields: {
        data: {
            id: string;
            field: string;
            timestamp?: string | undefined;
            allowed?: boolean | undefined;
            anonymized?: boolean | undefined;
            updatedAt?: string | undefined;
            updatedBy?: string | undefined;
            createdAt?: string | undefined;
            createdBy?: string | undefined;
            namespace?: string | undefined;
        }[];
        page: number;
        perPage: number;
        total: number;
    };
    anonymizationFields: {
        data: {
            id: string;
            field: string;
            timestamp?: string | undefined;
            allowed?: boolean | undefined;
            anonymized?: boolean | undefined;
            updatedAt?: string | undefined;
            updatedBy?: string | undefined;
            createdAt?: string | undefined;
            createdBy?: string | undefined;
            namespace?: string | undefined;
        }[];
        page: number;
        perPage: number;
        total: number;
    };
    onTableChange: (criteria: import("@elastic/eui").CriteriaWithPagination<ContextEditorRow>) => void;
    pagination: import("../../../assistant/common/components/assistant_settings_management/pagination/use_session_pagination").ServerSidePagination;
    sorting: import("@elastic/eui").EuiTableSortingType<ContextEditorRow>;
    searchQuery: string;
    handleSearch: (query: EuiSearchBarOnChangeArgs) => void;
    refetch: () => void;
};
