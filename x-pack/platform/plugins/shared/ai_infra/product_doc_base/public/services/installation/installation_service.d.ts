import type { HttpSetup } from '@kbn/core-http-browser';
import type { InstallationStatusResponse, SecurityLabsInstallStatusResponse, PerformInstallResponse, PerformUpdateResponse, UninstallResponse, ProductDocInstallParams } from '../../../common/http_api/installation';
export declare class InstallationService {
    private readonly http;
    constructor({ http }: {
        http: HttpSetup;
    });
    getInstallationStatus(params: ProductDocInstallParams): Promise<InstallationStatusResponse | SecurityLabsInstallStatusResponse>;
    install(params: ProductDocInstallParams): Promise<PerformInstallResponse>;
    uninstall(params: ProductDocInstallParams): Promise<UninstallResponse>;
    /**
     * Update all product documentation to the latest version.
     *
     * @param forceUpdate - If true, the docs with the same version majorMinor version will be forced to updated regardless
     * @param inferenceIds - If provided, only the product docs for the given inference IDs will be updated. If not, all previously installed inference IDs will be updated.
     * @returns
     */
    updateAll(params?: {
        forceUpdate?: boolean;
        inferenceIds?: string[];
    }): Promise<PerformUpdateResponse>;
}
