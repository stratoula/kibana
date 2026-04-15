import type { Type } from '@kbn/config-schema';
export declare const primitiveRuntimeFieldSchema: import("@kbn/config-schema").ObjectType<{
    /**
     * The name of the runtime field.
     * Example: 'my_runtime_field'
     */
    name: Type<string>;
    /**
     * The script that defines the runtime field. This should be a painless script that computes the field value at query time.
     * Example: 'emit(doc["field_name"].value * 2);'
     */
    script: Type<string | undefined>;
    /**
     * The type of the runtime field (e.g., 'keyword', 'long', 'date').
     * Example: 'keyword'
     */
    type: Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
    /**
     * Optional format definition for the runtime field. The structure depends on the field type and use case.
     * If not provided, no format is applied.
     */
    format: Type<Readonly<{
        params?: any;
    } & {
        type: string;
    }> | undefined>;
    custom_label: Type<string | undefined>;
    custom_description: Type<string | undefined>;
}>;
export declare const compositeRuntimeFieldSchema: import("@kbn/config-schema").ObjectType<{
    /**
     * The name of the runtime field.
     * Example: 'my_runtime_field'
     */
    name: Type<string>;
    /**
     * The script that defines the runtime field. This should be a painless script that computes the field value at query time.
     * Example: 'emit(doc["field_name"].value * 2);'
     */
    script: Type<string | undefined>;
    type: Type<"composite">;
    fields: Type<Readonly<{
        format?: Readonly<{
            params?: any;
        } & {
            type: string;
        }> | undefined;
        custom_label?: string | undefined;
        custom_description?: string | undefined;
    } & {
        name: string;
        type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
    }>[]>;
}>;
export declare const runtimeFieldSchema: Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
    /**
     * The name of the runtime field.
     * Example: 'my_runtime_field'
     */
    name: Type<string>;
    /**
     * The script that defines the runtime field. This should be a painless script that computes the field value at query time.
     * Example: 'emit(doc["field_name"].value * 2);'
     */
    script: Type<string | undefined>;
    /**
     * The type of the runtime field (e.g., 'keyword', 'long', 'date').
     * Example: 'keyword'
     */
    type: Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
    /**
     * Optional format definition for the runtime field. The structure depends on the field type and use case.
     * If not provided, no format is applied.
     */
    format: Type<Readonly<{
        params?: any;
    } & {
        type: string;
    }> | undefined>;
    custom_label: Type<string | undefined>;
    custom_description: Type<string | undefined>;
} | {
    /**
     * The name of the runtime field.
     * Example: 'my_runtime_field'
     */
    name: Type<string>;
    /**
     * The script that defines the runtime field. This should be a painless script that computes the field value at query time.
     * Example: 'emit(doc["field_name"].value * 2);'
     */
    script: Type<string | undefined>;
    type: Type<"composite">;
    fields: Type<Readonly<{
        format?: Readonly<{
            params?: any;
        } & {
            type: string;
        }> | undefined;
        custom_label?: string | undefined;
        custom_description?: string | undefined;
    } & {
        name: string;
        type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
    }>[]>;
}>>;
