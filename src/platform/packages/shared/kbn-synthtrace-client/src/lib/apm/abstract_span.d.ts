import type { Fields } from '../entity';
import { Serializable } from '../serializable';
export declare abstract class AbstractSpan<TFields extends Fields, TChild extends AbstractSpan<TFields, TChild>> extends Serializable<TFields> {
    protected _children: TChild[];
    constructor(fields: TFields);
    getChildren(): TChild[];
    children(...children: TChild[]): this;
    serialize(): TFields[];
    abstract parent(span: TChild): this;
    abstract success(): this;
    abstract failure(): this;
    abstract outcome(outcome: 'success' | 'failure' | 'unknown'): this;
    abstract isSpan(): boolean;
    abstract isTransaction(): boolean;
}
