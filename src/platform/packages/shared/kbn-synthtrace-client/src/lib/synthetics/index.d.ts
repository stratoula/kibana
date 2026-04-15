import type { Fields } from '../entity';
import { Serializable } from '../serializable';
export type SyntheticsMonitorDocument = Fields & Partial<{
    'data_stream.namespace': string;
    'data_stream.type': string;
    'data_stream.dataset': string;
    'monitor.id': string;
    'monitor.origin': string;
    'monitor.name': string;
    'monitor.type': string;
    'monitor.check_group': string;
    'monitor.timespan.lt': string;
    'monitor.timespan.gte': string;
    'monitor.duration.us'?: number;
    'monitor.ip'?: string;
    'monitor.project.name'?: string;
    'monitor.project.id'?: string;
    'monitor.fleet_managed'?: boolean;
    'monitor.status'?: string;
    'synthetics.type'?: string;
    'synthetics.step.index'?: number;
    'observer.os.name'?: string;
    'observer.product'?: string;
}>;
type MonitorDataStream = 'http' | 'tcp' | 'icmp' | 'browser' | 'browser.screenshot' | 'browser.network';
declare class SyntheticsMonitor extends Serializable<SyntheticsMonitorDocument> {
    constructor(fields: SyntheticsMonitorDocument);
    namespace(value: string): this;
    dataset(value: MonitorDataStream): this;
    name(value: string): this;
    origin(value: string): this;
    ip(value: string): this;
    status(value: string): this;
    timestamp(time: number): this;
}
declare function create(): SyntheticsMonitor;
export declare const syntheticsMonitor: {
    create: typeof create;
};
export {};
