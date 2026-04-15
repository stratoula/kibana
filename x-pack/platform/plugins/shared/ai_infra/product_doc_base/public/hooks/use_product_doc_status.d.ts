import type { ResourceType } from '@kbn/product-doc-common';
import type { InstallationStatusResponse, SecurityLabsInstallStatusResponse } from '../../common/http_api/installation';
import type { ProductDocBasePluginStart } from '../types';
export interface UseProductDocStatusOptions {
    /** The inference ID to check status for. Defaults to ELSER. */
    inferenceId?: string;
    /** The resource type to check status for. Defaults to product docs. */
    resourceType?: ResourceType;
}
/**
 * Hook to fetch the installation status of product documentation.
 * Automatically polls when installation or uninstallation is in progress.
 */
export declare function useProductDocStatus(productDocBase: ProductDocBasePluginStart, options?: UseProductDocStatusOptions): {
    status: InstallationStatusResponse | SecurityLabsInstallStatusResponse | undefined;
    refetch: <TPageData>(options?: (import("@kbn/react-query").RefetchOptions & import("@kbn/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@kbn/react-query").QueryObserverResult<InstallationStatusResponse | SecurityLabsInstallStatusResponse, unknown>>;
    isLoading: boolean;
    isRefetching: boolean;
    isSuccess: boolean;
    isError: boolean;
};
