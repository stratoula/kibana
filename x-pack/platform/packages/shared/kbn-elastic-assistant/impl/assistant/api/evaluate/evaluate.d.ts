import type { HttpSetup, IHttpFetchError } from '@kbn/core-http-browser';
import type { GetEvaluateResponse, PostEvaluateRequestBodyInput, PostEvaluateResponse } from '@kbn/elastic-assistant-common';
export interface PostEvaluationParams {
    http: HttpSetup;
    evalParams: PostEvaluateRequestBodyInput;
    signal?: AbortSignal | undefined;
}
/**
 * API call for evaluating models.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {string} [options.evalParams] - Params necessary for evaluation
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {Promise<PostEvaluateResponse | IHttpFetchError>}
 */
export declare const postEvaluation: ({ http, evalParams, signal, }: PostEvaluationParams) => Promise<PostEvaluateResponse>;
export interface GetEvaluationParams {
    http: HttpSetup;
    signal?: AbortSignal | undefined;
}
/**
 * API call for fetching evaluation data.
 *
 * @param {Object} options - The options object.
 * @param {HttpSetup} options.http - HttpSetup
 * @param {AbortSignal} [options.signal] - AbortSignal
 *
 * @returns {Promise<GetEvaluateResponse | IHttpFetchError>}
 */
export declare const getEvaluation: ({ http, signal, }: GetEvaluationParams) => Promise<GetEvaluateResponse | IHttpFetchError>;
