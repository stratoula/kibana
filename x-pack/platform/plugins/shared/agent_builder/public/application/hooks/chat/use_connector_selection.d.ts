export interface UseConnectorSelectionResult {
    selectedConnector?: string;
    selectConnector: (connectorId: string) => void;
    defaultConnectorId?: string;
}
export declare function useConnectorSelection(): UseConnectorSelectionResult;
