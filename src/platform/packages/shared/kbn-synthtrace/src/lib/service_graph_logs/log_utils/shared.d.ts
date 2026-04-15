import type { LogDocument } from '@kbn/synthtrace-client';
import type { ServiceGraph, ServiceNode } from '../types';
import type { MetadataCache } from '../utils/metadata';
export interface ServicePhaseOptions {
    service: ServiceNode;
    seed: number;
    cachedMetadata?: Record<string, string | undefined>;
    timestamp: number;
}
export interface ServiceGraphOptions {
    seed: number;
    timestamp: number;
    serviceGraph: ServiceGraph;
    metadataCache?: MetadataCache;
}
/**
 * Resolves the log level for a single tick given the current failure state.
 * Used by all log channels (infra, service, noise) so the probability model
 * is defined once and shared everywhere.
 */
export declare const resolveLogLevel: (isFailing: boolean, rng: () => number) => "info" | "warn" | "error";
export declare const resolveLogLevelFromSeed: (isFailing: boolean, seed: number) => "info" | "error" | "warn";
export declare const buildLogDoc: ({ service, level, message, metadata, }: {
    service: ServiceNode;
    level: "info" | "warn" | "error";
    message: string;
    metadata: Record<string, string | undefined>;
}) => Partial<LogDocument>;
