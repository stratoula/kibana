import type { PackagePolicy } from '../../types';
export declare function validatePolicyNamespaceForSpace({ namespace, spaceId, }: {
    namespace: string;
    spaceId?: string;
}): Promise<void>;
export declare function validateAdditionalDatastreamsPermissionsForSpace({ additionalDatastreamsPermissions, spaceId, }: {
    additionalDatastreamsPermissions?: string[];
    spaceId?: string;
}): Promise<void>;
export declare function validatePackagePoliciesUniqueNameAcrossSpaces(packagePolicies: PackagePolicy[], newSpaceIds?: string[]): Promise<void>;
