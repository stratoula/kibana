import React from 'react';
export interface EisPromotionalCalloutProps {
    ctaLink: string;
    promoId: string;
    isCloudEnabled: boolean;
    direction: 'row' | 'column';
}
export declare const EisPromotionalCallout: ({ ctaLink, promoId, isCloudEnabled, direction, }: EisPromotionalCalloutProps) => React.JSX.Element | null;
