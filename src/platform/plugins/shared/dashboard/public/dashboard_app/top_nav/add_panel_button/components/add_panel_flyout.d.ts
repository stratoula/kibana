import React from 'react';
import type { DashboardApi } from '../../../../dashboard_api/types';
export declare function AddPanelFlyout({ dashboardApi, closeFlyout, ariaLabelledBy, }: {
    dashboardApi: DashboardApi;
    closeFlyout: () => void;
    ariaLabelledBy: string;
}): React.JSX.Element;
