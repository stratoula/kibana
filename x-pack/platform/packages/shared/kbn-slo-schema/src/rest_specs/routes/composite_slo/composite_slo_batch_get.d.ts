import * as t from 'io-ts';
declare const batchGetCompositeSLOParamsSchema: t.TypeC<{
    body: t.TypeC<{
        ids: t.ArrayC<t.Type<string, string, unknown>>;
    }>;
}>;
declare const batchGetCompositeSLOResponseSchema: t.ArrayC<t.IntersectionC<[t.TypeC<{
    id: t.Type<string, string, unknown>;
    name: t.StringC;
    description: t.StringC;
    compositeMethod: t.LiteralC<"weightedAverage">;
    timeWindow: t.TypeC<{
        duration: t.Type<import("../../../models").Duration, string, unknown>;
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
    summary: t.TypeC<{
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
    members: t.ArrayC<t.IntersectionC<[t.TypeC<{
        id: t.StringC;
        name: t.StringC;
        weight: t.NumberC;
        normalisedWeight: t.NumberC;
        sliValue: t.NumberC;
        contribution: t.NumberC;
        status: t.UnionC<[t.LiteralC<"NO_DATA">, t.LiteralC<"HEALTHY">, t.LiteralC<"DEGRADING">, t.LiteralC<"VIOLATED">]>;
    }>, t.PartialC<{
        instanceId: t.StringC;
    }>]>>;
}>]>>;
type BatchGetCompositeSLOParams = t.TypeOf<typeof batchGetCompositeSLOParamsSchema.props.body>;
type BatchGetCompositeSLOResponse = t.OutputOf<typeof batchGetCompositeSLOResponseSchema>;
export { batchGetCompositeSLOParamsSchema, batchGetCompositeSLOResponseSchema };
export type { BatchGetCompositeSLOParams, BatchGetCompositeSLOResponse };
