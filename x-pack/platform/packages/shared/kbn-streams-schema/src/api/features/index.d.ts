import type { ChatCompletionTokenCount } from '@kbn/inference-common';
import type { BaseFeature } from '../../feature';
export interface IterationResult {
    iteration: number;
    durationMs: number;
    state: 'success' | 'failure';
    tokensUsed: ChatCompletionTokenCount;
    newFeatures: Array<{
        id: string;
        title: string;
    }>;
    updatedFeatures: Array<{
        id: string;
        title: string;
    }>;
}
export interface IdentifyFeaturesResult {
    features: BaseFeature[];
    durationMs: number;
    iterations?: IterationResult[];
    totalTokensUsed?: ChatCompletionTokenCount;
}
