import type { IHttpFetchError, ResponseErrorBody } from '@kbn/core/public';
import type { ResourceType } from '@kbn/product-doc-common';
import type { UninstallResponse } from '../../common/http_api/installation';
import type { ProductDocBasePluginStart } from '../types';
type ServerError = IHttpFetchError<ResponseErrorBody>;
export interface UseUninstallProductDocOptions {
    /** Callback fired on successful uninstallation */
    onSuccess?: () => void;
    /** Callback fired on uninstallation error */
    onError?: (error: ServerError) => void;
}
/**
 * Hook to uninstall product documentation.
 * Automatically invalidates the status query on success.
 */
export declare function useUninstallProductDoc(productDocBase: ProductDocBasePluginStart, options?: UseUninstallProductDocOptions): import("@kbn/react-query").UseMutationResult<UninstallResponse, ServerError, string | {
    inferenceId?: string;
    resourceType?: ResourceType;
} | undefined, unknown>;
export {};
