export declare function pageToPagination(page: {
    from: number;
    size: number;
    total: number;
}): {
    pageIndex: number;
    pageSize: number;
    totalItemCount: number;
};
interface Page {
    from: number;
    has_more_hits_than_total?: boolean;
    size: number;
    total: number;
}
interface Meta {
    page: Page;
}
export interface Paginate<T> {
    _meta: Meta;
    data: T[];
}
export {};
