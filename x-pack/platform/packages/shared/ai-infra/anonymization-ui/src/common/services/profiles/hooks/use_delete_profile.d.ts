import type { UseProfilesParams } from './types';
export declare const useDeleteProfile: ({ client, context }: UseProfilesParams) => import("@kbn/react-query").UseMutationResult<{
    deleted: boolean;
}, unknown, string, unknown>;
