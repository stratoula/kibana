import type { PluginInitializer } from '@kbn/core/public';
import type { AgentBuilderPluginSetup, AgentBuilderPluginStart, AgentBuilderSetupDependencies, AgentBuilderStartDependencies } from './types';
import { AGENTBUILDER_FEATURE_ID, uiPrivileges } from '../common/features';
export type { AgentBuilderPluginSetup, AgentBuilderPluginStart };
export { AGENTBUILDER_FEATURE_ID, uiPrivileges };
export declare const plugin: PluginInitializer<AgentBuilderPluginSetup, AgentBuilderPluginStart, AgentBuilderSetupDependencies, AgentBuilderStartDependencies>;
