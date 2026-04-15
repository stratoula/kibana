import { AbstractSpan } from '../abstract_span';
import type { ApmOtelFields } from './apm_otel_fields';
import type { OtelSpan } from './otel_span';
export declare class OtelBaseSpan extends AbstractSpan<ApmOtelFields, OtelBaseSpan> {
    constructor(fields: ApmOtelFields);
    parent(span: OtelBaseSpan): this;
    success(): this;
    failure(): this;
    outcome(outcome: 'success' | 'failure' | 'unknown'): this;
    isSpan(): this is OtelSpan;
    isTransaction(): this is OtelSpan;
    timestamp(timestamp: number): this;
}
