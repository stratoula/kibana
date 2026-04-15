import * as t from 'io-ts';
declare const findCompositeSLOParamsSchema: t.PartialC<{
    query: t.PartialC<{
        search: t.StringC;
        page: t.StringC;
        perPage: t.StringC;
        sortBy: t.UnionC<[t.LiteralC<"name">, t.LiteralC<"createdAt">, t.LiteralC<"updatedAt">]>;
        sortDirection: t.UnionC<[t.LiteralC<"asc">, t.LiteralC<"desc">]>;
        tags: t.StringC;
        status: t.StringC;
    }>;
}>;
declare const findCompositeSLOResponseSchema: t.TypeC<{
    page: t.NumberC;
    perPage: t.NumberC;
    total: t.NumberC;
    results: t.ArrayC<t.IntersectionC<[t.TypeC<{
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
    }>]>>;
}>;
type FindCompositeSLOParams = t.TypeOf<typeof findCompositeSLOParamsSchema.props.query>;
type FindCompositeSLOResponse = t.OutputOf<typeof findCompositeSLOResponseSchema>;
export { findCompositeSLOParamsSchema, findCompositeSLOResponseSchema };
export type { FindCompositeSLOParams, FindCompositeSLOResponse };
