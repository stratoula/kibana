import type { ApmFields } from './apm_fields';
import { Serializable } from '../serializable';
export declare class ApmError extends Serializable<ApmFields> {
    constructor(fields: ApmFields, options?: {
        withoutErrorId?: boolean;
    });
    serialize(): ApmFields[];
    timestamp(value: number): this;
}
