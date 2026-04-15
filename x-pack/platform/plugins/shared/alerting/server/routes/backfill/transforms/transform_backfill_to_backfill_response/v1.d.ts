import type { Backfill } from '../../../../application/backfill/result/types';
export declare const transformBackfillToBackfillResponse: (backfill: Backfill) => {
    created_at: string;
    space_id: string;
    rule: {
        rule_type_id: string;
        api_key_owner: string | null;
        api_key_created_by_user: boolean | null | undefined;
        created_by: string | null;
        created_at: string;
        updated_by: string | null;
        updated_at: string;
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
        tags: string[];
        params: Record<string, any>;
        consumer: string;
        schedule: Readonly<{} & {
            interval: string;
        }>;
        revision: number;
    };
    initiator: "user" | "system";
    initiator_id: string | undefined;
    schedule: {
        run_at: string;
        status: "error" | "complete" | "timeout" | "running" | "pending";
        interval: string;
    }[];
    end?: string | undefined;
    warnings?: string[] | undefined;
    id: string;
    status: "error" | "complete" | "timeout" | "running" | "pending";
    enabled: boolean;
    start: string;
    duration: string;
};
