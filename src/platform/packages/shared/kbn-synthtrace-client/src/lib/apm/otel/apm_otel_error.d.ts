import { Serializable } from '../../serializable';
import type { ApmOtelFields } from './apm_otel_fields';
export declare class ApmOtelError extends Serializable<ApmOtelFields> {
    constructor(fields: ApmOtelFields);
    serialize(): ApmOtelFields[];
    timestamp(value: number): this;
}
