export declare const lensSearchRequestQuerySchema: import("@kbn/config-schema").ObjectType<{
    query: import("@kbn/config-schema").Type<string | undefined>;
    page: import("@kbn/config-schema").Type<number>;
    perPage: import("@kbn/config-schema").Type<number>;
    fields: import("@kbn/config-schema").Type<string[] | undefined>;
    searchFields: import("@kbn/config-schema").Type<string | string[] | undefined>;
}>;
export declare const lensSearchResponseBodySchema: import("@kbn/config-schema").ObjectType<{
    data: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        meta: Readonly<{
            originId?: string | undefined;
            managed?: boolean | undefined;
            createdAt?: string | undefined;
            updatedAt?: string | undefined;
            createdBy?: string | undefined;
            updatedBy?: string | undefined;
        } & {
            type: string;
        }>;
        data: import("@kbn/lens-embeddable-utils").LensApiSchemaType | Readonly<{
            version?: 2 | undefined;
            description?: string | undefined;
            state?: any;
        } & {
            references: Readonly<{
                id: string;
                type: string;
                name: string;
            }>[];
            title: string;
            visualizationType: string;
        }>;
    }>[]>;
    meta: import("@kbn/config-schema").ObjectType<{
        total: import("@kbn/config-schema").Type<number>;
        page: import("@kbn/config-schema").Type<number | undefined>;
        perPage: import("@kbn/config-schema").Type<number | undefined>;
    }>;
}>;
