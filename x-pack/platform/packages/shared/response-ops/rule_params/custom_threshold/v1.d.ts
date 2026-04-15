import type { TypeOf } from '@kbn/config-schema';
export declare const customThresholdParamsSchema: import("@kbn/config-schema").ObjectType<{
    criteria: import("@kbn/config-schema").Type<Readonly<{
        label?: string | undefined;
        aggType?: "custom" | undefined;
        equation?: string | undefined;
    } & {
        metric: never;
        metrics: (Readonly<{
            filter?: string | undefined;
        } & {
            name: string;
            field: string;
            aggType: string;
        }> | Readonly<{
            filter?: string | undefined;
        } & {
            name: string;
            field: never;
            aggType: "count";
        }>)[];
        threshold: number[];
        comparator: string;
        timeUnit: string;
        timeSize: number;
    }>[]>;
    groupBy: import("@kbn/config-schema").Type<string | string[] | undefined>;
    alertOnNoData: import("@kbn/config-schema").Type<boolean | undefined>;
    alertOnGroupDisappear: import("@kbn/config-schema").Type<boolean | undefined>;
    noDataBehavior: import("@kbn/config-schema").Type<"alertOnNoData" | "recover" | "remainActive" | undefined>;
    searchConfiguration: import("@kbn/config-schema").ObjectType<{
        index: import("@kbn/config-schema").Type<string | Readonly<{
            type?: string | undefined;
            id?: string | undefined;
            managed?: boolean | undefined;
            name?: string | undefined;
            namespaces?: string[] | undefined;
            version?: string | undefined;
            typeMeta?: Readonly<{} & {}> | undefined;
            timeFieldName?: string | undefined;
            fields?: Record<string, Readonly<{
                script?: string | undefined;
                format?: Readonly<{
                    id?: string | undefined;
                    params?: any;
                } & {}> | undefined;
                count?: number | undefined;
                searchable?: boolean | undefined;
                subType?: Readonly<{
                    nested?: Readonly<{} & {
                        path: string;
                    }> | undefined;
                    multi?: Readonly<{} & {
                        parent: string;
                    }> | undefined;
                } & {}> | undefined;
                runtimeField?: Readonly<{
                    script?: Readonly<{} & {
                        source: string;
                    }> | undefined;
                    format?: Readonly<{
                        id?: string | undefined;
                        params?: any;
                    } & {}> | undefined;
                    customLabel?: string | undefined;
                    customDescription?: string | undefined;
                    popularity?: number | undefined;
                } & {
                    type: "boolean" | "ip" | "long" | "date" | "keyword" | "geo_point" | "double" | "composite";
                }> | Readonly<{
                    script?: Readonly<{} & {
                        source: string;
                    }> | undefined;
                    fields?: Record<string, Readonly<{
                        format?: Readonly<{
                            id?: string | undefined;
                            params?: any;
                        } & {}> | undefined;
                        customLabel?: string | undefined;
                        customDescription?: string | undefined;
                        popularity?: number | undefined;
                    } & {
                        type: "boolean" | "ip" | "long" | "date" | "keyword" | "geo_point" | "double" | "composite";
                    }>> | undefined;
                } & {
                    type: "boolean" | "ip" | "long" | "date" | "keyword" | "geo_point" | "double" | "composite";
                }> | undefined;
                customLabel?: string | undefined;
                customDescription?: string | undefined;
                esTypes?: string[] | undefined;
                scripted?: boolean | undefined;
                aggregatable?: boolean | undefined;
                readFromDocValues?: boolean | undefined;
                shortDotsEnable?: boolean | undefined;
            } & {
                type: string;
                name: string;
            }>> | undefined;
            allowHidden?: boolean | undefined;
            fieldFormats?: Record<string, Readonly<{
                id?: string | undefined;
                params?: any;
            } & {}>> | undefined;
            sourceFilters?: Readonly<{
                clientId?: string | number | undefined;
            } & {
                value: string;
            }>[] | undefined;
            allowNoIndex?: boolean | undefined;
            fieldAttrs?: Record<string, Readonly<{
                count?: number | undefined;
                customLabel?: string | undefined;
                customDescription?: string | undefined;
            } & {}>> | undefined;
            runtimeFieldMap?: Record<string, Readonly<{
                script?: Readonly<{} & {
                    source: string;
                }> | undefined;
                format?: Readonly<{
                    id?: string | undefined;
                    params?: any;
                } & {}> | undefined;
                customLabel?: string | undefined;
                customDescription?: string | undefined;
                popularity?: number | undefined;
            } & {
                type: "boolean" | "ip" | "long" | "date" | "keyword" | "geo_point" | "double" | "composite";
            }> | Readonly<{
                script?: Readonly<{} & {
                    source: string;
                }> | undefined;
                fields?: Record<string, Readonly<{
                    format?: Readonly<{
                        id?: string | undefined;
                        params?: any;
                    } & {}> | undefined;
                    customLabel?: string | undefined;
                    customDescription?: string | undefined;
                    popularity?: number | undefined;
                } & {
                    type: "boolean" | "ip" | "long" | "date" | "keyword" | "geo_point" | "double" | "composite";
                }>> | undefined;
            } & {
                type: "boolean" | "ip" | "long" | "date" | "keyword" | "geo_point" | "double" | "composite";
            }>> | undefined;
        } & {
            title: string;
        }>>;
        query: import("@kbn/config-schema").ObjectType<{
            language: import("@kbn/config-schema").Type<string>;
            query: import("@kbn/config-schema").Type<string>;
        }>;
        filter: import("@kbn/config-schema").Type<Readonly<{
            query?: Record<string, any> | undefined;
        } & {
            meta: Record<string, any>;
        }>[] | undefined>;
    }>;
}>;
export type CustomThresholdParams = TypeOf<typeof customThresholdParamsSchema>;
