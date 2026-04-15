import type { HttpSetup } from '@kbn/core/public';
export interface DataViewByIdResponse {
    data_view?: {
        title?: string;
    };
}
export interface DataViewsListResponse {
    data_view?: Array<{
        id: string;
        title: string;
        name?: string;
    }>;
}
export interface FieldsForWildcardResponse {
    fields?: Array<{
        name: string;
        metadata_field?: boolean;
    }>;
}
export interface ResolveIndexResponse {
    data_streams?: Array<{
        name: string;
    }>;
    aliases?: Array<{
        name: string;
    }>;
    indices?: Array<{
        name: string;
    }>;
}
export type ExpandWildcardsMode = 'open' | 'all';
interface ResolveIndexOptions {
    expandWildcards?: ExpandWildcardsMode;
}
export interface TargetLookupClient {
    getDataViews: () => Promise<DataViewsListResponse>;
    getDataViewById: (dataViewId: string) => Promise<DataViewByIdResponse>;
    resolveIndex: (query: string, options?: ResolveIndexOptions) => Promise<ResolveIndexResponse>;
    getFieldsForWildcard: (pattern: string) => Promise<FieldsForWildcardResponse>;
}
interface TargetLookupHttpService {
    fetch: HttpSetup['fetch'];
}
export declare const createTargetLookupClient: ({ fetch, }: TargetLookupHttpService) => TargetLookupClient;
export {};
