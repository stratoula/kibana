import React from 'react';
import type { AnalyticsServiceStart } from '@kbn/core-analytics-browser';
export declare const TryAIAgentContextMenuItem: React.FC<{
    analytics?: AnalyticsServiceStart;
    hasAgentBuilderManagePrivilege?: boolean;
    handleOpenAIAgentModal: (s: 'security_ab_tour' | 'security_settings_menu') => void;
}>;
