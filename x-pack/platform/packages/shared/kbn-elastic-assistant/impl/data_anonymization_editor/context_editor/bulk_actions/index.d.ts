import React from 'react';
import type { OnListUpdated } from '../../../assistant/settings/use_settings_updater/use_anonymization_updater';
import type { HandleRowChecked } from '../selection/types';
export interface Props {
    appliesTo: 'multipleRows' | 'singleRow';
    disabled: boolean;
    disableAllow?: boolean;
    disableAnonymize?: boolean;
    disableDeny?: boolean;
    disableUnanonymize?: boolean;
    onListUpdated: OnListUpdated;
    selectedField?: string;
    selectedFields: string[];
    handleRowChecked: HandleRowChecked;
}
export declare const BulkActions: React.NamedExoticComponent<Props>;
