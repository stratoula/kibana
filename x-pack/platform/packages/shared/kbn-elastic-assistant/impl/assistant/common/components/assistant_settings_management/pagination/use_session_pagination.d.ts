import type { CriteriaWithPagination, EuiInMemoryTableProps, EuiTableSortingType } from '@elastic/eui';
export declare const getDefaultTableOptions: <T>({ pageSize, sortDirection, sortField, }: {
    sortField: keyof T;
    sortDirection?: "asc" | "desc";
    pageSize?: number;
}) => {
    page: {
        size: number;
        index: number;
    };
    sort: {
        field: keyof T;
        direction: "desc" | "asc";
    };
};
interface InMemoryPagination {
    initialPageSize: number;
    pageSizeOptions: number[];
    pageIndex: number;
}
export interface ServerSidePagination {
    totalItemCount: number;
    pageSize: number;
    pageSizeOptions: number[];
    pageIndex: number;
}
interface UseSessionPaginationReturn<T extends {}, B extends boolean> {
    onTableChange: (criteria: CriteriaWithPagination<T>) => void;
    pagination: B extends true ? InMemoryPagination : ServerSidePagination;
    sorting: B extends true ? EuiInMemoryTableProps<T>['sorting'] : EuiTableSortingType<T>;
}
export declare const useSessionPagination: <T extends {}, B extends boolean = true>({ defaultTableOptions, nameSpace, inMemory, storageKey, totalItemCount, }: {
    defaultTableOptions: CriteriaWithPagination<T>;
    inMemory?: B;
    nameSpace?: string;
    storageKey: string;
    totalItemCount?: number;
}) => UseSessionPaginationReturn<T, B>;
export {};
