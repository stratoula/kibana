import type { ErrorType, InfraCategory, InfraDependency, NoiseHealthState, Protocols, Runtime, ServiceErrorType } from '../types';
import type { INFRA_LOG_TYPES } from '../constants';
export declare function getStackTrace({ runtime, seed, serviceName, }: {
    runtime: Runtime;
    seed: number;
    serviceName?: string;
}): string;
export declare function pickHealthyMessage({ seed, tickSeed, runtime, serviceName, overrides, infraDeps, overridePool, }: {
    seed: number;
    tickSeed?: number;
    runtime?: Runtime;
    serviceName?: string;
    overrides?: Record<string, string>;
    infraDeps?: readonly InfraDependency[];
    overridePool?: string[];
}): string;
export declare function pickErrorMessage({ errorType, seed, tickSeed, runtime, serviceName, overrides, sourceDep, overridePool, }: {
    errorType: ServiceErrorType;
    seed: number;
    tickSeed?: number;
    runtime?: Runtime;
    serviceName?: string;
    overrides?: Record<string, string>;
    sourceDep?: InfraDependency;
    overridePool?: string[];
}): string;
export declare function pickWarnMessage({ errorType, seed, tickSeed, runtime, serviceName, overrides, sourceDep, }: {
    errorType: ErrorType;
    seed: number;
    tickSeed?: number;
    runtime?: Runtime;
    serviceName?: string;
    overrides?: Record<string, string>;
    sourceDep?: InfraDependency;
}): string;
export declare function pickNoiseMessage({ seed, runtime, serviceName, overrides, infraDep, healthState, }: {
    seed: number;
    runtime?: Runtime;
    serviceName?: string;
    overrides?: Record<string, string>;
    infraDep?: InfraDependency;
    healthState?: NoiseHealthState;
}): string;
export declare function pickOutboundMessage({ seed, tickSeed, runtime, serviceName, targetService, protocol, httpStatus, latencyMs, }: {
    seed: number;
    tickSeed?: number;
    runtime: Runtime;
    serviceName: string;
    targetService: string;
    protocol: Protocols;
    httpStatus: number;
    latencyMs: number;
}): {
    message: string;
    level: 'info' | 'error';
};
export declare function pickInfraMessage({ category, condition, level: rawLevel, seed, tech, overrides, timestamp, serviceName, }: {
    category: InfraCategory;
    condition: (typeof INFRA_LOG_TYPES)[InfraCategory][number];
    level?: 'info' | 'warn' | 'error';
    seed: number;
    tech?: string;
    overrides?: Record<string, string>;
    timestamp: number;
    serviceName?: string;
}): string;
