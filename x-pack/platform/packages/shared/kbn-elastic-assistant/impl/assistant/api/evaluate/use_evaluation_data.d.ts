import type { HttpSetup, IHttpFetchError, ResponseErrorBody } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
export interface UseEvaluationDataParams {
    http: HttpSetup;
    toasts?: IToasts;
}
/**
 * Hook for fetching evaluation data, like available agents, test data, etc
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns {useMutation} mutation hook for setting up the Knowledge Base
 */
export declare const useEvaluationData: ({ http, toasts }: UseEvaluationDataParams) => import("@kbn/react-query").UseQueryResult<IHttpFetchError<unknown> | {
    datasets: string[];
    graphs: string[];
    results: {
        id: string;
        status: string;
    }[];
}, IHttpFetchError<ResponseErrorBody>>;
