import type { Fields } from '../entity';
import { Entity } from '../entity';
import { Serializable } from '../serializable';
interface DockerContainerDocument extends Fields {
    'container.id': string;
    'metricset.name'?: string;
    'container.name'?: string;
    'container.image.name'?: string;
    'container.runtime'?: string;
    'host.name'?: string;
    'cloud.provider'?: string;
    'cloud.instance.id'?: string;
    'cloud.image.id'?: string;
    'event.dataset'?: string;
    'event.module'?: string;
}
export declare class DockerContainer extends Entity<DockerContainerDocument> {
    metrics(): DockerContainerMetrics;
}
export interface DockerContainerMetricsDocument extends DockerContainerDocument {
    'docker.cpu.total.pct': number;
    'docker.memory.usage.pct': number;
    'docker.network.inbound.bytes': number;
    'docker.network.outbound.bytes': number;
    'docker.diskio.read.ops': number;
    'docker.diskio.write.ops': number;
}
declare class DockerContainerMetrics extends Serializable<DockerContainerMetricsDocument> {
}
export declare function dockerContainer(id: string): DockerContainer;
export {};
