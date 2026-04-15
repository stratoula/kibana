import type { HttpSetup, IToasts } from '@kbn/core/public';
import type { PerformPromptsBulkActionRequestBody, PerformPromptsBulkActionResponse } from '@kbn/elastic-assistant-common/impl/schemas';
export declare const bulkUpdatePrompts: (http: HttpSetup, prompts: PerformPromptsBulkActionRequestBody, toasts?: IToasts) => Promise<PerformPromptsBulkActionResponse | {
    success: false;
}>;
