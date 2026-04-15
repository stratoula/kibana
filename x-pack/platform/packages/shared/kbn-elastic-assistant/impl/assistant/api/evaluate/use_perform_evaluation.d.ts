import type { HttpSetup, IHttpFetchError } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
export interface UsePerformEvaluationParams {
    http: HttpSetup;
    toasts?: IToasts;
}
export interface ResponseError {
    statusCode: number;
    success: boolean;
    message: {
        error: string;
    };
}
/**
 * Hook for performing model evaluations
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {IToasts} [options.toasts] - IToasts
 *
 * @returns {useMutation} mutation hook for setting up the Knowledge Base
 */
export declare const usePerformEvaluation: ({ http, toasts }: UsePerformEvaluationParams) => import("@kbn/react-query").UseMutationResult<{
    evaluationId: string;
    success: boolean;
}, IHttpFetchError<ResponseError>, {
    graphs: string[];
    datasetName: string;
    connectorIds: string[];
    evaluatorConnectorId?: string | undefined;
    runName?: string | undefined;
    alertsIndexPattern?: string | undefined;
    langSmithApiKey?: string | undefined;
    langSmithProject?: string | undefined;
    replacements?: {
        [x: string]: string;
    } | undefined;
    screenContext?: {
        timeZone?: string | undefined;
    } | undefined;
    size?: number | undefined;
}, unknown>;
