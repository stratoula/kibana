import type { LogDocument } from '@kbn/synthtrace-client';
import type { ChannelVolume, ErrorType, FailureMap, FailuresOrFn, InfraDependency, NoiseConfig, ServiceGraph, ServiceNode } from '../types';
import { toLogEntries } from './converter';
import type { MetadataCache } from './metadata';
export interface GeneratorContext {
    serviceGraph: ServiceGraph;
    entryService: string;
    failures: FailuresOrFn | undefined;
    volume: ChannelVolume<string> | undefined;
    noise: NoiseConfig | undefined;
    seed: number | undefined;
    metadataCache: MetadataCache | undefined;
    allDeps: Array<{
        svc: ServiceNode;
        dep: InfraDependency;
    }>;
    tickSpreadMs: number;
    cycleMs?: number;
    cycleOriginMs?: number;
}
export interface TickState {
    currentFailures: FailureMap | undefined;
    failingDeps: Set<string>;
    failingServiceErrors: Map<string, ErrorType>;
}
export declare const cycleTimestamp: (ts: number, cycleMs: number, originMs: number) => number;
export declare function resolveTickState({ ctx, timestamp, }: {
    ctx: GeneratorContext;
    timestamp: number;
}): TickState;
export declare function collectServiceDocs({ ctx, tickState, index, timestamp, }: {
    ctx: GeneratorContext;
    tickState: TickState;
    index: number;
    timestamp: number;
}): Array<Partial<LogDocument>>;
export declare function collectVolumeSkewDocs({ ctx, index, timestamp, }: {
    ctx: GeneratorContext;
    index: number;
    timestamp: number;
}): Array<Partial<LogDocument>>;
export declare function collectInfraDocs({ ctx, tickState, index, timestamp, }: {
    ctx: GeneratorContext;
    tickState: TickState;
    index: number;
    timestamp: number;
}): Array<Partial<LogDocument>>;
export declare function collectNoiseDocs({ ctx, tickState, index, timestamp, }: {
    ctx: GeneratorContext;
    tickState: TickState;
    index: number;
    timestamp: number;
}): Array<Partial<LogDocument>>;
export declare function spreadDocs({ docs, timestamp, tickSpreadMs, seed, }: {
    docs: Array<Partial<LogDocument>>;
    timestamp: number;
    tickSpreadMs: number;
    seed?: number;
}): ReturnType<typeof toLogEntries>;
