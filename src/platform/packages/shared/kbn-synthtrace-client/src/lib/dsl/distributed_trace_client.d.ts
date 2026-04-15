import type { HttpMethod } from '../apm/span';
import type { BaseSpan } from '../apm/base_span';
import type { Instance } from '../apm/instance';
import type { Transaction } from '../apm/transaction';
export declare class DistributedTrace {
    timestamp: number;
    serviceInstance: Instance;
    spanEndTimes: number[];
    childSpans: BaseSpan[];
    transaction: Transaction;
    constructor({ serviceInstance, transactionName, timestamp, children, }: {
        serviceInstance: Instance;
        transactionName: string;
        timestamp: number;
        children?: (dt: DistributedTrace) => void;
    });
    getTransaction(): Transaction;
    service({ serviceInstance, transactionName, latency, repeat, timestamp, duration, children, }: {
        serviceInstance: Instance;
        transactionName: string;
        repeat?: number;
        timestamp?: number;
        latency?: number;
        duration?: number;
        children?: (dt: DistributedTrace) => unknown;
    }): void;
    external({ name, url, method, statusCode, duration, timestamp, }: {
        name: string;
        url: string;
        method?: HttpMethod;
        statusCode?: number;
        duration: number;
        timestamp?: number;
    }): void;
    db({ name, duration, type, statement, timestamp, }: {
        name: string;
        duration: number;
        type: 'elasticsearch' | 'sqlite' | 'redis';
        statement?: string;
        timestamp?: number;
    }): void;
}
