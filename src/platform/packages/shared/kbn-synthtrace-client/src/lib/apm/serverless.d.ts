import type { ApmFields } from './apm_fields';
import { BaseSpan } from './base_span';
export type FaasTriggerType = 'http' | 'pubsub' | 'datasource' | 'timer' | 'other';
export declare class Serverless extends BaseSpan {
    private readonly metric;
    constructor(fields: ApmFields);
    duration(duration: number): this;
    coldStart(coldstart: boolean): this;
    billedDuration(billedDuration: number): this;
    faasTimeout(faasTimeout: number): this;
    memory({ total, free }: {
        total: number;
        free: number;
    }): this;
    coldStartDuration(coldStartDuration: number): this;
    faasDuration(faasDuration: number): this;
    timestamp(time: number): this;
    serialize(): ApmFields[];
}
