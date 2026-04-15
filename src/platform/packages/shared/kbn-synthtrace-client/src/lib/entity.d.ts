export type ObjectEntry<T> = [keyof T, T[keyof T]];
export type Fields<TMeta extends Record<string, unknown> | undefined = undefined> = {
    '@timestamp'?: number;
} & (TMeta extends undefined ? {} : Partial<{
    meta: TMeta;
}>);
export declare class Entity<TFields extends Fields> {
    readonly fields: TFields;
    constructor(fields: TFields);
    defaults(defaults: TFields): this;
    overrides(overrides: Partial<TFields>): this;
}
