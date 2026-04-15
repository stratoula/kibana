import type { Fields } from '../entity';
import { Entity } from '../entity';
import { Serializable } from '../serializable';
interface HostDocument extends Fields {
    'agent.id': string;
    'host.hostname': string;
    'host.name': string;
    'metricset.name'?: string;
    'event.module'?: string;
    'data_stream.dataset'?: string;
    'event.dataset'?: string;
    'service.name'?: string;
    'host.ip'?: string;
    'host.os.name'?: string;
    'host.os.version'?: string;
    'host.os.platform'?: string;
    'cloud.provider'?: string;
}
export declare class Host extends Entity<HostDocument> {
    cpu(fields?: {
        'system.cpu.total.norm.pct'?: number;
        'system.cpu.user.pct'?: number;
        'system.cpu.system.pct'?: number;
        'system.cpu.cores'?: number;
        'process.cpu.pct'?: number;
        'system.cpu.nice.pct'?: number;
    }): HostMetrics;
    memory(fields?: {
        'system.memory.actual.free'?: number;
        'system.memory.actual.used.bytes'?: number;
        'system.memory.actual.used.pct'?: number;
        'system.memory.total'?: number;
        'system.memory.used.bytes'?: number;
        'system.memory.used.pct'?: number;
        'process.memory.pct'?: number;
    }): HostMetrics;
    network(fields?: {
        'host.network.ingress.bytes'?: number;
        'host.network.egress.bytes'?: number;
        'metricset.period'?: number;
    }): HostMetrics;
    load(): HostMetrics;
    core(): HostMetrics;
    filesystem(fields?: {
        'system.filesystem.used.pct'?: number;
    }): HostMetrics;
    diskio(fields?: {
        'system.diskio.read.count'?: number;
        'system.diskio.write.count'?: number;
        'system.diskio.read.bytes'?: number;
        'system.diskio.write.bytes'?: number;
    }): HostMetrics;
    pod(uid: string): import("./pod").Pod;
    node(podUid: string): import("./k8s_node").K8sNode;
}
export interface HostMetricsDocument extends HostDocument {
    'agent.id': string;
    'metricset.period'?: number;
    'metricset.name'?: string;
    'system.cpu.total.norm.pct'?: number;
    'system.cpu.user.pct'?: number;
    'system.cpu.system.pct'?: number;
    'system.cpu.cores'?: number;
    'system.diskio.read.count'?: number;
    'system.diskio.write.count'?: number;
    'system.diskio.read.bytes'?: number;
    'system.diskio.write.bytes'?: number;
    'system.filesystem.used.pct'?: number;
    'system.memory.actual.used.pct'?: number;
    'system.memory.total'?: number;
    'system.memory.actual.used.bytes'?: number;
    'system.memory.actual.free'?: number;
    'system.memory.used.bytes'?: number;
    'system.memory.used.pct'?: number;
    'system.load'?: {
        1: number;
        cores: number;
    };
    'host.network.ingress.bytes'?: number;
    'host.network.egress.bytes'?: number;
    'process.cpu.pct'?: number;
    'process.memory.pct'?: number;
    'system.core.total.pct'?: number;
    'system.core.user.pct'?: number;
    'system.core.nice.pct'?: number;
    'system.core.idle.pct'?: number;
    'system.core.iowait.pct'?: number;
    'system.core.irq.pct'?: number;
    'system.core.softirq.pct'?: number;
    'system.core.steal.pct'?: number;
    'system.cpu.nice.pct'?: number;
}
declare class HostMetrics extends Serializable<HostMetricsDocument> {
}
export declare function host(name: string): Host;
export declare function minimalHost(name: string): Host;
export {};
