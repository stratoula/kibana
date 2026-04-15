import type { ActionConnector, ActionTypeModel, ActionTypeRegistryContract } from '@kbn/triggers-actions-ui-plugin/public';
import type { AIConnector } from './connector_selector';
export declare enum OpenAiProviderType {
    OpenAi = "OpenAI",
    AzureAi = "Azure OpenAI",
    Other = "Other"
}
export interface GenAiConfig {
    apiProvider?: OpenAiProviderType;
    apiUrl?: string;
    defaultModel?: string;
}
export interface AiConfigCatchAll {
    apiProvider?: OpenAiProviderType;
    apiUrl?: string;
    defaultModel?: string;
    providerConfig?: {
        model_id?: string;
    };
    model_id?: string;
    url?: string;
}
/**
 * Returns the GenAiConfig for a given ActionConnector. Note that if the connector is preconfigured,
 * the config MAY be undefined if exposeConfig: true is absent
 *
 * @param connector
 */
export declare const getGenAiConfig: (connector: ActionConnector | undefined) => GenAiConfig;
export declare const getActionTypeTitle: (actionType: ActionTypeModel) => string;
export declare const getConnectorTypeTitle: (connector: ActionConnector | undefined, actionTypeRegistry: ActionTypeRegistryContract) => string | null;
export declare const isElasticManagedLlmConnector: (connector: {
    actionTypeId: AIConnector["actionTypeId"];
    isPreconfigured?: boolean;
    isEis?: boolean;
} | undefined) => boolean | undefined;
