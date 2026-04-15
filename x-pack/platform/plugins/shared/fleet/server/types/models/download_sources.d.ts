export declare const DownloadSourceSchema: import("@kbn/config-schema").ObjectType<{
    id: import("@kbn/config-schema").Type<string | undefined>;
    name: import("@kbn/config-schema").Type<string>;
    host: import("@kbn/config-schema").Type<string>;
    is_default: import("@kbn/config-schema").Type<boolean>;
    proxy_id: import("@kbn/config-schema").Type<string | null | undefined>;
    ssl: import("@kbn/config-schema").Type<Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
    } & {}> | undefined>;
    auth: import("@kbn/config-schema").Type<Readonly<{
        headers?: Readonly<{} & {
            value: string;
            key: string;
        }>[] | undefined;
        username?: string | undefined;
        password?: string | undefined;
        api_key?: string | undefined;
    } & {}> | null | undefined>;
    secrets: import("@kbn/config-schema").Type<Readonly<{
        ssl?: Readonly<{
            key?: string | Readonly<{} & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
        auth?: Readonly<{
            password?: string | Readonly<{} & {
                id: string;
            }> | undefined;
            api_key?: string | Readonly<{} & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
}>;
export declare const DownloadSourceResponseSchema: import("@kbn/config-schema").ObjectType<Omit<{
    id: import("@kbn/config-schema").Type<string | undefined>;
    name: import("@kbn/config-schema").Type<string>;
    host: import("@kbn/config-schema").Type<string>;
    is_default: import("@kbn/config-schema").Type<boolean>;
    proxy_id: import("@kbn/config-schema").Type<string | null | undefined>;
    ssl: import("@kbn/config-schema").Type<Readonly<{
        key?: string | undefined;
        certificate?: string | undefined;
        certificate_authorities?: string[] | undefined;
    } & {}> | undefined>;
    auth: import("@kbn/config-schema").Type<Readonly<{
        headers?: Readonly<{} & {
            value: string;
            key: string;
        }>[] | undefined;
        username?: string | undefined;
        password?: string | undefined;
        api_key?: string | undefined;
    } & {}> | null | undefined>;
    secrets: import("@kbn/config-schema").Type<Readonly<{
        ssl?: Readonly<{
            key?: string | Readonly<{} & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
        auth?: Readonly<{
            password?: string | Readonly<{} & {
                id: string;
            }> | undefined;
            api_key?: string | Readonly<{} & {
                id: string;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
}, "id"> & {
    id: import("@kbn/config-schema").Type<string>;
}>;
export declare const GetDownloadSourceResponseSchema: import("@kbn/config-schema").ObjectType<{
    item: import("@kbn/config-schema").ObjectType<Omit<{
        id: import("@kbn/config-schema").Type<string | undefined>;
        name: import("@kbn/config-schema").Type<string>;
        host: import("@kbn/config-schema").Type<string>;
        is_default: import("@kbn/config-schema").Type<boolean>;
        proxy_id: import("@kbn/config-schema").Type<string | null | undefined>;
        ssl: import("@kbn/config-schema").Type<Readonly<{
            key?: string | undefined;
            certificate?: string | undefined;
            certificate_authorities?: string[] | undefined;
        } & {}> | undefined>;
        auth: import("@kbn/config-schema").Type<Readonly<{
            headers?: Readonly<{} & {
                value: string;
                key: string;
            }>[] | undefined;
            username?: string | undefined;
            password?: string | undefined;
            api_key?: string | undefined;
        } & {}> | null | undefined>;
        secrets: import("@kbn/config-schema").Type<Readonly<{
            ssl?: Readonly<{
                key?: string | Readonly<{} & {
                    id: string;
                }> | undefined;
            } & {}> | undefined;
            auth?: Readonly<{
                password?: string | Readonly<{} & {
                    id: string;
                }> | undefined;
                api_key?: string | Readonly<{} & {
                    id: string;
                }> | undefined;
            } & {}> | undefined;
        } & {}> | undefined>;
    }, "id"> & {
        id: import("@kbn/config-schema").Type<string>;
    }>;
}>;
