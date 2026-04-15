export declare const INFRA_DEP_MAP: {
    readonly database: {
        readonly category: "database";
        readonly tech: readonly ["postgres", "mongodb", "elasticsearch"];
    };
    readonly message_queue: {
        readonly category: "message_queue";
        readonly tech: readonly ["kafka"];
    };
    readonly cache: {
        readonly category: "cache";
        readonly tech: readonly ["redis"];
    };
};
export type InfraCategory = 'database' | 'message_queue' | 'cache' | 'kubernetes' | 'host';
export type InfraDependency = (typeof INFRA_DEP_MAP)[keyof typeof INFRA_DEP_MAP]['tech'][number];
export type InfraDatabase = (typeof INFRA_DEP_MAP)['database']['tech'][number];
export type InfraMessageQueue = (typeof INFRA_DEP_MAP)['message_queue']['tech'][number];
export type InfraCache = (typeof INFRA_DEP_MAP)['cache']['tech'][number];
/** tech → infra category reverse lookup. */
export declare const DEP_TO_CATEGORY: Record<InfraDependency, InfraCategory>;
/** Condition keys per infra category: 'healthy' plus named failure conditions, each mapping to a `{ warn, error }` pool. */
export declare const INFRA_LOG_TYPES: {
    database: readonly ["healthy", "db_timeout"];
    message_queue: readonly ["healthy", "broker_down"];
    cache: readonly ["healthy", "eviction"];
    kubernetes: readonly ["healthy", "oom", "crash_loop_backoff"];
    host: readonly ["healthy", "resource_pressure"];
};
export declare const INFRA_FAIL_CONDITION: {
    readonly database: "db_timeout";
    readonly message_queue: "broker_down";
    readonly cache: "eviction";
    readonly kubernetes: "crash_loop_backoff";
    readonly host: "resource_pressure";
};
export type InfraLogType = {
    [C in keyof typeof INFRA_LOG_TYPES]: (typeof INFRA_LOG_TYPES)[C][number];
};
/** Seed offset for the log-level RNG, keeping level rolls independent of message-pick draws. */
export declare const LEVEL_RNG_SEED_OFFSET = 2882395572;
/** Seed offset to pick the kubelet error message independently from the warn message. */
export declare const KUBELET_ERROR_SEED_OFFSET = 1;
/** Log level probabilities used by all channels via `resolveLogLevel`. Warns outnumber errors (~3:1) in the failing state. */
export declare const HEALTH_PROBS: {
    readonly normal: {
        readonly error: 0;
        readonly warn: 0.05;
    };
    readonly failing: {
        readonly error: 0.15;
        readonly warn: 0.65;
    };
};
export declare const DOWNSTREAM_ATTEMPT_ON_ERROR_PROB = 0.3;
export declare const HTTP_200_PROB = 0.9;
export declare const ERROR_LATENCY_BASE_MS = 3000;
export declare const ERROR_LATENCY_JITTER_MS = 5000;
export declare const SUCCESS_LATENCY_BASE_MS = 5;
export declare const SUCCESS_LATENCY_JITTER_MS = 120;
export declare const PROTOCOLS: readonly ["http", "grpc", "kafka"];
export type Protocols = (typeof PROTOCOLS)[number];
export declare const ASYNC_PROTOCOLS: Set<"http" | "kafka" | "grpc">;
export declare const RUNTIMES: readonly ["go", "python", "java", "node"];
export type Runtime = (typeof RUNTIMES)[number];
export declare const OS_OPTIONS: readonly [{
    readonly type: "linux";
    readonly name: "Debian GNU/Linux";
    readonly version: "12 (bookworm)";
}];
