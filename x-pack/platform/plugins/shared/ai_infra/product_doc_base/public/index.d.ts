import type { PluginInitializer } from '@kbn/core/public';
import type { ProductDocBasePluginSetup, ProductDocBasePluginStart, PluginSetupDependencies, PluginStartDependencies } from './types';
export type { ProductDocBasePluginSetup, ProductDocBasePluginStart };
export { useProductDocStatus, useInstallProductDoc, useUninstallProductDoc, REACT_QUERY_KEYS, type UseProductDocStatusOptions, type UseInstallProductDocOptions, type UseUninstallProductDocOptions, } from './hooks';
export declare const plugin: PluginInitializer<ProductDocBasePluginSetup, ProductDocBasePluginStart, PluginSetupDependencies, PluginStartDependencies>;
