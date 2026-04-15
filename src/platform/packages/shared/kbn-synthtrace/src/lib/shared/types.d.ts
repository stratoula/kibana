export interface PackageManagement {
    initializePackage(opts?: {
        version?: string;
        skipInstallation?: boolean;
    }): Promise<string>;
    uninstallPackage(): Promise<void>;
}
