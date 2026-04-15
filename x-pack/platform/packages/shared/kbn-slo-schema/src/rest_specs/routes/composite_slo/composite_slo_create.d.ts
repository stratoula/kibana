import * as t from 'io-ts';
declare const createCompositeSLOParamsSchema: t.TypeC<{
    body: t.IntersectionC<[t.TypeC<{
        name: t.StringC;
        description: t.StringC;
        members: t.ArrayC<t.IntersectionC<[t.TypeC<{
            sloId: t.Type<string, string, unknown>;
            weight: t.NumberC;
        }>, t.PartialC<{
            instanceId: t.StringC;
        }>]>>;
        compositeMethod: t.LiteralC<"weightedAverage">;
        timeWindow: t.TypeC<{
            duration: t.Type<import("../../../models").Duration, string, unknown>;
            type: t.LiteralC<"rolling">;
        }>;
        budgetingMethod: t.LiteralC<"occurrences">;
        objective: t.TypeC<{
            target: t.NumberC;
        }>;
    }>, t.PartialC<{
        id: t.Type<string, string, unknown>;
        tags: t.ArrayC<t.StringC>;
        enabled: t.BooleanC;
    }>]>;
}>;
declare const createCompositeSLOResponseSchema: t.IntersectionC<[t.TypeC<{
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
    members: t.ArrayC<t.IntersectionC<[t.TypeC<{
        sloId: t.Type<string, string, unknown>;
        weight: t.NumberC;
    }>, t.PartialC<{
        instanceId: t.StringC;
    }>]>>;
}>]>;
type CreateCompositeSLOInput = t.OutputOf<typeof createCompositeSLOParamsSchema.props.body>;
type CreateCompositeSLOParams = t.TypeOf<typeof createCompositeSLOParamsSchema.props.body>;
type CreateCompositeSLOResponse = t.OutputOf<typeof createCompositeSLOResponseSchema>;
export { createCompositeSLOParamsSchema, createCompositeSLOResponseSchema };
export type { CreateCompositeSLOInput, CreateCompositeSLOParams, CreateCompositeSLOResponse };
