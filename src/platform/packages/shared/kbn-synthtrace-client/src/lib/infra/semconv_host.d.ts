import type { Fields } from '../entity';
import { Entity } from '../entity';
import { Serializable } from '../serializable';
interface SemconvHostDocument extends Fields {
    'agent.id': string;
    'host.hostname': string;
    'host.name': string;
    'host.os.name'?: string;
    'host.ip'?: string;
    'cloud.provider'?: string;
    'cloud.region'?: string;
    'resource.attributes.host.name'?: string;
    'resource.attributes.os.type'?: string;
    'data_stream.dataset'?: string;
    'data_stream.type'?: string;
    'data_stream.namespace'?: string;
}
export interface SemconvHostMetricsDocument extends SemconvHostDocument {
    'metricset.name'?: string;
    state?: string;
    direction?: string;
    'system.cpu.utilization'?: number;
    'system.cpu.logical.count'?: number;
    'system.cpu.load_average.1m'?: number;
    'system.memory.utilization'?: number;
    'system.memory.usage'?: number;
    'metrics.system.filesystem.usage'?: number;
    'system.network.io'?: number;
    'device.keyword'?: string;
}
declare class SemconvHostMetrics extends Serializable<SemconvHostMetricsDocument> {
}
export declare class SemconvHost extends Entity<SemconvHostDocument> {
    cpu(): SemconvHostMetrics[];
    memory(): SemconvHostMetrics[];
    filesystem(): SemconvHostMetrics[];
    network(): SemconvHostMetrics[];
}
export declare function semconvHost(name: string): SemconvHost;
export {};
