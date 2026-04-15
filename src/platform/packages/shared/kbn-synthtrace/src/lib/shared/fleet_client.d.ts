import type { Logger } from '../utils/create_logger';
import type { KibanaClient } from './base_kibana_client';
export declare class FleetClient {
    private readonly kibanaClient;
    private readonly logger;
    constructor(kibanaClient: KibanaClient, logger: Logger);
    getFleetPackagePath(packageName: string, packageVersion?: string): string;
    fetchLatestPackageVersion(packageName: string): Promise<string>;
    installPackage(packageName: string, packageVersion?: string): Promise<{
        version: string;
    }>;
    uninstallPackage(packageName: string): Promise<void>;
}
