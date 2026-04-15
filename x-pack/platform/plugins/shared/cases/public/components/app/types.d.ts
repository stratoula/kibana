import type { ComponentType, MutableRefObject } from 'react';
import type { CaseViewAlertsTableProps } from '../case_view/types';
import type { CaseViewRefreshPropInterface, UseFetchAlertData } from '../../../common/ui/types';
import type { CasesNavigation } from '../links';
import type { CasesTimelineIntegration } from '../timeline_context';
export interface CasesRoutesProps {
    actionsNavigation?: CasesNavigation<string, 'configurable'>;
    ruleDetailsNavigation?: CasesNavigation<string | null | undefined, 'configurable'>;
    showAlertDetails?: (alertId: string, index: string) => void;
    useFetchAlertData: UseFetchAlertData;
    /**
     * A React `Ref` that Exposes data refresh callbacks.
     * **NOTE**: Do not hold on to the `.current` object, as it could become stale
     */
    refreshRef?: MutableRefObject<CaseViewRefreshPropInterface>;
    timelineIntegration?: CasesTimelineIntegration;
    onAlertsTableLoaded?: (eventIds: Array<Partial<{
        _id: string;
    }>>) => void;
    renderAlertsTable?: ComponentType<CaseViewAlertsTableProps>;
}
