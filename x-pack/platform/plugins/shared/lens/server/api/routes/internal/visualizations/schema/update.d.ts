export declare const lensUpdateRequestParamsSchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string>;
}>;
export declare const lensUpdateRequestQuerySchema: import("@kbn/config-schema").ObjectType<{}>;
export declare const lensUpdateRequestBodySchema: import("@kbn/config-schema").Type<import("@kbn/lens-embeddable-utils/config_builder").LensApiSchemaType | Readonly<{
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
}> | Readonly<{
    version?: 1 | undefined;
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
}> | Readonly<{
    description?: string | null | undefined;
    state?: any;
    visualizationType?: string | null | undefined;
    visState?: string | undefined;
    uiStateJSON?: string | undefined;
    savedSearchRefName?: string | undefined;
} & {
    references: Readonly<{
        id: string;
        type: string;
        name: string;
    }>[];
    title: string;
}>>;
export declare const lensUpdateResponseBodySchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string>;
    data: import("@kbn/config-schema").Type<import("@kbn/lens-embeddable-utils/config_builder").LensApiSchemaType | Readonly<{
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
    }>>;
    meta: import("@kbn/config-schema").ObjectType<{
        type: import("@kbn/config-schema").Type<string>;
        originId: import("@kbn/config-schema").Type<string | undefined>;
        managed: import("@kbn/config-schema").Type<boolean | undefined>;
        createdAt: import("@kbn/config-schema").Type<string | undefined>;
        updatedAt: import("@kbn/config-schema").Type<string | undefined>;
        createdBy: import("@kbn/config-schema").Type<string | undefined>;
        updatedBy: import("@kbn/config-schema").Type<string | undefined>;
    }>;
}>;
