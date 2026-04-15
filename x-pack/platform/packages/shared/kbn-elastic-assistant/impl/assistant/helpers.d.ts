import type { SettingsStart } from '@kbn/core-ui-settings-browser';
import type { AIConnector } from '../connectorland/connector_selector';
import type { FetchConnectorExecuteResponse } from './api';
import type { ClientMessage } from '../assistant_context/types';
export declare const getMessageFromRawResponse: (rawResponse: FetchConnectorExecuteResponse) => ClientMessage;
/**
 * Returns a default connector if there is only one connector
 * @param connectors
 */
export declare const getDefaultConnector: (connectors: AIConnector[] | undefined, settings: SettingsStart) => AIConnector | undefined;
interface OptionalRequestParams {
    alertsIndexPattern?: string;
    size?: number;
}
export declare const getOptionalRequestParams: ({ alertsIndexPattern, size, }: {
    alertsIndexPattern?: string;
    size?: number;
}) => OptionalRequestParams;
export declare const sleep: (ms: number) => Promise<unknown>;
export {};
