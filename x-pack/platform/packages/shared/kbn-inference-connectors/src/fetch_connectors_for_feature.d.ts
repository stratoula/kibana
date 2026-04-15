import type { HttpSetup } from '@kbn/core-http-browser';
import type { InferenceConnector } from '@kbn/inference-common';
export interface FetchConnectorsForFeatureResult {
    connectors: InferenceConnector[];
    soEntryFound: boolean;
}
export declare const fetchConnectorsForFeature: (http: HttpSetup, featureId: string) => Promise<FetchConnectorsForFeatureResult>;
