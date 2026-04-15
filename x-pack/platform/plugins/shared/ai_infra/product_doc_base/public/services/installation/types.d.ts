import type { InstallationStatusResponse, SecurityLabsInstallStatusResponse, PerformInstallResponse, UninstallResponse, ProductDocInstallParams } from '../../../common/http_api/installation';
export interface InstallationAPI {
    getStatus(params: ProductDocInstallParams): Promise<InstallationStatusResponse | SecurityLabsInstallStatusResponse>;
    install(params: ProductDocInstallParams): Promise<PerformInstallResponse>;
    uninstall(params: ProductDocInstallParams): Promise<UninstallResponse>;
}
