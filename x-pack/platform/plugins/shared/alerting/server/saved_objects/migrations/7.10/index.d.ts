import type { SavedObjectUnsanitizedDoc } from '@kbn/core-saved-objects-server';
import type { EncryptedSavedObjectsPluginSetup } from '@kbn/encrypted-saved-objects-plugin/server';
export declare const getMigrations7100: (encryptedSavedObjects: EncryptedSavedObjectsPluginSetup) => (doc: SavedObjectUnsanitizedDoc<{
    meta?: Readonly<{
        versionApiKeyLastmodified?: string | undefined;
    } & {}> | undefined;
    running?: boolean | null | undefined;
    monitoring?: Readonly<{} & {
        run: Readonly<{} & {
            history: Readonly<{
                outcome?: "warning" | "failed" | "succeeded" | undefined;
                duration?: number | undefined;
            } & {
                success: boolean;
                timestamp: number;
            }>[];
            calculated_metrics: Readonly<{
                p50?: number | undefined;
                p95?: number | undefined;
                p99?: number | undefined;
            } & {
                success_ratio: number;
            }>;
            last_run: Readonly<{} & {
                timestamp: string;
                metrics: Readonly<{
                    duration?: number | undefined;
                    total_search_duration_ms?: number | null | undefined;
                    total_indexing_duration_ms?: number | null | undefined;
                    total_alerts_detected?: number | null | undefined;
                    total_alerts_created?: number | null | undefined;
                    gap_duration_s?: number | null | undefined;
                    gap_range?: Readonly<{} & {
                        gte: string;
                        lte: string;
                    }> | null | undefined;
                    gap_reason?: Readonly<{} & {
                        type: string;
                    }> | null | undefined;
                } & {}>;
            }>;
        }>;
    }> | undefined;
    artifacts?: Readonly<{
        dashboards?: Readonly<{} & {
            refId: string;
        }>[] | undefined;
        investigation_guide?: Readonly<{} & {
            blob: string;
        }> | undefined;
    } & {}> | undefined;
    flapping?: Readonly<{
        enabled?: boolean | undefined;
    } & {
        lookBackWindow: number;
        statusChangeThreshold: number;
    }> | null | undefined;
    notifyWhen?: "onActionGroupChange" | "onActiveAlert" | "onThrottleInterval" | null | undefined;
    throttle?: string | null | undefined;
    mapped_params?: Readonly<{
        severity?: string | undefined;
        risk_score?: number | undefined;
    } & {}> | undefined;
    scheduledTaskId?: string | null | undefined;
    apiKeyCreatedByUser?: boolean | null | undefined;
    uiamApiKey?: string | null | undefined;
    snoozeSchedule?: Readonly<{
        id?: string | undefined;
        skipRecurrences?: string[] | undefined;
    } & {
        duration: number;
        rRule: Readonly<{
            interval?: number | undefined;
            count?: number | undefined;
            until?: string | undefined;
            wkst?: "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU" | undefined;
            byyearday?: number[] | null | undefined;
            bymonth?: number[] | null | undefined;
            bysetpos?: number[] | null | undefined;
            bymonthday?: number[] | null | undefined;
            byweekday?: (string | number)[] | null | undefined;
            byhour?: number[] | null | undefined;
            byminute?: number[] | null | undefined;
            bysecond?: number[] | null | undefined;
            freq?: 0 | 1 | 3 | 2 | 5 | 4 | 6 | undefined;
            byweekno?: number[] | null | undefined;
        } & {
            dtstart: string;
            tzid: string;
        }>;
    }>[] | undefined;
    isSnoozedUntil?: string | null | undefined;
    lastRun?: Readonly<{
        warning?: import("@kbn/alerting-types/rule_types").RuleExecutionStatusErrorReasons | import("@kbn/alerting-types/rule_types").RuleExecutionStatusWarningReasons | null | undefined;
        outcomeOrder?: number | undefined;
        outcomeMsg?: string[] | null | undefined;
    } & {
        outcome: "warning" | "failed" | "succeeded";
        alertsCount: Readonly<{
            active?: number | null | undefined;
            ignored?: number | null | undefined;
            new?: number | null | undefined;
            recovered?: number | null | undefined;
        } & {}>;
    }> | null | undefined;
    nextRun?: string | null | undefined;
    alertDelay?: Readonly<{} & {
        active: number;
    }> | undefined;
    lastEnabledAt?: string | undefined;
    typeVersion?: number | undefined;
    name: string;
    enabled: boolean;
    actions: {
        group?: string | undefined;
        frequency?: Readonly<{} & {
            summary: boolean;
            notifyWhen: "onActionGroupChange" | "onActiveAlert" | "onThrottleInterval";
            throttle: string | null;
        }> | undefined;
        alertsFilter?: Readonly<{
            query?: Readonly<{} & {
                filters: Readonly<{
                    query?: Record<string, any> | undefined;
                    $state?: Readonly<{} & {
                        store: import("@kbn/es-query-constants").FilterStateStore;
                    }> | undefined;
                } & {
                    meta: Readonly<{
                        type?: string | undefined;
                        field?: string | undefined;
                        index?: string | undefined;
                        key?: string | undefined;
                        disabled?: boolean | undefined;
                        value?: string | undefined;
                        group?: string | undefined;
                        alias?: string | null | undefined;
                        negate?: boolean | undefined;
                        controlledBy?: string | undefined;
                        params?: any;
                        relation?: "AND" | "OR" | undefined;
                        isMultiIndex?: boolean | undefined;
                    } & {}>;
                }>[];
                kql: string;
                dsl: string;
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
        uuid: string;
        params: {
            [x: string]: any;
        };
        actionTypeId: string;
        actionRef: string;
    }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string | null;
    updatedBy: string | null;
    tags: string[];
    params: {
        [x: string]: any;
    };
    consumer: string;
    apiKey: string | null;
    alertTypeId: string;
    schedule: {
        interval: string;
    };
    apiKeyOwner: string | null;
    muteAll: boolean;
    mutedInstanceIds: string[];
    executionStatus: {
        lastDuration?: number | undefined;
        status: "error" | "warning" | "unknown" | "active" | "pending" | "ok";
        error: Readonly<{} & {
            message: string;
            reason: import("@kbn/alerting-types/rule_types").RuleExecutionStatusErrorReasons;
        }> | null;
        warning: Readonly<{} & {
            message: string;
            reason: import("@kbn/alerting-types/rule_types").RuleExecutionStatusWarningReasons;
        }> | null;
        lastExecutionDate: string;
    };
    revision: number;
    legacyId: string | null;
}>, context: import("@kbn/core-saved-objects-server").SavedObjectMigrationContext) => SavedObjectUnsanitizedDoc<{
    meta?: Readonly<{
        versionApiKeyLastmodified?: string | undefined;
    } & {}> | undefined;
    running?: boolean | null | undefined;
    monitoring?: Readonly<{} & {
        run: Readonly<{} & {
            history: Readonly<{
                outcome?: "warning" | "failed" | "succeeded" | undefined;
                duration?: number | undefined;
            } & {
                success: boolean;
                timestamp: number;
            }>[];
            calculated_metrics: Readonly<{
                p50?: number | undefined;
                p95?: number | undefined;
                p99?: number | undefined;
            } & {
                success_ratio: number;
            }>;
            last_run: Readonly<{} & {
                timestamp: string;
                metrics: Readonly<{
                    duration?: number | undefined;
                    total_search_duration_ms?: number | null | undefined;
                    total_indexing_duration_ms?: number | null | undefined;
                    total_alerts_detected?: number | null | undefined;
                    total_alerts_created?: number | null | undefined;
                    gap_duration_s?: number | null | undefined;
                    gap_range?: Readonly<{} & {
                        gte: string;
                        lte: string;
                    }> | null | undefined;
                    gap_reason?: Readonly<{} & {
                        type: string;
                    }> | null | undefined;
                } & {}>;
            }>;
        }>;
    }> | undefined;
    artifacts?: Readonly<{
        dashboards?: Readonly<{} & {
            refId: string;
        }>[] | undefined;
        investigation_guide?: Readonly<{} & {
            blob: string;
        }> | undefined;
    } & {}> | undefined;
    flapping?: Readonly<{
        enabled?: boolean | undefined;
    } & {
        lookBackWindow: number;
        statusChangeThreshold: number;
    }> | null | undefined;
    notifyWhen?: "onActionGroupChange" | "onActiveAlert" | "onThrottleInterval" | null | undefined;
    throttle?: string | null | undefined;
    mapped_params?: Readonly<{
        severity?: string | undefined;
        risk_score?: number | undefined;
    } & {}> | undefined;
    scheduledTaskId?: string | null | undefined;
    apiKeyCreatedByUser?: boolean | null | undefined;
    uiamApiKey?: string | null | undefined;
    snoozeSchedule?: Readonly<{
        id?: string | undefined;
        skipRecurrences?: string[] | undefined;
    } & {
        duration: number;
        rRule: Readonly<{
            interval?: number | undefined;
            count?: number | undefined;
            until?: string | undefined;
            wkst?: "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU" | undefined;
            byyearday?: number[] | null | undefined;
            bymonth?: number[] | null | undefined;
            bysetpos?: number[] | null | undefined;
            bymonthday?: number[] | null | undefined;
            byweekday?: (string | number)[] | null | undefined;
            byhour?: number[] | null | undefined;
            byminute?: number[] | null | undefined;
            bysecond?: number[] | null | undefined;
            freq?: 0 | 1 | 3 | 2 | 5 | 4 | 6 | undefined;
            byweekno?: number[] | null | undefined;
        } & {
            dtstart: string;
            tzid: string;
        }>;
    }>[] | undefined;
    isSnoozedUntil?: string | null | undefined;
    lastRun?: Readonly<{
        warning?: import("@kbn/alerting-types/rule_types").RuleExecutionStatusErrorReasons | import("@kbn/alerting-types/rule_types").RuleExecutionStatusWarningReasons | null | undefined;
        outcomeOrder?: number | undefined;
        outcomeMsg?: string[] | null | undefined;
    } & {
        outcome: "warning" | "failed" | "succeeded";
        alertsCount: Readonly<{
            active?: number | null | undefined;
            ignored?: number | null | undefined;
            new?: number | null | undefined;
            recovered?: number | null | undefined;
        } & {}>;
    }> | null | undefined;
    nextRun?: string | null | undefined;
    alertDelay?: Readonly<{} & {
        active: number;
    }> | undefined;
    lastEnabledAt?: string | undefined;
    typeVersion?: number | undefined;
    name: string;
    enabled: boolean;
    actions: {
        group?: string | undefined;
        frequency?: Readonly<{} & {
            summary: boolean;
            notifyWhen: "onActionGroupChange" | "onActiveAlert" | "onThrottleInterval";
            throttle: string | null;
        }> | undefined;
        alertsFilter?: Readonly<{
            query?: Readonly<{} & {
                filters: Readonly<{
                    query?: Record<string, any> | undefined;
                    $state?: Readonly<{} & {
                        store: import("@kbn/es-query-constants").FilterStateStore;
                    }> | undefined;
                } & {
                    meta: Readonly<{
                        type?: string | undefined;
                        field?: string | undefined;
                        index?: string | undefined;
                        key?: string | undefined;
                        disabled?: boolean | undefined;
                        value?: string | undefined;
                        group?: string | undefined;
                        alias?: string | null | undefined;
                        negate?: boolean | undefined;
                        controlledBy?: string | undefined;
                        params?: any;
                        relation?: "AND" | "OR" | undefined;
                        isMultiIndex?: boolean | undefined;
                    } & {}>;
                }>[];
                kql: string;
                dsl: string;
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
        uuid: string;
        params: {
            [x: string]: any;
        };
        actionTypeId: string;
        actionRef: string;
    }[];
    createdAt: string;
    updatedAt: string;
    createdBy: string | null;
    updatedBy: string | null;
    tags: string[];
    params: {
        [x: string]: any;
    };
    consumer: string;
    apiKey: string | null;
    alertTypeId: string;
    schedule: {
        interval: string;
    };
    apiKeyOwner: string | null;
    muteAll: boolean;
    mutedInstanceIds: string[];
    executionStatus: {
        lastDuration?: number | undefined;
        status: "error" | "warning" | "unknown" | "active" | "pending" | "ok";
        error: Readonly<{} & {
            message: string;
            reason: import("@kbn/alerting-types/rule_types").RuleExecutionStatusErrorReasons;
        }> | null;
        warning: Readonly<{} & {
            message: string;
            reason: import("@kbn/alerting-types/rule_types").RuleExecutionStatusWarningReasons;
        }> | null;
        lastExecutionDate: string;
    };
    revision: number;
    legacyId: string | null;
}>;
