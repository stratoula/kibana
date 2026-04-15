import type { ServiceMessages, SuccessCorpus } from '../types';
export { NOISE } from './noise';
export type { ConditionPool, RuntimeMessagePool, ServiceMessages, SuccessCorpus } from '../types';
export type { OutboundErrorCategory } from './outbound';
export declare const TECH_KEYED_ERROR_TYPES: Set<keyof ServiceMessages>;
export declare const INFRA: {
    database: {
        elasticsearch: import("../types").InfraPool<"db_timeout">;
        postgres: import("../types").InfraPool<"db_timeout">;
        mongodb: import("../types").InfraPool<"db_timeout">;
    };
    cache: {
        redis: import("../types").InfraPool<"eviction">;
    };
    message_queue: {
        kafka: import("../types").InfraPool<"broker_down">;
    };
    kubernetes: {
        [x: string]: import("../types").InfraPool<"oom" | "crash_loop_backoff">;
    };
    host: Record<"linux", import("../types").InfraPool<"resource_pressure">>;
};
export declare const SERVICE_MESSAGES: ServiceMessages;
export declare const SERVICE: {
    request: {
        success: SuccessCorpus;
        messages: ServiceMessages;
    };
    stackTraces: Partial<Record<"go" | "java" | "python" | "node", string[]>>;
    serviceCalls: {
        outbound: Record<"http" | "kafka" | "grpc", import("./outbound").OutboundPool>;
    };
};
