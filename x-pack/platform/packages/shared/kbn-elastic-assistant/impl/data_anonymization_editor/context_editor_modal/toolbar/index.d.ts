import React from 'react';
import type { OnListUpdated } from '../../../assistant/settings/use_settings_updater/use_anonymization_updater';
import type { HandleRowChecked } from '../../context_editor/selection/types';
export interface Props {
    handleRowChecked: HandleRowChecked;
    onListUpdated: OnListUpdated;
    selectedFields: string[];
}
export declare const Toolbar: React.NamedExoticComponent<Props>;
