import type { TypeOf } from '@kbn/config-schema';
type DeepWriteable<T> = {
    -readonly [P in keyof T]: DeepWriteable<T[P]>;
};
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : DeepPartial<T[P]>;
};
export declare const ECS_VERSION = "1.8.0";
export type IValidatedEvent = TypeOf<typeof EventSchema>;
export type IEvent = DeepPartial<DeepWriteable<IValidatedEvent>>;
export declare const EventSchema: import("@kbn/config-schema").Type<Readonly<{
    error?: Readonly<{
        message?: string | undefined;
        id?: string | undefined;
        type?: string | undefined;
        code?: string | undefined;
        stack_trace?: string | undefined;
    } & {}> | undefined;
    rule?: Readonly<{
        id?: string | undefined;
        name?: string | undefined;
        version?: string | undefined;
        category?: string | undefined;
        reference?: string | undefined;
        author?: string[] | undefined;
        description?: string | undefined;
        license?: string | undefined;
        ruleset?: string | undefined;
        uuid?: string | undefined;
    } & {}> | undefined;
    tags?: string[] | undefined;
    message?: string | undefined;
    kibana?: Readonly<{
        alert?: Readonly<{
            rule?: Readonly<{
                consumer?: string | undefined;
                gap?: Readonly<{
                    reason?: Readonly<{
                        type?: string | undefined;
                    } & {}> | undefined;
                    status?: string | undefined;
                    range?: Readonly<{
                        gte?: string | undefined;
                        lte?: string | undefined;
                    } & {}> | undefined;
                    filled_intervals?: Readonly<{
                        gte?: string | undefined;
                        lte?: string | undefined;
                    } & {}>[] | undefined;
                    unfilled_intervals?: Readonly<{
                        gte?: string | undefined;
                        lte?: string | undefined;
                    } & {}>[] | undefined;
                    in_progress_intervals?: Readonly<{
                        gte?: string | undefined;
                        lte?: string | undefined;
                    } & {}>[] | undefined;
                    total_gap_duration_ms?: string | number | undefined;
                    filled_duration_ms?: string | number | undefined;
                    unfilled_duration_ms?: string | number | undefined;
                    in_progress_duration_ms?: string | number | undefined;
                    deleted?: boolean | undefined;
                    updated_at?: string | undefined;
                    failed_auto_fill_attempts?: string | number | undefined;
                } & {}> | undefined;
                execution?: Readonly<{
                    uuid?: string | undefined;
                    status?: string | undefined;
                    status_order?: string | number | undefined;
                    backfill?: Readonly<{
                        id?: string | undefined;
                        start?: string | undefined;
                        interval?: string | undefined;
                    } & {}> | undefined;
                    metrics?: Readonly<{
                        number_of_triggered_actions?: string | number | undefined;
                        number_of_generated_actions?: string | number | undefined;
                        alert_counts?: Readonly<{
                            new?: string | number | undefined;
                            recovered?: string | number | undefined;
                            active?: string | number | undefined;
                        } & {}> | undefined;
                        number_of_delayed_alerts?: string | number | undefined;
                        number_of_searches?: string | number | undefined;
                        total_indexing_duration_ms?: string | number | undefined;
                        es_search_duration_ms?: string | number | undefined;
                        total_search_duration_ms?: string | number | undefined;
                        execution_gap_duration_s?: string | number | undefined;
                        gap_range?: Readonly<{
                            gte?: string | undefined;
                            lte?: string | undefined;
                        } & {}> | undefined;
                        gap_reason?: Readonly<{
                            type?: string | undefined;
                        } & {}> | undefined;
                        matched_indices_count?: string | number | undefined;
                        frozen_indices_queried_count?: string | number | undefined;
                        rule_type_run_duration_ms?: string | number | undefined;
                        process_alerts_duration_ms?: string | number | undefined;
                        trigger_actions_duration_ms?: string | number | undefined;
                        process_rule_duration_ms?: string | number | undefined;
                        claim_to_start_duration_ms?: string | number | undefined;
                        persist_alerts_duration_ms?: string | number | undefined;
                        prepare_rule_duration_ms?: string | number | undefined;
                        total_run_duration_ms?: string | number | undefined;
                        total_enrichment_duration_ms?: string | number | undefined;
                        update_alerts_duration_ms?: string | number | undefined;
                        alerts_candidate_count?: string | number | undefined;
                        alerts_suppressed_count?: string | number | undefined;
                    } & {}> | undefined;
                } & {}> | undefined;
                revision?: string | number | undefined;
                rule_type_id?: string | undefined;
            } & {}> | undefined;
            uuid?: string | undefined;
            flapping?: boolean | undefined;
            maintenance_window_ids?: string[] | undefined;
            deletion?: Readonly<{
                num_deleted?: string | number | undefined;
            } & {}> | undefined;
        } & {}> | undefined;
        alerting?: Readonly<{
            outcome?: string | undefined;
            instance_id?: string | undefined;
            action_group_id?: string | undefined;
            action_subgroup?: string | undefined;
            status?: string | undefined;
            summary?: Readonly<{
                new?: Readonly<{
                    count?: string | number | undefined;
                } & {}> | undefined;
                ongoing?: Readonly<{
                    count?: string | number | undefined;
                } & {}> | undefined;
                recovered?: Readonly<{
                    count?: string | number | undefined;
                } & {}> | undefined;
            } & {}> | undefined;
        } & {}> | undefined;
        version?: string | undefined;
        action?: Readonly<{
            id?: string | undefined;
            name?: string | undefined;
            execution?: Readonly<{
                usage?: Readonly<{
                    request_body_bytes?: string | number | undefined;
                } & {}> | undefined;
                uuid?: string | undefined;
                source?: string | undefined;
                gen_ai?: Readonly<{
                    usage?: Readonly<{
                        prompt_tokens?: string | number | undefined;
                        completion_tokens?: string | number | undefined;
                        total_tokens?: string | number | undefined;
                    } & {}> | undefined;
                } & {}> | undefined;
            } & {}> | undefined;
            type_id?: string | undefined;
        } & {}> | undefined;
        server_uuid?: string | undefined;
        task?: Readonly<{
            id?: string | undefined;
            type?: string | undefined;
            schedule_delay?: string | number | undefined;
            scheduled?: string | undefined;
        } & {}> | undefined;
        saved_objects?: Readonly<{
            id?: string | undefined;
            type?: string | undefined;
            rel?: string | undefined;
            namespace?: string | undefined;
            type_id?: string | undefined;
            space_agnostic?: boolean | undefined;
        } & {}>[] | undefined;
        space_ids?: string[] | undefined;
        user_api_key?: Readonly<{
            id?: string | undefined;
            name?: string | undefined;
        } & {}> | undefined;
        gap_auto_fill?: Readonly<{
            execution?: Readonly<{
                end?: string | undefined;
                start?: string | undefined;
                status?: string | undefined;
                duration_ms?: string | number | undefined;
                rule_ids?: string[] | undefined;
                task_params?: Readonly<{
                    name?: string | undefined;
                    interval?: string | undefined;
                    num_retries?: string | number | undefined;
                    gap_fill_range?: string | undefined;
                    max_backfills?: string | number | undefined;
                } & {}> | undefined;
                results?: Readonly<{
                    error?: string | undefined;
                    status?: string | undefined;
                    rule_id?: string | undefined;
                    processed_gaps?: string | number | undefined;
                } & {}>[] | undefined;
            } & {}> | undefined;
        } & {}> | undefined;
    } & {}> | undefined;
    '@timestamp'?: string | undefined;
    ecs?: Readonly<{
        version?: string | undefined;
    } & {}> | undefined;
    event?: Readonly<{
        id?: string | undefined;
        type?: string[] | undefined;
        url?: string | undefined;
        code?: string | undefined;
        action?: string | undefined;
        category?: string[] | undefined;
        created?: string | undefined;
        dataset?: string | undefined;
        duration?: string | number | undefined;
        end?: string | undefined;
        hash?: string | undefined;
        ingested?: string | undefined;
        kind?: string | undefined;
        module?: string | undefined;
        original?: string | undefined;
        outcome?: string | undefined;
        provider?: string | undefined;
        reason?: string | undefined;
        reference?: string | undefined;
        risk_score?: number | undefined;
        risk_score_norm?: number | undefined;
        sequence?: string | number | undefined;
        severity?: string | number | undefined;
        start?: string | undefined;
        timezone?: string | undefined;
    } & {}> | undefined;
    log?: Readonly<{
        level?: string | undefined;
        logger?: string | undefined;
    } & {}> | undefined;
    user?: Readonly<{
        id?: string | undefined;
        name?: string | undefined;
    } & {}> | undefined;
} & {}> | undefined>;
export {};
