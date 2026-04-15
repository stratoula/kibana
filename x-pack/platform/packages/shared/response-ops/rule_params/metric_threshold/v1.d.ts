export declare const metricThresholdRuleParamsSchema: import("@kbn/config-schema").ObjectType<{
    criteria: import("@kbn/config-schema").Type<(Readonly<{
        warningThreshold?: number[] | undefined;
        warningComparator?: string | undefined;
    } & {
        label: never;
        metric: never;
        aggType: "count";
        threshold: number[];
        equation: never;
        comparator: string;
        timeUnit: string;
        timeSize: number;
        customMetrics: never;
    }> | Readonly<{
        warningThreshold?: number[] | undefined;
        warningComparator?: string | undefined;
    } & {
        label: never;
        metric: string;
        aggType: string;
        threshold: number[];
        equation: never;
        comparator: string;
        timeUnit: string;
        timeSize: number;
        customMetrics: never;
    }> | Readonly<{
        label?: string | undefined;
        equation?: string | undefined;
        warningThreshold?: number[] | undefined;
        warningComparator?: string | undefined;
    } & {
        metric: never;
        aggType: "custom";
        threshold: number[];
        comparator: string;
        timeUnit: string;
        timeSize: number;
        customMetrics: (Readonly<{} & {
            filter: never;
            name: string;
            field: string;
            aggType: string;
        }> | Readonly<{
            filter?: string | undefined;
        } & {
            name: string;
            field: never;
            aggType: "count";
        }>)[];
    }>)[]>;
    groupBy: import("@kbn/config-schema").Type<string | string[] | undefined>;
    filterQuery: import("@kbn/config-schema").Type<string | undefined>;
    sourceId: import("@kbn/config-schema").Type<string>;
    alertOnNoData: import("@kbn/config-schema").Type<boolean | undefined>;
    alertOnGroupDisappear: import("@kbn/config-schema").Type<boolean | undefined>;
}>;
