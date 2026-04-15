export interface CloudConnectStatus {
    isCloudConnected: boolean;
    isCloudConnectEisEnabled: boolean;
    isCloudConnectAutoopsEnabled: boolean;
    isLoading: boolean;
    error: Error | null;
}
export interface CloudConnectStatusWithDerived extends CloudConnectStatus {
    isCloudConnectedWithEisEnabled: boolean;
}
export type UseCloudConnectStatusHook = () => CloudConnectStatus;
export declare const useCloudConnectStatus: (hook?: UseCloudConnectStatusHook) => CloudConnectStatusWithDerived;
