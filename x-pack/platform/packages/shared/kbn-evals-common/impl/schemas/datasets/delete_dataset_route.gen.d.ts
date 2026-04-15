import { z } from '@kbn/zod/v4';
export type DeleteEvaluationDatasetRequestParams = z.infer<typeof DeleteEvaluationDatasetRequestParams>;
export declare const DeleteEvaluationDatasetRequestParams: z.ZodObject<{
    datasetId: z.ZodString;
}, z.core.$strip>;
export type DeleteEvaluationDatasetRequestParamsInput = z.input<typeof DeleteEvaluationDatasetRequestParams>;
export type DeleteEvaluationDatasetResponse = z.infer<typeof DeleteEvaluationDatasetResponse>;
export declare const DeleteEvaluationDatasetResponse: z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>;
