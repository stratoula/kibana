import type { HttpSetup, IToasts } from '@kbn/core/public';
import type { ConversationCreateProps, ConversationUpdateProps } from '@kbn/elastic-assistant-common';
import type { Conversation } from '../../../assistant_context/types';
export interface BulkActionSummary {
    failed: number;
    skipped: number;
    succeeded: number;
    total: number;
}
export interface BulkActionResult {
    updated: Conversation[];
    created: Conversation[];
    deleted: Conversation[];
    skipped: Conversation[];
}
export interface BulkActionAggregatedError {
    message: string;
    status_code: number;
    err_code?: string;
    conversations: Array<{
        id: string;
        name?: string;
    }>;
}
export interface BulkActionAttributes {
    summary: BulkActionSummary;
    results: BulkActionResult;
    errors?: BulkActionAggregatedError[];
}
export interface BulkActionResponse {
    success?: boolean;
    conversations_count?: number;
    message?: string;
    statusCode?: number;
    attributes: BulkActionAttributes;
}
export interface ConversationsBulkActions {
    update?: Record<string, ConversationUpdateProps>;
    create?: Record<string, ConversationCreateProps>;
    delete?: {
        ids: string[];
    };
}
export declare const bulkUpdateConversations: (http: HttpSetup, conversationsActions: ConversationsBulkActions, toasts?: IToasts) => Promise<BulkActionResponse | undefined>;
