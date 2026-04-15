export declare const findBackfillResultSchema: import("@kbn/config-schema").ObjectType<{
    page: import("@kbn/config-schema").Type<number>;
    perPage: import("@kbn/config-schema").Type<number>;
    total: import("@kbn/config-schema").Type<number>;
    data: import("@kbn/config-schema").Type<Readonly<{
        end?: string | undefined;
        warnings?: string[] | undefined;
        initiatorId?: string | undefined;
    } & {
        id: string;
        status: "error" | "complete" | "timeout" | "running" | "pending";
        rule: Readonly<{
            apiKeyCreatedByUser?: boolean | null | undefined;
        } & {
            id: string;
            name: string;
            enabled: boolean;
            actions: Readonly<{
                uuid?: string | undefined;
                frequency?: Readonly<{} & {
                    summary: boolean;
                    notifyWhen: "onActionGroupChange" | "onActiveAlert" | "onThrottleInterval";
                    throttle: string | null;
                }> | undefined;
                alertsFilter?: Readonly<{
                    query?: Readonly<{
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
                    }> | undefined;
                    timeframe?: Readonly<{} & {
                        days: (1 | 3 | 2 | 5 | 4 | 6 | 7)[];
                        hours: Readonly<{} & {
                            end: string;
                            start: string;
                        }>;
                        timezone: string;
                    }> | undefined;
                } & {}> | undefined;
                useAlertDataForTemplate?: boolean | undefined;
            } & {
                id: string;
                group: string;
                params: Record<string, any>;
                actionTypeId: string;
            }>[];
            createdAt: string;
            updatedAt: string;
            createdBy: string | null;
            updatedBy: string | null;
            tags: string[];
            params: Record<string, any>;
            consumer: string;
            alertTypeId: string;
            schedule: Readonly<{} & {
                interval: string;
            }>;
            apiKeyOwner: string | null;
            revision: number;
        }>;
        enabled: boolean;
        start: string;
        createdAt: string;
        duration: string;
        spaceId: string;
        schedule: Readonly<{} & {
            status: "error" | "complete" | "timeout" | "running" | "pending";
            interval: string;
            runAt: string;
        }>[];
        initiator: "user" | "system";
    }>[]>;
}>;
