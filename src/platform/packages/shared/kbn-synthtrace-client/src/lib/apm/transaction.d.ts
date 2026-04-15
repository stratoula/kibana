import type { ApmError } from './apm_error';
import type { Event } from './event';
import { BaseSpan } from './base_span';
import type { ApmFields } from './apm_fields';
export declare class Transaction extends BaseSpan {
    private _sampled;
    private readonly _errors;
    private readonly _events;
    constructor(fields: ApmFields);
    parent(span: BaseSpan): this;
    events(...events: Event[]): this;
    errors(...errors: ApmError[]): this;
    duration(duration: number): this;
    sample(sampled?: boolean): this;
    serialize(): ApmFields[];
}
