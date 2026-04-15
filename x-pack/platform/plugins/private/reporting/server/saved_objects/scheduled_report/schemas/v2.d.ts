export * from './v1';
export declare const rawScheduledReportSchema: import("@kbn/config-schema").ObjectType<Omit<{
    createdAt: import("@kbn/config-schema").Type<string>;
    createdBy: import("@kbn/config-schema").Type<string>;
    enabled: import("@kbn/config-schema").Type<boolean>;
    jobType: import("@kbn/config-schema").Type<string>;
    meta: import("@kbn/config-schema").ObjectType<{
        isDeprecated: import("@kbn/config-schema").Type<boolean | undefined>;
        layout: import("@kbn/config-schema").Type<"canvas" | "preserve_layout" | "print" | undefined>;
        objectType: import("@kbn/config-schema").Type<string>;
    }>;
    migrationVersion: import("@kbn/config-schema").Type<string | undefined>;
    notification: import("@kbn/config-schema").Type<Readonly<{
        email?: Readonly<{
            to?: string[] | undefined;
            bcc?: string[] | undefined;
            cc?: string[] | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    payload: import("@kbn/config-schema").Type<string>;
    schedule: import("@kbn/config-schema").ObjectType<{
        rrule: import("@kbn/config-schema").Type<Readonly<{
            byhour?: number[] | undefined;
            byminute?: number[] | undefined;
            byweekday?: string[] | undefined;
            bymonthday?: number[] | undefined;
        } & {
            interval: number;
            freq: import("@kbn/rrule/types").Frequency.MONTHLY;
            tzid: string;
        }> | Readonly<{
            byhour?: number[] | undefined;
            byminute?: number[] | undefined;
            byweekday?: string[] | undefined;
        } & {
            interval: number;
            freq: import("@kbn/rrule/types").Frequency.WEEKLY;
            tzid: string;
            bymonthday: never;
        }> | Readonly<{
            byhour?: number[] | undefined;
            byminute?: number[] | undefined;
            byweekday?: string[] | undefined;
        } & {
            interval: number;
            freq: import("@kbn/rrule/types").Frequency.DAILY;
            tzid: string;
            bymonthday: never;
        }>>;
    }>;
    title: import("@kbn/config-schema").Type<string>;
}, "schedule"> & {
    schedule: import("@kbn/config-schema").ObjectType<{
        rrule: import("@kbn/config-schema").Type<Readonly<{
            byhour?: number[] | undefined;
            byminute?: number[] | undefined;
            byweekday?: string[] | undefined;
            bymonthday?: number[] | undefined;
            dtstart?: string | undefined;
        } & {
            interval: number;
            freq: import("@kbn/rrule/types").Frequency.MONTHLY;
            tzid: string;
        }> | Readonly<{
            byhour?: number[] | undefined;
            byminute?: number[] | undefined;
            byweekday?: string[] | undefined;
            dtstart?: string | undefined;
        } & {
            interval: number;
            freq: import("@kbn/rrule/types").Frequency.WEEKLY;
            tzid: string;
            bymonthday: never;
        }> | Readonly<{
            byhour?: number[] | undefined;
            byminute?: number[] | undefined;
            byweekday?: string[] | undefined;
            dtstart?: string | undefined;
        } & {
            interval: number;
            freq: import("@kbn/rrule/types").Frequency.DAILY;
            tzid: string;
            bymonthday: never;
        }>>;
    }>;
}>;
