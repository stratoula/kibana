import React from 'react';
import type { CaseUI } from '../../../../common';
import type { UseFetchAlertData } from '../../../../common/ui/types';
import type { CasesNavigation } from '../../links';
export declare const CaseViewActivity: {
    ({ ruleDetailsNavigation, caseData, searchTerm, actionsNavigation, showAlertDetails, useFetchAlertData, }: {
        ruleDetailsNavigation?: CasesNavigation<string | null | undefined, "configurable">;
        caseData: CaseUI;
        actionsNavigation?: CasesNavigation<string, "configurable">;
        showAlertDetails?: (alertId: string, index: string) => void;
        useFetchAlertData: UseFetchAlertData;
        searchTerm?: string;
    }): React.JSX.Element;
    displayName: string;
};
