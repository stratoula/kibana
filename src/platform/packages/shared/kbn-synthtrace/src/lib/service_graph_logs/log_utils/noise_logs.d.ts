import type { LogDocument } from '@kbn/synthtrace-client';
import type { InfraDependency } from '../types';
import { type ServiceGraphOptions, type ServicePhaseOptions } from './shared';
export interface NoiseDocsOptions extends ServiceGraphOptions {
    count: number;
    /** When true, service noise docs reflect a degraded state (warn instead of info; error is capped to warn). */
    degraded?: boolean;
    ghostMentions?: Array<{
        message: string;
        serviceName?: string;
        rate?: number;
    }>;
}
export interface NoiseLogOptions extends ServicePhaseOptions {
    rng: () => number;
    /** When true, this doc may be emitted at degraded health state. */
    degraded?: boolean;
}
export interface InfraNoiseLogOptions extends ServicePhaseOptions {
    dep: InfraDependency;
    /** When true, this dep is in a degraded state and may emit warn or error level logs. */
    degraded?: boolean;
}
export declare function generateNoiseLog({ service, rng, seed, degraded, cachedMetadata, }: NoiseLogOptions): Partial<LogDocument>;
export declare function generateInfraNoiseLog({ dep, seed, degraded, timestamp, service, cachedMetadata, }: InfraNoiseLogOptions): Partial<LogDocument> | null;
export declare function generateNoiseDocs({ serviceGraph, count, seed, degraded, timestamp, metadataCache, ghostMentions, }: NoiseDocsOptions): Array<Partial<LogDocument>>;
