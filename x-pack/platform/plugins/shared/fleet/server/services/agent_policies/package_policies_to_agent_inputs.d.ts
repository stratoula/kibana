import type { SavedObjectsClientContract } from '@kbn/core/server';
import type { FullAgentPolicyAddFields, GlobalDataTag } from '../../../common/types';
import type { PackagePolicy, FullAgentPolicyInput, FullAgentPolicyInputStream, PackageInfo, PackagePolicyInput, NewPackagePolicyInput } from '../../types';
export declare function getInputId(input: NewPackagePolicyInput, packagePolicyId?: string, packageInfo?: PackageInfo): string;
export declare const storedPackagePolicyToAgentInputs: (packagePolicy: PackagePolicy, packageInfo?: PackageInfo, agentPolicyOutputId?: string, agentPolicyNamespace?: string, addFields?: FullAgentPolicyAddFields) => FullAgentPolicyInput[];
export declare const mergeInputsOverrides: (packagePolicy: PackagePolicy, fullInput: FullAgentPolicyInput) => FullAgentPolicyInput;
export declare const getFullInputStreams: (input: PackagePolicyInput, allStreamEnabled?: boolean, streamsOriginalIdsMap?: Map<string, string>) => FullAgentPolicyInputStream;
export declare const recompileInputsWithAgentVersion: (packageInfo: PackageInfo, packagePolicy: PackagePolicy, agentVersion: string, soClient: SavedObjectsClientContract) => Promise<PackagePolicyInput[]>;
export declare const storedPackagePoliciesToAgentInputs: (packagePolicies: PackagePolicy[], packageInfoCache: Map<string, PackageInfo>, agentPolicyOutputId?: string, agentPolicyNamespace?: string, globalDataTags?: GlobalDataTag[], agentVersion?: string, soClient?: SavedObjectsClientContract, hasAgentVersionConditions?: boolean) => Promise<FullAgentPolicyInput[]>;
