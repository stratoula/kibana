import { ApmError } from './apm_error';
import { Entity } from '../entity';
import { Metricset } from './metricset';
import { Span } from './span';
import { Transaction } from './transaction';
import type { ApmApplicationMetricFields, ApmFields, APMStacktrace, SpanParams } from './apm_fields';
export declare class Instance extends Entity<ApmFields> {
    transaction(...options: [{
        transactionName: string;
        transactionType?: string;
    }] | [string] | [string, string]): Transaction;
    span(...options: [string, string] | [string, string, string] | [SpanParams]): Span;
    crash({ message, type }: {
        message: string;
        type?: string;
    }): ApmError;
    error({ message, type, culprit, groupingKey, stacktrace, withoutErrorId, }: {
        message: string;
        type?: string;
        culprit?: string;
        groupingKey?: string;
        stacktrace?: APMStacktrace[];
        withoutErrorId?: boolean;
    }): ApmError;
    containerId(containerId: string): this;
    hostName(hostName: string): this;
    podId(podId: string): this;
    appMetrics(metrics: ApmApplicationMetricFields): Metricset<ApmFields>;
}
