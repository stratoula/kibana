import type { EuiTourStepProps } from '@elastic/eui';
import React from 'react';
import type { AnalyticsServiceStart } from '@kbn/core-analytics-browser';
import type { NEW_FEATURES_TOUR_STORAGE_KEYS } from '../const';
interface Props {
    analytics?: AnalyticsServiceStart;
    children?: EuiTourStepProps['children'];
    isDisabled: boolean;
    storageKey: NEW_FEATURES_TOUR_STORAGE_KEYS;
    onContinue?: () => void;
}
export declare const AgentBuilderTourStep: React.NamedExoticComponent<Props>;
export {};
