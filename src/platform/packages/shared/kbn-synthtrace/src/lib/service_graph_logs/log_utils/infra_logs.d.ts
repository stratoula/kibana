import type { LogDocument } from '@kbn/synthtrace-client';
import type { ErrorType, InfraDependency, ServiceNode } from '../types';
import { type MetadataCache } from '../utils/metadata';
import { type ServicePhaseOptions } from './shared';
interface InfraFailState {
    /** When true, this dep is actively failing this tick. */
    isFailing?: boolean;
    /** When set, emit error-tier condition unconditionally. */
    failingErrorType?: ErrorType;
}
export interface InfraDocOptions extends InfraFailState {
    service: ServiceNode;
    dep: InfraDependency;
    /** Caller must pass a resolved seed — use resolveEffectiveSeed before calling. */
    seed: number;
    timestamp: number;
    metadataCache?: MetadataCache;
}
export interface InfraLogOptions extends ServicePhaseOptions, InfraFailState {
    infraDep: InfraDependency;
    rng: () => number;
}
export interface HostSystemLogOptions extends ServicePhaseOptions {
    /**
     * K8s-specific error type to emit for pod events when service is failing.
     * Only k8s_oom and k8s_crash_loop_backoff produce host-level pod events.
     */
    errorType?: 'k8s_oom' | 'k8s_crash_loop_backoff';
}
export declare function generateInfraLog({ service, infraDep, rng, seed, isFailing, cachedMetadata, timestamp, failingErrorType, }: InfraLogOptions): Array<Partial<LogDocument>>;
export declare function generateInfraDoc({ service, dep, seed, isFailing, timestamp, metadataCache, failingErrorType, }: InfraDocOptions): Array<Partial<LogDocument>>;
export declare function generateHostSystemLog({ service, seed, cachedMetadata, timestamp, errorType, }: HostSystemLogOptions): Array<Partial<LogDocument>>;
export {};
