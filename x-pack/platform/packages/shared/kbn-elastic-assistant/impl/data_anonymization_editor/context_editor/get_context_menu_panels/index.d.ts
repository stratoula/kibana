import type { EuiContextMenuPanelDescriptor } from '@elastic/eui';
import type { OnListUpdated } from '../../../assistant/settings/use_settings_updater/use_anonymization_updater';
import type { HandleRowChecked } from '../selection/types';
export declare const PRIMARY_PANEL_ID = "primary-panel-id";
export declare const getContextMenuPanels: ({ disableAllow, disableAnonymize, disableDeny, disableUnanonymize, closePopover, onListUpdated, selectedField, selectedFields, handleRowChecked, }: {
    disableAllow: boolean;
    disableAnonymize: boolean;
    disableDeny: boolean;
    disableUnanonymize: boolean;
    closePopover: () => void;
    onListUpdated: OnListUpdated;
    selectedField: string | undefined;
    selectedFields: string[];
    handleRowChecked: HandleRowChecked;
}) => EuiContextMenuPanelDescriptor[];
