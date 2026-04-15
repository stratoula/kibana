import type { HttpSetup } from '@kbn/core-http-browser';
import type { SettingsStart } from '@kbn/core-ui-settings-browser';
import type { InferenceConnector } from '@kbn/inference-common';
import type { AIConnector } from './types';
type InferenceConnectorFromApi = InferenceConnector & {
    isRecommended?: boolean;
};
export declare const toAIConnector: (connector: InferenceConnectorFromApi) => AIConnector;
/**
 * Fetches AI connectors for a given feature, maps them to {@link AIConnector},
 * and applies the default-connector UI settings filter.
 *
 * When the "default connector only" setting is active and a default connector
 * ID is configured, the connector is retrieved directly by ID rather than
 * filtered from the feature connector list.
 */
export declare const loadConnectors: ({ http, featureId, settings, }: {
    http: HttpSetup;
    featureId: string;
    settings: SettingsStart;
}) => Promise<AIConnector[]>;
export {};
