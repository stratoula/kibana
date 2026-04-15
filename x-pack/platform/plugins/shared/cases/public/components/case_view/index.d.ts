import React from 'react';
import type { CaseViewProps } from './types';
export declare const CaseViewLoading: {
    (): React.JSX.Element;
    displayName: string;
};
export declare const CaseView: React.MemoExoticComponent<({ actionsNavigation, ruleDetailsNavigation, showAlertDetails, timelineIntegration, useFetchAlertData, onAlertsTableLoaded, refreshRef, renderAlertsTable, }: CaseViewProps) => React.JSX.Element | null>;
export { CaseView as default };
