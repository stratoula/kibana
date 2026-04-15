export declare const findRulesOptionsSchema: import("@kbn/config-schema").ObjectType<{
    perPage: import("@kbn/config-schema").Type<number | undefined>;
    page: import("@kbn/config-schema").Type<number | undefined>;
    search: import("@kbn/config-schema").Type<string | undefined>;
    defaultSearchOperator: import("@kbn/config-schema").Type<"AND" | "OR" | undefined>;
    searchFields: import("@kbn/config-schema").Type<string[] | undefined>;
    sortField: import("@kbn/config-schema").Type<string | undefined>;
    sortOrder: import("@kbn/config-schema").Type<"desc" | "asc" | undefined>;
    hasReference: import("@kbn/config-schema").Type<Readonly<{} & {
        type: string;
        id: string;
    }> | Readonly<{} & {
        type: string;
        id: string;
    }>[] | undefined>;
    fields: import("@kbn/config-schema").Type<string[] | undefined>;
    filter: import("@kbn/config-schema").Type<string | Record<string, any> | undefined>;
    ruleTypeIds: import("@kbn/config-schema").Type<string[] | undefined>;
    consumers: import("@kbn/config-schema").Type<string[] | undefined>;
}>;
export declare const findRulesParamsSchema: import("@kbn/config-schema").ObjectType<{
    options: import("@kbn/config-schema").Type<Readonly<{
        filter?: string | Record<string, any> | undefined;
        search?: string | undefined;
        page?: number | undefined;
        hasReference?: Readonly<{} & {
            type: string;
            id: string;
        }> | Readonly<{} & {
            type: string;
            id: string;
        }>[] | undefined;
        perPage?: number | undefined;
        fields?: string[] | undefined;
        sortOrder?: "desc" | "asc" | undefined;
        searchFields?: string[] | undefined;
        ruleTypeIds?: string[] | undefined;
        sortField?: string | undefined;
        defaultSearchOperator?: "AND" | "OR" | undefined;
        consumers?: string[] | undefined;
    } & {}> | undefined>;
    excludeFromPublicApi: import("@kbn/config-schema").Type<boolean | undefined>;
    includeSnoozeData: import("@kbn/config-schema").Type<boolean | undefined>;
}>;
