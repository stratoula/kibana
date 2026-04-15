export declare const scheduleBackfillExamples: () => string;
export declare const scheduleBodySchema: import("@kbn/config-schema").Type<Readonly<{
    run_actions?: boolean | undefined;
} & {
    ranges: Readonly<{} & {
        end: string;
        start: string;
    }>[];
    rule_id: string;
}>[]>;
export declare const scheduleResponseSchema: import("@kbn/config-schema").Type<(Readonly<{
    end?: string | undefined;
    initiator_id?: string | undefined;
} & {
    id: string;
    status: "error" | "complete" | "timeout" | "running" | "pending";
    rule: Readonly<{
        api_key_created_by_user?: boolean | null | undefined;
    } & {
        id: string;
        name: string;
        created_at: string;
        updated_at: string;
        enabled: boolean;
        created_by: string | null;
        updated_by: string | null;
        tags: string[];
        params: Record<string, any>;
        consumer: string;
        schedule: Readonly<{} & {
            interval: string;
        }>;
        revision: number;
        api_key_owner: string | null;
        rule_type_id: string;
    }>;
    created_at: string;
    enabled: boolean;
    start: string;
    duration: string;
    schedule: Readonly<{} & {
        status: "error" | "complete" | "timeout" | "running" | "pending";
        interval: string;
        run_at: string;
    }>[];
    space_id: string;
    initiator: "user" | "system";
}> | Readonly<{} & {
    error: Readonly<{
        status?: number | undefined;
    } & {
        rule: Readonly<{
            name?: string | undefined;
        } & {
            id: string;
        }>;
        message: string;
    }>;
}>)[]>;
