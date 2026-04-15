import type { UseGetReplacementsParams } from './types';
export declare const useGetReplacements: ({ client, replacementsId, enabled, }: UseGetReplacementsParams) => import("@kbn/react-query").UseQueryResult<{
    id: string;
    namespace: string;
    replacements: {
        anonymized: string;
        original: string;
    }[];
} | undefined, unknown>;
