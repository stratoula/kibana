import type { Fields } from '../entity';
import { Serializable } from '../serializable';
export interface KibanaStatsDocument extends Fields {
    type: 'kibana_stats';
    cluster_uuid: string;
    'kibana_stats.kibana.name': string;
    'kibana_stats.kibana.uuid': string;
    'kibana_stats.kibana.index': string;
    'kibana_stats.timestamp'?: string;
    'kibana_stats.response_times.max'?: number;
    'kibana_stats.kibana.status'?: string;
    'kibana_stats.requests.disconnects'?: number;
    'kibana_stats.requests.total'?: number;
}
export declare class KibanaStats extends Serializable<KibanaStatsDocument> {
    timestamp(timestamp: number): this;
    status(status: string): void;
    responseTimes(max: number): void;
    requests(disconnects: number, total: number): this;
}
export declare function kibanaStats(name: string, uuid: string, clusterUuid: string, index: string): KibanaStats;
