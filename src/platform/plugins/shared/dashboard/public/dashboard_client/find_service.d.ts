import type { FindDashboardsByIdResponse } from './types';
export declare const findService: {
    findById: (id: string) => Promise<FindDashboardsByIdResponse>;
    findByIds: (ids: string[]) => Promise<FindDashboardsByIdResponse[]>;
    findByTitle: (title: string) => Promise<{
        id: string;
    } | undefined>;
    search: (searchParams: import("../../server").DashboardSearchRequestParams) => Promise<Readonly<{} & {
        page: number;
        total: number;
        dashboards: Readonly<{} & {
            id: string;
            data: Readonly<{
                description?: string | undefined;
                tags?: string[] | undefined;
                time_range?: Readonly<{
                    mode?: "relative" | "absolute" | undefined;
                } & {
                    from: string;
                    to: string;
                }> | undefined;
                access_control?: Readonly<{
                    access_mode?: "default" | "write_restricted" | undefined;
                } & {}> | undefined;
            } & {
                title: string;
            }>;
            meta: Readonly<{
                version?: string | undefined;
                managed?: boolean | undefined;
                created_at?: string | undefined;
                owner?: string | undefined;
                updated_at?: string | undefined;
                created_by?: string | undefined;
                updated_by?: string | undefined;
            } & {}>;
        }>[];
    }>>;
};
