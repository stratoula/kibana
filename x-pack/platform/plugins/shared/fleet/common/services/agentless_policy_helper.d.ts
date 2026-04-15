import type { NewPackagePolicyInput, PackageInfo, RegistryPolicyTemplate } from '../types';
export interface RegistryInputForDeploymentMode {
    type: string;
    policy_template?: string;
    deployment_modes?: string[];
}
export declare const isAgentlessIntegration: (packageInfo: Pick<PackageInfo, "policy_templates"> | undefined, integrationToEnable?: string) => boolean;
export declare const getAgentlessAgentPolicyNameFromPackagePolicyName: (packagePolicyName: string) => string;
export declare const isOnlyAgentlessIntegration: (packageInfo?: Pick<PackageInfo, "policy_templates">, integrationToEnable?: string) => boolean;
export declare const isOnlyAgentlessPolicyTemplate: (policyTemplate: RegistryPolicyTemplate) => boolean;
export declare function isInputAllowedForDeploymentMode(input: Pick<NewPackagePolicyInput, 'type' | 'policy_template'>, deploymentMode: 'default' | 'agentless', packageInfo?: PackageInfo): boolean;
export declare function validateDeploymentModesForInputs(inputs: Array<Pick<NewPackagePolicyInput, 'type' | 'enabled' | 'policy_template'>>, deploymentMode: 'default' | 'agentless', packageInfo?: PackageInfo): void;
/**
 * Derive global data tags for agentless agent policies from package agentless info.
 */
export declare const getAgentlessGlobalDataTags: (packageInfo?: PackageInfo) => {
    name: string;
    value: string;
}[] | undefined;
