import type { Fields } from '../entity';
import { Entity } from '../entity';
import { Serializable } from '../serializable';
interface K8sContainerDocument extends Fields {
    'container.id': string;
    'kubernetes.pod.uid': string;
    'kubernetes.node.name': string;
    'metricset.name'?: string;
    'container.name'?: string;
    'container.image.name'?: string;
    'container.runtime'?: string;
    'host.name': string;
    'host.hostname': string;
    'cloud.provider'?: string;
    'cloud.instance.id'?: string;
    'cloud.image.id'?: string;
    'event.dataset'?: string;
    'event.module'?: string;
    'agent.id': string;
}
export declare class K8sContainer extends Entity<K8sContainerDocument> {
    metrics(): K8sContainerMetrics;
}
export interface K8sContainerMetricsDocument extends K8sContainerDocument {
    'kubernetes.container.cpu.usage.limit.pct': number;
    'kubernetes.container.memory.usage.limit.pct': number;
    'kubernetes.pod.cpu.usage.limit.pct': number;
}
declare class K8sContainerMetrics extends Serializable<K8sContainerMetricsDocument> {
}
export declare function k8sContainer(id: string, uid: string, nodeName: string): K8sContainer;
export {};
