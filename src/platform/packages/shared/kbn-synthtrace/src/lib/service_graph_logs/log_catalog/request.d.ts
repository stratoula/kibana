import type { RuntimeMessagePool, Runtime } from '../types';
export declare const REQUEST: {
    success: Partial<Record<Runtime, string[]>>;
    internal_error: RuntimeMessagePool;
    bad_gateway: RuntimeMessagePool;
    gateway_timeout: RuntimeMessagePool;
    stack_traces: Partial<Record<Runtime, string[]>>;
};
