import React from 'react';
import { type EuiTourStepProps } from '@elastic/eui';
export interface EisPromotionalTourProps {
    anchorPosition?: EuiTourStepProps['anchorPosition'];
    ctaLink?: string;
    promoId: string;
    isCloudEnabled: boolean;
    children: React.ReactElement;
}
export declare const EisPromotionalTour: ({ anchorPosition, ctaLink, promoId, isCloudEnabled, children, }: EisPromotionalTourProps) => React.JSX.Element;
