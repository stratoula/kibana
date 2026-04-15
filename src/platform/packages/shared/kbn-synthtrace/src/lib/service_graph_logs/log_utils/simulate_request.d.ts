import type { LogDocument } from '@kbn/synthtrace-client';
import type { ServiceFailure, ServiceGraph } from '../types';
import { type MetadataCache } from '../utils/metadata';
export declare function simulateRequest({ serviceGraph, entryService, rng, resolvedFailures, stableSeed, tickSeed, metadataCache, }: {
    serviceGraph: ServiceGraph;
    entryService: string;
    rng: () => number;
    resolvedFailures: Record<string, ServiceFailure> | undefined;
    stableSeed: number;
    tickSeed: number;
    metadataCache?: MetadataCache;
}): Array<Partial<LogDocument>>;
