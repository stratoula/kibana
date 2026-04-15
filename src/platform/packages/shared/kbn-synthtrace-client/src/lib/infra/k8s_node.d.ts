import type { Fields } from '../entity';
import { Entity } from '../entity';
import { Serializable } from '../serializable';
interface K8sNodeDocument extends Fields {
    'kubernetes.node.name': string;
    'kubernetes.pod.uid'?: string;
    'agent.id': string;
    'host.hostname': string;
    'host.name': string;
    'metricset.name'?: string;
    'event.dataset'?: string;
    'event.module'?: string;
}
export declare class K8sNode extends Entity<K8sNodeDocument> {
    metrics(): K8sNodeMetrics;
}
export interface K8sNodeMetricsDocument extends K8sNodeDocument {
    'kubernetes.node.cpu.allocatable.cores': number;
    'kubernetes.node.cpu.usage.nanocores': number;
    'kubernetes.node.memory.allocatable.bytes': number;
    'kubernetes.node.memory.usage.bytes': number;
    'kubernetes.node.fs.capacity.bytes': number;
    'kubernetes.node.fs.used.bytes': number;
    'kubernetes.node.pod.allocatable.total': number;
}
declare class K8sNodeMetrics extends Serializable<K8sNodeMetricsDocument> {
}
export declare function k8sNode(name: string, podUid: string): K8sNode;
export {};
