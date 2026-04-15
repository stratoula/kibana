import * as t from 'io-ts';
declare const fetchCompositeHistoricalSummaryParamsSchema: t.TypeC<{
    body: t.TypeC<{
        list: t.ArrayC<t.Type<string, string, unknown>>;
    }>;
}>;
declare const fetchCompositeHistoricalSummaryResponseSchema: t.ArrayC<t.TypeC<{
    compositeId: t.Type<string, string, unknown>;
    data: t.ArrayC<t.TypeC<{
        date: t.Type<Date, string, unknown>;
        status: t.UnionC<[t.LiteralC<"NO_DATA">, t.LiteralC<"HEALTHY">, t.LiteralC<"DEGRADING">, t.LiteralC<"VIOLATED">]>;
        sliValue: t.NumberC;
        errorBudget: t.TypeC<{
            initial: t.NumberC;
            consumed: t.NumberC;
            remaining: t.NumberC;
            isEstimated: t.BooleanC;
        }>;
    }>>;
}>>;
type FetchCompositeHistoricalSummaryParams = t.TypeOf<typeof fetchCompositeHistoricalSummaryParamsSchema.props.body>;
type FetchCompositeHistoricalSummaryResponse = t.OutputOf<typeof fetchCompositeHistoricalSummaryResponseSchema>;
export { fetchCompositeHistoricalSummaryParamsSchema, fetchCompositeHistoricalSummaryResponseSchema, };
export type { FetchCompositeHistoricalSummaryParams, FetchCompositeHistoricalSummaryResponse };
