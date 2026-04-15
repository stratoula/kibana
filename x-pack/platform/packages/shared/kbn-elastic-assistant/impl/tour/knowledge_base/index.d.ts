import React from 'react';
import type { EuiTourStepProps } from '@elastic/eui';
export interface TourState {
    currentTourStep: number;
    isTourActive: boolean;
}
export declare const KnowledgeBaseTour: React.NamedExoticComponent<{
    children?: EuiTourStepProps["children"];
    isKbSettingsPage?: boolean;
}>;
