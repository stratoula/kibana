import { Serializable } from '../serializable';
import type { Fields } from '../entity';
export declare class Metricset<TFields extends Fields> extends Serializable<TFields> {
    constructor(fields: TFields);
}
