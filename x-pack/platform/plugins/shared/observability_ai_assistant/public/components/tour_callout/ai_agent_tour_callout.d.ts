import type { ReactElement } from 'react';
import React from 'react';
interface AIAgentTourCalloutProps {
    children: ReactElement;
    zIndex?: number;
    isConversationApp?: boolean;
}
export declare const AIAgentTourCallout: ({ children, zIndex, isConversationApp, }: AIAgentTourCalloutProps) => React.JSX.Element;
export {};
