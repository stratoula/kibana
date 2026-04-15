import type { Span } from './span';
import type { Transaction } from './transaction';
import type { ApmFields } from './apm_fields';
import { AbstractSpan } from './abstract_span';
export declare class BaseSpan extends AbstractSpan<ApmFields, BaseSpan> {
    constructor(fields: ApmFields);
    parent(span: BaseSpan): this;
    success(): this;
    failure(): this;
    outcome(outcome: 'success' | 'failure' | 'unknown'): this;
    crash(): this;
    isSpan(): this is Span;
    isTransaction(): this is Transaction;
    labels(labels: Record<string, string>): this;
    timestamp(timestamp: number): this;
}
