import type { ServiceGraph, ServiceNode } from '../types';
export type MetadataCache = Map<string, Record<string, string | undefined>>;
export type Metadata = Record<string, string | undefined>;
export declare const isK8sService: (metadata: Metadata) => boolean;
export declare const resolveOsType: (metadata: Metadata) => string;
export declare function generateDeploymentMetadata({ service, seed, }: {
    service: ServiceNode;
    seed: number;
}): Metadata;
export declare function buildMetadataCache(serviceGraph: ServiceGraph, seed?: number): MetadataCache;
/** Maps deployment metadata fields to log template placeholder keys. */
export declare function buildMessageOverrides(metadata: Metadata): Record<string, string>;
export declare function getOrBuildMetadata(service: ServiceNode, seed: number, cache?: MetadataCache): Record<string, string | undefined>;
