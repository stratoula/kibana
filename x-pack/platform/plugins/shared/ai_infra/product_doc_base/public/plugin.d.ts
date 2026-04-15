import type { CoreSetup, CoreStart, Plugin, PluginInitializerContext } from '@kbn/core/public';
import type { Logger } from '@kbn/logging';
import type { PublicPluginConfig, ProductDocBasePluginSetup, ProductDocBasePluginStart, PluginSetupDependencies, PluginStartDependencies } from './types';
export declare class ProductDocBasePlugin implements Plugin<ProductDocBasePluginSetup, ProductDocBasePluginStart, PluginSetupDependencies, PluginStartDependencies> {
    logger: Logger;
    constructor(context: PluginInitializerContext<PublicPluginConfig>);
    setup(coreSetup: CoreSetup<PluginStartDependencies, ProductDocBasePluginStart>, pluginsSetup: PluginSetupDependencies): ProductDocBasePluginSetup;
    start(coreStart: CoreStart, pluginsStart: PluginStartDependencies): ProductDocBasePluginStart;
}
