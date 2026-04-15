interface FetchPageResponse<T> {
    data: T[];
    total: number;
}
interface FetchAllPagesWithConcurrencyParams<T> {
    perPage: number;
    maxConcurrency: number;
    fetchPage: (page: number, perPage: number) => Promise<FetchPageResponse<T>>;
}
export declare const fetchAllPagesWithConcurrency: <T>({ perPage, maxConcurrency, fetchPage, }: FetchAllPagesWithConcurrencyParams<T>) => Promise<T[]>;
export {};
