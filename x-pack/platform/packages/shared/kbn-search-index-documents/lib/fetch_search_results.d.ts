import type { SearchHit } from '@elastic/elasticsearch/lib/api/types';
import type { ElasticsearchClient } from '@kbn/core-elasticsearch-server';
import type { Paginate } from '../types';
export declare const fetchSearchResults: (client: ElasticsearchClient, indexName: string, query?: string, from?: number, size?: number, trackTotalHits?: boolean) => Promise<Paginate<SearchHit>>;
