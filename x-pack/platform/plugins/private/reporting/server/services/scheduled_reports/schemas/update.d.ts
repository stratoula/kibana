export declare const updateScheduledReportSchema: import("@kbn/config-schema").ObjectType<{
    title: import("@kbn/config-schema").Type<string | undefined>;
    schedule: import("@kbn/config-schema").Type<Readonly<{} & {
        rrule: Readonly<{
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
        }> | Readonly<{
            byminute?: number[] | undefined;
            dtstart?: string | undefined;
        } & {
            interval: number;
            freq: import("@kbn/rrule/types").Frequency.HOURLY;
            tzid: string;
            byhour: never;
            byweekday: never;
            bymonthday: never;
        }>;
    }> | undefined>;
    notification: import("@kbn/config-schema").Type<Readonly<{
        email?: Readonly<{
            message?: string | undefined;
            to?: string[] | undefined;
            bcc?: string[] | undefined;
            cc?: string[] | undefined;
            subject?: string | undefined;
        } & {}> | null | undefined;
    } & {}> | undefined>;
}>;
