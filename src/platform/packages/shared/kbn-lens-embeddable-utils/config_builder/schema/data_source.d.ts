import { type TypeOf } from '@kbn/config-schema';
import { dataViewSchema, esqlDataSourceSchema } from '@kbn/as-code-data-views-schema';
declare const anyDataSourceSchema: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
    type: import("@kbn/config-schema").Type<"data_view_reference">;
    ref_id: import("@kbn/config-schema").Type<string>;
} | {
    type: import("@kbn/config-schema").Type<"data_view_spec">;
    index_pattern: import("@kbn/config-schema").Type<string>;
    time_field: import("@kbn/config-schema").Type<string | undefined>;
    runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
        name: import("@kbn/config-schema").Type<string>;
        script: import("@kbn/config-schema").Type<string | undefined>;
        type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
        format: import("@kbn/config-schema").Type<Readonly<{
            params?: any;
        } & {
            type: string;
        }> | undefined>;
        custom_label: import("@kbn/config-schema").Type<string | undefined>;
        custom_description: import("@kbn/config-schema").Type<string | undefined>;
    } | {
        name: import("@kbn/config-schema").Type<string>;
        script: import("@kbn/config-schema").Type<string | undefined>;
        type: import("@kbn/config-schema").Type<"composite">;
        fields: import("@kbn/config-schema").Type<Readonly<{
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
    }>[] | undefined>;
}> | Readonly<{} & {
    type: "esql";
    query: string;
}>>;
export declare const dataSourceSchema: {
    data_source: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
        type: import("@kbn/config-schema").Type<"data_view_reference">;
        ref_id: import("@kbn/config-schema").Type<string>;
    } | {
        type: import("@kbn/config-schema").Type<"data_view_spec">;
        index_pattern: import("@kbn/config-schema").Type<string>;
        time_field: import("@kbn/config-schema").Type<string | undefined>;
        runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
            format: import("@kbn/config-schema").Type<Readonly<{
                params?: any;
            } & {
                type: string;
            }> | undefined>;
            custom_label: import("@kbn/config-schema").Type<string | undefined>;
            custom_description: import("@kbn/config-schema").Type<string | undefined>;
        } | {
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"composite">;
            fields: import("@kbn/config-schema").Type<Readonly<{
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
        }>[] | undefined>;
    }>>;
};
export declare const dataSourceEsqlTableSchema: {
    data_source: import("@kbn/config-schema").ObjectType<{
        type: import("@kbn/config-schema").Type<"esql">;
        query: import("@kbn/config-schema").Type<string>;
    }>;
};
export type DataSourceTypeNoESQL = TypeOf<typeof dataViewSchema>;
export type DataSourceTypeESQL = TypeOf<typeof esqlDataSourceSchema>;
export type DataSourceType = TypeOf<typeof anyDataSourceSchema>;
export {};
