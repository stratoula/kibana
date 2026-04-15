import { z } from '@kbn/zod/v4';
export type CreateEvaluationDatasetRequestBody = z.infer<typeof CreateEvaluationDatasetRequestBody>;
export declare const CreateEvaluationDatasetRequestBody: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
}, z.core.$strip>;
export type CreateEvaluationDatasetRequestBodyInput = z.input<typeof CreateEvaluationDatasetRequestBody>;
export type CreateEvaluationDatasetResponse = z.infer<typeof CreateEvaluationDatasetResponse>;
export declare const CreateEvaluationDatasetResponse: z.ZodObject<{
    dataset_id: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
