import type { QueryOptionsOverrides } from '@kbn/alerts-ui-shared/src/common/types/tanstack_query_utility_types';
import type { HttpStart } from '@kbn/core-http-browser';
import type { NotificationsStart } from '@kbn/core-notifications-browser';
import type { ApplicationStart } from '@kbn/core-application-browser';
import type { LicensingPluginStart } from '@kbn/licensing-plugin/public';
import { bulkGetMaintenanceWindows } from '../apis/bulk_get_maintenance_windows';
interface UseBulkGetMaintenanceWindowsQueryParams {
    ids: string[];
    http: HttpStart;
    notifications: NotificationsStart;
    application: ApplicationStart;
    licensing: LicensingPluginStart;
}
export declare const useBulkGetMaintenanceWindowsQuery: ({ ids, http, notifications: { toasts }, application: { capabilities }, licensing, }: UseBulkGetMaintenanceWindowsQueryParams, { enabled, context, }?: Pick<QueryOptionsOverrides<typeof bulkGetMaintenanceWindows>, "enabled" | "context">) => import("@kbn/react-query").UseQueryResult<Map<string, Readonly<{
    scope?: Readonly<{
        alerting: Readonly<{
            dsl?: string | undefined;
        } & {
            kql: string;
            filters: Readonly<{
                query?: Record<string, any> | undefined;
                $state?: Readonly<{} & {
                    store: import("@kbn/es-query-constants").FilterStateStore;
                }> | undefined;
            } & {
                meta: Record<string, any>;
            }>[];
        }> | null;
    }> | undefined;
    categoryIds?: ("observability" | "securitySolution" | "management")[] | null | undefined;
    scopedQuery?: Readonly<{
        dsl?: string | undefined;
    } & {
        kql: string;
        filters: Readonly<{
            query?: Record<string, any> | undefined;
            $state?: Readonly<{} & {
                store: import("@kbn/es-query-constants").FilterStateStore;
            }> | undefined;
        } & {
            meta: Record<string, any>;
        }>[];
    }> | null | undefined;
} & {
    title: string;
    id: string;
    status: "disabled" | "running" | "upcoming" | "finished" | "archived";
    enabled: boolean;
    duration: number;
    expirationDate: string;
    events: Readonly<{
        gte: string;
        lte: string;
    }>[];
    rRule: Readonly<{
        count?: number | undefined;
        freq?: 0 | 3 | 1 | 2 | 5 | 6 | 4 | undefined;
        until?: string | undefined;
        interval?: number | undefined;
        wkst?: "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU" | undefined;
        byweekday?: (string | number)[] | null | undefined;
        bymonth?: number[] | null | undefined;
        bysetpos?: number[] | null | undefined;
        bymonthday?: number[] | null | undefined;
        byyearday?: number[] | null | undefined;
        byweekno?: number[] | null | undefined;
        byhour?: number[] | null | undefined;
        byminute?: number[] | null | undefined;
        bysecond?: number[] | null | undefined;
    } & {
        dtstart: string;
        tzid: string;
    }>;
    createdBy: string | null;
    updatedBy: string | null;
    createdAt: string;
    updatedAt: string;
    eventStartTime: string | null;
    eventEndTime: string | null;
    schedule: Readonly<{} & {
        custom: Readonly<{
            timezone?: string | undefined;
            recurring?: Readonly<{
                end?: string | undefined;
                every?: string | undefined;
                onWeekDay?: string[] | undefined;
                onMonthDay?: number[] | undefined;
                onMonth?: number[] | undefined;
                occurrences?: number | undefined;
            }> | undefined;
        } & {
            duration: string;
            start: string;
        }>;
    }>;
}>>, unknown>;
export {};
