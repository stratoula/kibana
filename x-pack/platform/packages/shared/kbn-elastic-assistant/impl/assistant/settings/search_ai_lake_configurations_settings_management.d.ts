import React from 'react';
import type { DataViewsContract } from '@kbn/data-views-plugin/public';
import type { ManagementSettingsTabs } from './types';
interface Props {
    dataViews: DataViewsContract;
    onTabChange?: (tabId: string) => void;
    currentTab: ManagementSettingsTabs;
}
/**
 * Modal for overall Assistant Settings, including conversation settings, quick prompts, system prompts,
 * anonymization, knowledge base, and evaluation via the `isModelEvaluationEnabled` feature flag.
 */
export declare const SearchAILakeConfigurationsSettingsManagement: React.FC<Props>;
export {};
