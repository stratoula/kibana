import type { Fields } from './entity';
import { Entity } from './entity';
export declare class Serializable<TFields extends Fields> extends Entity<TFields> {
    constructor(fields: TFields);
    timestamp(time: number): this;
    serialize(): TFields[];
}
