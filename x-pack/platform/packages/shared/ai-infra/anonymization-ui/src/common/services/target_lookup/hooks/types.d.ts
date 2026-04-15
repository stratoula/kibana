import type { TargetType } from '../../../types/profiles';
import type { ExpandWildcardsMode, TargetLookupClient } from '../client';
export interface UseTargetLookupParams {
    client: TargetLookupClient;
    enabled?: boolean;
}
export interface UseResolveIndexParams extends UseTargetLookupParams {
    query: string;
    targetType: TargetType;
    expandWildcards: ExpandWildcardsMode;
    enabled?: boolean;
}
