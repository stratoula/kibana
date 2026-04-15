export declare const updateParamsSchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string>;
}>;
export declare const updateBodySchema: import("@kbn/config-schema").ObjectType<{
    title: import("@kbn/config-schema").Type<string | undefined>;
    enabled: import("@kbn/config-schema").Type<boolean | undefined>;
    duration: import("@kbn/config-schema").Type<number | undefined>;
    r_rule: import("@kbn/config-schema").Type<Readonly<{
        interval?: number | undefined;
        count?: number | undefined;
        until?: string | undefined;
        bymonth?: number[] | undefined;
        bymonthday?: number[] | undefined;
        byweekday?: string[] | undefined;
        freq?: 0 | 1 | 3 | 2 | 4 | undefined;
    } & {
        dtstart: string;
        tzid: string;
    }> | undefined>;
    category_ids: import("@kbn/config-schema").Type<("management" | "observability" | "securitySolution")[] | null | undefined>;
    scoped_query: import("@kbn/config-schema").Type<Readonly<{
        dsl?: string | undefined;
    } & {
        filters: Readonly<{
            query?: Record<string, any> | undefined;
            $state?: Readonly<{} & {
                store: import("@kbn/es-query-constants").FilterStateStore;
            }> | undefined;
        } & {
            meta: Record<string, any>;
        }>[];
        kql: string;
    }> | null | undefined>;
}>;
