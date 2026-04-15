export interface UseSmlSearchOptions {
    /** When true, the server omits indexed `content` on each hit (smaller payload; e.g. command-menu autocomplete). */
    readonly skipContent?: boolean;
}
export declare const useSmlSearch: (query: string, options?: UseSmlSearchOptions) => {
    results: import("../../../../common/http_api/sml").SmlSearchHttpResultItem[];
    total: number;
    isLoading: boolean;
    isError: boolean;
    error: unknown;
};
