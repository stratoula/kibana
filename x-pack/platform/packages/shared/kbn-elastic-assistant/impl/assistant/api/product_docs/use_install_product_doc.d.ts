import type { IHttpFetchError, ResponseErrorBody } from '@kbn/core/public';
import type { PerformInstallResponse } from '@kbn/product-doc-base-plugin/common/http_api/installation';
type ServerError = IHttpFetchError<ResponseErrorBody>;
export declare function useInstallProductDoc(): import("@kbn/react-query").UseMutationResult<PerformInstallResponse, ServerError, string, unknown>;
export {};
