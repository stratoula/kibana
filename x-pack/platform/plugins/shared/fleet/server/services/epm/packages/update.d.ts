import type { SavedObjectsClientContract } from '@kbn/core/server';
import type { TypeOf } from '@kbn/config-schema';
import type { ExperimentalIndexingFeature } from '../../../../common/types';
import type { UpdatePackageRequestSchema } from '../../../types';
export declare function updatePackage(options: {
    savedObjectsClient: SavedObjectsClientContract;
    pkgName: string;
    keepPoliciesUpToDate?: boolean;
} & TypeOf<typeof UpdatePackageRequestSchema.body>): Promise<import("../../../types").PackageInfo>;
export declare function reviewUpgrade(options: {
    savedObjectsClient: SavedObjectsClientContract;
    pkgName: string;
    action: 'accept' | 'decline' | 'pending';
    targetVersion: string;
}): Promise<void>;
export declare function updateDatastreamExperimentalFeatures(savedObjectsClient: SavedObjectsClientContract, pkgName: string, dataStreamFeatureMapping: Array<{
    data_stream: string;
    features: Partial<Record<ExperimentalIndexingFeature, boolean>>;
}>): Promise<void>;
