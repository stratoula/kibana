import React from 'react';
import type { XYVisualizationState } from '../../types';
export declare function getValueLabelDisableReason({ isAreaPercentage, isHistogramSeries, }: {
    isAreaPercentage: boolean;
    isHistogramSeries: boolean;
}): string;
export declare const XyAppearanceSettings: React.FC<{
    state: XYVisualizationState;
    setState: (newState: XYVisualizationState) => void;
}>;
