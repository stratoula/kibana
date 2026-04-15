import React from 'react';
interface UseSpaceIdContext {
    spaceId: string;
}
interface SpaceIdProviderProps extends UseSpaceIdContext {
    children: React.ReactNode;
}
export declare const AssistantSpaceIdProvider: React.FC<SpaceIdProviderProps>;
export declare const useAssistantSpaceId: () => string;
export {};
