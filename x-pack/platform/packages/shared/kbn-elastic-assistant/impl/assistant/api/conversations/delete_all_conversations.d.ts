import type { HttpSetup, IToasts } from '@kbn/core/public';
export declare const deleteAllConversations: ({ http, signal, toasts, excludedIds, }: {
    http: HttpSetup;
    toasts?: IToasts;
    signal?: AbortSignal | undefined;
    excludedIds?: string[];
}) => Promise<{
    success?: boolean | undefined;
    totalDeleted?: number | undefined;
    failures?: string[] | undefined;
} | undefined>;
