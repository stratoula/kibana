export declare const lensCreateRequestQuerySchema: import("@kbn/config-schema").ObjectType<{
    overwrite: import("@kbn/config-schema").Type<boolean | undefined>;
}>;
export declare const lensCreateRequestBodySchema: import("@kbn/config-schema").Type<import("@kbn/lens-embeddable-utils/config_builder").LensApiSchemaType>;
export declare const lensCreateResponseBodySchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string>;
    data: import("@kbn/config-schema").Type<import("@kbn/lens-embeddable-utils/config_builder").LensApiSchemaType>;
    meta: import("@kbn/config-schema").ObjectType<{
        created_at: import("@kbn/config-schema").Type<string | undefined>;
        created_by: import("@kbn/config-schema").Type<string | undefined>;
        managed: import("@kbn/config-schema").Type<boolean | undefined>;
        owner: import("@kbn/config-schema").Type<string | undefined>;
        updated_at: import("@kbn/config-schema").Type<string | undefined>;
        updated_by: import("@kbn/config-schema").Type<string | undefined>;
        version: import("@kbn/config-schema").Type<string | undefined>;
    }>;
}>;
