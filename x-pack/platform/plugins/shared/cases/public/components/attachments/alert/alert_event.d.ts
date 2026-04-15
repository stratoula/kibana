import React from 'react';
import type { RuleDetailsNavigation } from '../../user_actions/types';
interface SingleAlertProps {
    actionId: string;
    ruleId?: string | null;
    ruleName?: string | null;
    getRuleDetailsHref?: RuleDetailsNavigation['href'];
    onRuleDetailsClick?: RuleDetailsNavigation['onClick'];
    loadingAlertData?: boolean;
}
interface MultipleAlertsProps extends SingleAlertProps {
    totalAlerts: number;
}
export declare const SingleAlertCommentEvent: React.NamedExoticComponent<SingleAlertProps>;
export declare const MultipleAlertsCommentEvent: React.NamedExoticComponent<MultipleAlertsProps>;
export {};
