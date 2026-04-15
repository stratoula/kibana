import type { Fields } from '../entity';
import { Entity } from '../entity';
import { Serializable } from '../serializable';
interface PodDocument extends Fields {
    'agent.id': string;
    'host.hostname': string;
    'host.name': string;
    'kubernetes.pod.uid': string;
    'kubernetes.node.name': string;
    'metricset.name'?: string;
    'event.module'?: string;
}
export declare class Pod extends Entity<PodDocument> {
    metrics(): PodMetrics;
    container(id: string): import("./k8s_container").K8sContainer;
}
export interface PodMetricsDocument extends PodDocument {
    'kubernetes.pod.cpu.usage.limit.pct': number;
}
declare class PodMetrics extends Serializable<PodMetricsDocument> {
}
export declare function pod(uid: string, nodeName: string): Pod;
export {};
