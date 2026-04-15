import type { ApmFields } from './apm_fields';
import { Serializable } from '../serializable';
export declare class Event extends Serializable<ApmFields> {
    constructor(fields: ApmFields);
    lifecycle(state: string): this;
    timestamp(timestamp: number): this;
}
