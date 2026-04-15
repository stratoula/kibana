import React, { type ComponentType } from 'react';
import type { CaseUI } from '../../../../common';
import type { CaseViewAlertsTableProps } from '../types';
interface CaseViewAlertsProps {
    caseData: CaseUI;
    onAlertsTableLoaded?: (eventIds: Array<Partial<{
        _id: string;
    }>>) => void;
    renderAlertsTable?: ComponentType<CaseViewAlertsTableProps>;
}
export declare const CaseViewAlerts: {
    ({ caseData, renderAlertsTable: CustomAlertsTable, onAlertsTableLoaded, }: CaseViewAlertsProps): React.JSX.Element;
    displayName: string;
};
export {};
