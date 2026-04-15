import type { Fields } from '../entity';
import { Entity } from '../entity';
interface KibanaDocument extends Fields {
    cluster_uuid: string;
    'kibana_stats.kibana.name': string;
    'kibana_stats.kibana.uuid': string;
    'kibana_stats.kibana.index': string;
}
export declare class Kibana extends Entity<KibanaDocument> {
    stats(): import("./kibana_stats").KibanaStats;
}
export declare function kibana(name: string, uuid: string, clusterUuid: string, index?: string): Kibana;
export {};
