import type { SearchHit, SearchResponse } from '@elastic/elasticsearch/lib/api/types';
import type { Paginate } from '../types';
export declare const fetchWithPagination: <T>(fetchFunction: () => Promise<SearchResponse<T>>, from: number, size: number) => Promise<Paginate<SearchHit<T>>>;
