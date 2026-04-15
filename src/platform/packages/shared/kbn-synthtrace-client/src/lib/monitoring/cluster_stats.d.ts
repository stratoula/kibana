import type { Fields } from '../entity';
import { Serializable } from '../serializable';
export interface ClusterStatsDocument extends Fields {
    cluster_name: string;
    cluster_uuid: string;
    type: 'cluster_stats';
    'license.status'?: string;
    'cluster_stats.timestamp'?: string;
    'cluster_stats.indices.count'?: number;
}
export declare class ClusterStats extends Serializable<ClusterStatsDocument> {
    constructor(fields: ClusterStatsDocument);
    timestamp(timestamp: number): this;
    indices(count: number): this;
}
export declare function clusterStats(name: string, uuid: string): ClusterStats;
