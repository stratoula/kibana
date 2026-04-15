import type { InlineDeanonymizationEntry, TokenToOriginalMap } from '../types/replacements';
import type { AnonymizationReplacementsClient } from '../services/replacements/client';
interface UseResolveAnonymizedValuesParams {
    client: AnonymizationReplacementsClient;
    replacementsId?: string;
    inlineDeanonymizations?: InlineDeanonymizationEntry[];
    enabled?: boolean;
}
export interface ResolveAnonymizedValuesResult {
    tokenToOriginalMap: TokenToOriginalMap;
    resolveText: (value: string) => string;
    isLoading: boolean;
    error?: Error;
}
export declare const useResolveAnonymizedValues: ({ client, replacementsId, inlineDeanonymizations, enabled, }: UseResolveAnonymizedValuesParams) => ResolveAnonymizedValuesResult;
export {};
