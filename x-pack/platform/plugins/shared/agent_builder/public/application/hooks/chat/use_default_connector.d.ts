import type { AIConnector } from '@kbn/elastic-assistant';
interface UseDefaultConnectorParams {
    connectors: AIConnector[];
    defaultConnectorId?: string;
}
export declare function useDefaultConnector({ connectors, defaultConnectorId, }: UseDefaultConnectorParams): string | undefined;
export {};
