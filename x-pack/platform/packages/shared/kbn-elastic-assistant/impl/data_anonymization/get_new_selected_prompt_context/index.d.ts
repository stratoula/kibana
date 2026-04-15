import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common/impl/schemas';
import type { PromptContext, SelectedPromptContext } from '../../assistant/prompt_context/types';
export declare function getNewSelectedPromptContext({ anonymizationFields, promptContext, }: {
    anonymizationFields?: FindAnonymizationFieldsResponse;
    promptContext: PromptContext;
}): Promise<SelectedPromptContext>;
