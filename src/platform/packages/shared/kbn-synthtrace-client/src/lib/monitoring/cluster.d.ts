import type { Fields } from '../entity';
import { Entity } from '../entity';
interface ClusterDocument extends Fields {
    cluster_name: string;
    cluster_uuid: string;
}
declare class Cluster extends Entity<ClusterDocument> {
    stats(): import("./cluster_stats").ClusterStats;
    kibana(name: string, index?: string): import("./kibana").Kibana;
}
export declare function cluster(name: string): Cluster;
export {};
