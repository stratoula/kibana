import * as t from 'io-ts';
declare const updateCompositeSLOParamsSchema: t.TypeC<{
    path: t.TypeC<{
        id: t.Type<string, string, unknown>;
    }>;
    body: t.PartialC<{
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
        tags: t.ArrayC<t.StringC>;
        enabled: t.BooleanC;
    }>;
}>;
declare const updateCompositeSLOResponseSchema: t.IntersectionC<[t.TypeC<{
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
type UpdateCompositeSLOInput = t.OutputOf<typeof updateCompositeSLOParamsSchema.props.body>;
type UpdateCompositeSLOParams = t.TypeOf<typeof updateCompositeSLOParamsSchema.props.body>;
type UpdateCompositeSLOResponse = t.OutputOf<typeof updateCompositeSLOResponseSchema>;
export { updateCompositeSLOParamsSchema, updateCompositeSLOResponseSchema };
export type { UpdateCompositeSLOInput, UpdateCompositeSLOParams, UpdateCompositeSLOResponse };
