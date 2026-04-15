export declare const lensSearchRequestQuerySchema: import("@kbn/config-schema").ObjectType<{
    fields: import("@kbn/config-schema").Type<string[] | undefined>;
    search_fields: import("@kbn/config-schema").Type<string | string[] | undefined>;
    query: import("@kbn/config-schema").Type<string | undefined>;
    page: import("@kbn/config-schema").Type<number>;
    per_page: import("@kbn/config-schema").Type<number>;
}>;
export declare const lensSearchResponseBodySchema: import("@kbn/config-schema").ObjectType<{
    data: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        data: import("@kbn/lens-embeddable-utils").LensApiSchemaType;
        meta: Readonly<{
            managed?: boolean | undefined;
            created_at?: string | undefined;
            updated_at?: string | undefined;
            version?: string | undefined;
            created_by?: string | undefined;
            updated_by?: string | undefined;
            owner?: string | undefined;
        } & {}>;
    }>[]>;
    meta: import("@kbn/config-schema").ObjectType<{
        page: import("@kbn/config-schema").Type<number | undefined>;
        per_page: import("@kbn/config-schema").Type<number | undefined>;
        total: import("@kbn/config-schema").Type<number>;
    }>;
}>;
