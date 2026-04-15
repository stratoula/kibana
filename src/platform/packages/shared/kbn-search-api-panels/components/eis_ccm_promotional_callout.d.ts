import React from 'react';
export interface EisCloudConnectPromoCalloutProps {
    promoId: string;
    isSelfManaged: boolean;
    navigateToApp: () => void;
    direction: 'row' | 'column';
    addSpacer?: 'top' | 'bottom';
}
export declare const EisCloudConnectPromoCallout: ({ promoId, isSelfManaged, navigateToApp, direction, addSpacer, }: EisCloudConnectPromoCalloutProps) => React.JSX.Element | null;
