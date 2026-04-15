import { z } from '@kbn/zod/v4';
export declare const SCOUT_TARGET_LOCATION: string;
export declare const SCOUT_TARGET_ARCH: string;
export declare const SCOUT_TARGET_DOMAIN: string;
export declare const ScoutTargetLocationSchema: z.ZodEnum<{
    local: "local";
    cloud: "cloud";
}>;
export declare const ScoutTargetArchSchema: z.ZodEnum<{
    stateful: "stateful";
    serverless: "serverless";
}>;
export declare const ScoutTargetDomainSchema: z.ZodEnum<{
    search: "search";
    workplaceai: "workplaceai";
    classic: "classic";
    observability_complete: "observability_complete";
    observability_logs_essentials: "observability_logs_essentials";
    security_complete: "security_complete";
    security_essentials: "security_essentials";
    security_ease: "security_ease";
}>;
export declare const ScoutTestTargetSchema: z.ZodObject<{
    location: z.ZodEnum<{
        local: "local";
        cloud: "cloud";
    }>;
    arch: z.ZodEnum<{
        stateful: "stateful";
        serverless: "serverless";
    }>;
    domain: z.ZodEnum<{
        search: "search";
        workplaceai: "workplaceai";
        classic: "classic";
        observability_complete: "observability_complete";
        observability_logs_essentials: "observability_logs_essentials";
        security_complete: "security_complete";
        security_essentials: "security_essentials";
        security_ease: "security_ease";
    }>;
}, z.core.$strip>;
export type ScoutTargetLocation = z.infer<typeof ScoutTargetLocationSchema>;
export type ScoutTargetArch = z.infer<typeof ScoutTargetArchSchema>;
export type ScoutTargetDomain = z.infer<typeof ScoutTargetDomainSchema>;
export interface ScoutTargetDefinition {
    locations: ScoutTargetLocation[];
    architectures: ScoutTargetArch[];
}
export declare class ScoutTestTarget {
    static tagPattern: RegExp;
    location: ScoutTargetLocation;
    arch: ScoutTargetArch;
    domain: ScoutTargetDomain;
    constructor(location: string | ScoutTargetLocation, arch: string | ScoutTargetArch, domain: string | ScoutTargetDomain);
    get tagWithoutLocation(): string;
    get tag(): string;
    get playwrightTag(): string;
    static fromTag(tag: string): ScoutTestTarget;
    static fromPlaywrightTag(playwrightTag: string): ScoutTestTarget;
    static fromEnv(): ScoutTestTarget;
    /**
     * Like fromEnv() but suppresses errors and returns undefined when Scout target env vars are missing or invalid.
     */
    static tryFromEnv(): ScoutTestTarget | undefined;
}
export declare const VALID_SCOUT_TEST_TARGET_DEFINITIONS: [ScoutTargetDomain, ScoutTargetDefinition][];
export declare const testTargets: {
    readonly all: ScoutTestTarget[];
    forLocation(location: ScoutTargetLocation): ScoutTestTarget[];
    readonly local: ScoutTestTarget[];
    readonly cloud: ScoutTestTarget[];
};
