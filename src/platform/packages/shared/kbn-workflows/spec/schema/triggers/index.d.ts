import { z } from '@kbn/zod/v4';
export { AlertRuleTriggerSchema } from './alert_trigger_schema';
export { ManualTriggerSchema } from './manual_trigger_schema';
export { ScheduledTriggerSchema, SCHEDULED_INTERVAL_ERROR, SCHEDULED_INTERVAL_PATTERN, } from './scheduled_trigger_schema';
export declare const TriggerSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"alert">;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"scheduled">;
    with: z.ZodUnion<readonly [z.ZodObject<{
        every: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        rrule: z.ZodObject<{
            freq: z.ZodEnum<{
                DAILY: "DAILY";
                WEEKLY: "WEEKLY";
                MONTHLY: "MONTHLY";
            }>;
            interval: z.ZodNumber;
            tzid: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>>;
            dtstart: z.ZodOptional<z.ZodString>;
            byhour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byminute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byweekday: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                MO: "MO";
                TU: "TU";
                WE: "WE";
                TH: "TH";
                FR: "FR";
                SA: "SA";
                SU: "SU";
            }>>>;
            bymonthday: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
    }, z.core.$strip>]>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"manual">;
}, z.core.$strip>], "type">;
/**
 * Returns a trigger schema that includes built-in types plus optional registered trigger ids.
 * Used by the YAML editor so custom trigger types (e.g. example.custom_trigger) pass validation.
 * Custom triggers allow an `on.condition` clause for KQL filtering.
 */
export declare function getTriggerSchema(customTriggerIds?: string[]): z.ZodType;
export declare const TriggerTypes: ("alert" | "manual" | "scheduled")[];
export type TriggerType = (typeof TriggerTypes)[number];
