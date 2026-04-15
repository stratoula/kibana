import type { IHttpFetchError, ResponseErrorBody } from '@kbn/core/public';
import type { ResourceType } from '@kbn/product-doc-common';
import type { PerformInstallResponse } from '../../common/http_api/installation';
import type { ProductDocBasePluginStart } from '../types';
type ServerError = IHttpFetchError<ResponseErrorBody>;
export interface UseInstallProductDocOptions {
    /** Callback fired on successful installation */
    onSuccess?: () => void;
    /** Callback fired on installation error */
    onError?: (error: ServerError) => void;
}
/**
 * Hook to install product documentation.
 * Automatically invalidates the status query on success.
 */
export declare function useInstallProductDoc(productDocBase: ProductDocBasePluginStart, options?: UseInstallProductDocOptions): import("@kbn/react-query").UseMutationResult<PerformInstallResponse, ServerError, string | {
    inferenceId?: string;
    resourceType?: ResourceType;
} | undefined, unknown>;
export {};
