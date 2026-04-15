import type { InstallationAPI } from './services/installation';
export interface PublicPluginConfig {
}
export interface PluginSetupDependencies {
}
export interface PluginStartDependencies {
}
export interface ProductDocBasePluginSetup {
}
export interface ProductDocBasePluginStart {
    installation: InstallationAPI;
}
