import type { InferenceAPIConfigResponse } from '@kbn/ml-trained-models-utils';
import type { InferenceConnector } from '@kbn/inference-common';
/** Route path constants (const object so imported paths stay type-narrowed as `string`). */
export declare const APIRoutes: {
    readonly GET_INFERENCE_ENDPOINTS: "/internal/inference_endpoints/endpoints";
    readonly INFERENCE_ENDPOINT: "/internal/inference_endpoint/endpoints/{type}/{id}";
    readonly GET_INFERENCE_SERVICES: "internal/inference_endpoints/_inference/_services";
    readonly GET_INFERENCE_SETTINGS: "/internal/search_inference_endpoints/settings";
    readonly PUT_INFERENCE_SETTINGS: "/internal/search_inference_endpoints/settings";
    readonly GET_INFERENCE_FEATURES: "/internal/search_inference_endpoints/features";
    readonly GET_INFERENCE_CONNECTORS: "/internal/search_inference_endpoints/connectors";
};
export interface InferenceConnectorsResponse {
    connectors: InferenceConnector[];
}
export interface SearchInferenceEndpointsConfigType {
    ui: {
        enabled: boolean;
    };
}
export interface InferenceEndpointSetting {
    id: string;
}
export interface InferenceFeatureSetting {
    feature_id: string;
    endpoints: InferenceEndpointSetting[];
}
export interface InferenceSettingsAttributes {
    features: InferenceFeatureSetting[];
}
export interface InferenceSettingsResponse {
    _meta: {
        id: string;
        createdAt?: string;
        updatedAt?: string;
    };
    data: InferenceSettingsAttributes;
    invalidEndpoints?: string[];
}
export interface InferenceFeaturesResponse {
    features: InferenceFeatureResponse[];
}
export interface InferenceFeatureResponse {
    featureId: string;
    parentFeatureId?: string;
    featureName: string;
    featureDescription: string;
    taskType: string;
    maxNumberOfEndpoints?: number;
    recommendedEndpoints: string[];
    isBeta?: boolean;
    isTechPreview?: boolean;
}
export type InferenceEndpointWithMetadata = InferenceAPIConfigResponse & {
    metadata: {
        heuristics?: {
            properties?: string[];
            status?: string;
            release_date?: string;
            end_of_life_date?: string;
        } & Record<string, unknown>;
        display?: {
            name?: string;
            model_creator?: string;
        } & Record<string, unknown>;
    } & Record<string, unknown>;
};
export type InferenceEndpointWithDisplayNameMetadata = InferenceEndpointWithMetadata & {
    metadata: {
        display: {
            name: string;
        };
    };
};
export type InferenceEndpointWithDisplayCreatorMetadata = InferenceEndpointWithMetadata & {
    metadata: {
        display: {
            model_creator: string;
        };
    };
};
