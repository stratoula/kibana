import React from 'react';
import type { FindAnonymizationFieldsResponse } from '@kbn/elastic-assistant-common';
import type { OnListUpdated } from '../../../assistant/settings/use_settings_updater/use_anonymization_updater';
import type { HandleRowChecked } from '../selection/types';
export interface Props {
    anonymizationAllFieldsData: FindAnonymizationFieldsResponse['data'];
    handleRowChecked: HandleRowChecked;
    handleUnselectAll: () => void;
    onListUpdated: OnListUpdated;
    onSelectAll: (totalCount: number) => void;
    selectedFields: string[];
    totalFields: number;
}
export declare const Toolbar: React.NamedExoticComponent<Props>;
