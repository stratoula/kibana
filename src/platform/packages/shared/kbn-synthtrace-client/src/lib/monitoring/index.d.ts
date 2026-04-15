import { cluster } from './cluster';
import type { ClusterStatsDocument } from './cluster_stats';
import { kibana } from './kibana';
import type { KibanaStatsDocument } from './kibana_stats';
export type MonitoringDocument = ClusterStatsDocument | KibanaStatsDocument;
export declare const monitoring: {
    cluster: typeof cluster;
    kibana: typeof kibana;
};
