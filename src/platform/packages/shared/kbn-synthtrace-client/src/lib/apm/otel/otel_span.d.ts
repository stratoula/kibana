import type { ApmOtelError } from './apm_otel_error';
import type { ApmOtelFields } from './apm_otel_fields';
import { OtelBaseSpan } from './otel_base_span';
export declare class OtelSpan extends OtelBaseSpan {
    private readonly _errors;
    private _sampled;
    constructor(fields: ApmOtelFields);
    duration(duration: number): this;
    parent(span: OtelBaseSpan): this;
    errors(...errors: ApmOtelError[]): this;
    destination(resource: string): this;
    serialize(): ApmOtelFields[];
}
