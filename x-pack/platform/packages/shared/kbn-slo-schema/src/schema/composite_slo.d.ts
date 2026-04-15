import * as t from 'io-ts';
declare const compositeSloMemberSchema: t.IntersectionC<[t.TypeC<{
    sloId: t.Type<string, string, unknown>;
    weight: t.NumberC;
}>, t.PartialC<{
    instanceId: t.StringC;
}>]>;
declare const compositeMethodSchema: t.LiteralC<"weightedAverage">;
declare const compositeSloBaseDefinitionSchema: t.TypeC<{
    id: t.Type<string, string, unknown>;
    name: t.StringC;
    description: t.StringC;
    compositeMethod: t.LiteralC<"weightedAverage">;
    timeWindow: t.TypeC<{
        duration: t.Type<import("../models").Duration, string, unknown>;
        type: t.LiteralC<"rolling">;
    }>;
    budgetingMethod: t.LiteralC<"occurrences">;
    objective: t.TypeC<{
        target: t.NumberC;
    }>;
    tags: t.ArrayC<t.StringC>;
    enabled: t.BooleanC;
    createdAt: t.Type<Date, string, unknown>;
    updatedAt: t.Type<Date, string, unknown>;
    createdBy: t.StringC;
    updatedBy: t.StringC;
    version: t.NumberC;
}>;
declare const compositeSloDefinitionSchema: t.IntersectionC<[t.TypeC<{
    id: t.Type<string, string, unknown>;
    name: t.StringC;
    description: t.StringC;
    compositeMethod: t.LiteralC<"weightedAverage">;
    timeWindow: t.TypeC<{
        duration: t.Type<import("../models").Duration, string, unknown>;
        type: t.LiteralC<"rolling">;
    }>;
    budgetingMethod: t.LiteralC<"occurrences">;
    objective: t.TypeC<{
        target: t.NumberC;
    }>;
    tags: t.ArrayC<t.StringC>;
    enabled: t.BooleanC;
    createdAt: t.Type<Date, string, unknown>;
    updatedAt: t.Type<Date, string, unknown>;
    createdBy: t.StringC;
    updatedBy: t.StringC;
    version: t.NumberC;
}>, t.TypeC<{
    members: t.ArrayC<t.IntersectionC<[t.TypeC<{
        sloId: t.Type<string, string, unknown>;
        weight: t.NumberC;
    }>, t.PartialC<{
        instanceId: t.StringC;
    }>]>>;
}>]>;
declare const storedCompositeSloDefinitionSchema: t.IntersectionC<[t.TypeC<{
    id: t.Type<string, string, unknown>;
    name: t.StringC;
    description: t.StringC;
    compositeMethod: t.LiteralC<"weightedAverage">;
    timeWindow: t.TypeC<{
        duration: t.Type<import("../models").Duration, string, unknown>;
        type: t.LiteralC<"rolling">;
    }>;
    budgetingMethod: t.LiteralC<"occurrences">;
    objective: t.TypeC<{
        target: t.NumberC;
    }>;
    tags: t.ArrayC<t.StringC>;
    enabled: t.BooleanC;
    createdAt: t.Type<Date, string, unknown>;
    updatedAt: t.Type<Date, string, unknown>;
    createdBy: t.StringC;
    updatedBy: t.StringC;
    version: t.NumberC;
}>, t.TypeC<{
    members: t.ArrayC<t.IntersectionC<[t.TypeC<{
        sloId: t.Type<string, string, unknown>;
        weight: t.NumberC;
    }>, t.PartialC<{
        instanceId: t.StringC;
    }>]>>;
}>]>;
declare const compositeSloMemberSummarySchema: t.IntersectionC<[t.TypeC<{
    id: t.StringC;
    name: t.StringC;
    weight: t.NumberC;
    normalisedWeight: t.NumberC;
    sliValue: t.NumberC;
    contribution: t.NumberC;
    status: t.UnionC<[t.LiteralC<"NO_DATA">, t.LiteralC<"HEALTHY">, t.LiteralC<"DEGRADING">, t.LiteralC<"VIOLATED">]>;
}>, t.PartialC<{
    instanceId: t.StringC;
}>]>;
declare const compositeSloSummarySchema: t.TypeC<{
    sliValue: t.NumberC;
    errorBudget: t.TypeC<{
        initial: t.NumberC;
        consumed: t.NumberC;
        remaining: t.NumberC;
        isEstimated: t.BooleanC;
    }>;
    status: t.UnionC<[t.LiteralC<"NO_DATA">, t.LiteralC<"HEALTHY">, t.LiteralC<"DEGRADING">, t.LiteralC<"VIOLATED">]>;
    fiveMinuteBurnRate: t.NumberC;
    oneHourBurnRate: t.NumberC;
    oneDayBurnRate: t.NumberC;
}>;
export type CompositeSLOMember = t.TypeOf<typeof compositeSloMemberSchema>;
export type CompositeMethod = t.TypeOf<typeof compositeMethodSchema>;
export type CompositeSLOMemberSummary = t.TypeOf<typeof compositeSloMemberSummarySchema>;
export type CompositeSLOSummary = t.TypeOf<typeof compositeSloSummarySchema>;
export { compositeSloMemberSchema, compositeMethodSchema, compositeSloBaseDefinitionSchema, compositeSloDefinitionSchema, storedCompositeSloDefinitionSchema, compositeSloMemberSummarySchema, compositeSloSummarySchema, };
