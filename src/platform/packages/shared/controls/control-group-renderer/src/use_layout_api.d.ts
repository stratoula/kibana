import { BehaviorSubject } from 'rxjs';
import type { PinnedControlLayoutState, PinnedControlState } from '@kbn/controls-schemas';
import type { ControlsLayout } from '@kbn/controls-renderer/src/types';
import type { PanelPackage } from '@kbn/presentation-publishing';
import type { ControlGroupCreationOptions, ControlPanelsState } from './types';
import type { useChildrenApi } from './use_children_api';
export declare const useLayoutApi: (state: ControlGroupCreationOptions["initialState"] | undefined, childrenApi: ReturnType<typeof useChildrenApi>["childrenApi"], lastSavedState$Ref: React.MutableRefObject<BehaviorSubject<ControlPanelsState>>) => {
    layout$: BehaviorSubject<ControlsLayout>;
    getLayout: (id: string) => PinnedControlLayoutState;
    setLayout: (id: string, newLayout: PinnedControlLayoutState) => void;
    addNewPanel: <State extends PinnedControlState = Readonly<{
        id?: string | undefined;
    } & {
        type: "esql_control";
        config: Readonly<{
            title?: string | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            }> | undefined;
        } & {
            control_type: "STATIC_VALUES";
            available_options: string[];
            selected_options: string[];
            single_select: boolean;
            variable_name: string;
            variable_type: "values" | "fields" | "functions" | "time_literal" | "multi_values";
        }> | Readonly<{
            title?: string | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            }> | undefined;
        } & {
            control_type: "VALUES_FROM_QUERY";
            selected_options: string[];
            single_select: boolean;
            variable_name: string;
            variable_type: "values" | "fields" | "functions" | "time_literal" | "multi_values";
            esql_query: string;
        }>;
        width: "small" | "large" | "medium";
        grow: boolean;
    }> | Readonly<{
        id?: string | undefined;
    } & {
        type: "options_list_control";
        config: Readonly<{
            title?: string | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            }> | undefined;
        } & {
            sort: Readonly<{} & {
                by: "_count" | "_key";
                direction: "asc" | "desc";
            }>;
            selected_options: (string | number)[];
            single_select: boolean;
            exclude: boolean;
            exists_selected: boolean;
            run_past_timeout: boolean;
            search_technique: "prefix" | "wildcard" | "exact";
            data_view_id: string;
            field_name: string;
            use_global_filters: boolean;
            ignore_validations: boolean;
        }>;
        width: "small" | "large" | "medium";
        grow: boolean;
    }> | Readonly<{
        id?: string | undefined;
    } & {
        type: "range_slider_control";
        config: Readonly<{
            value?: string[] | undefined;
            title?: string | undefined;
        } & {
            step: number;
            data_view_id: string;
            field_name: string;
            use_global_filters: boolean;
            ignore_validations: boolean;
        }>;
        width: "small" | "large" | "medium";
        grow: boolean;
    }> | Readonly<{
        id?: string | undefined;
    } & {
        type: "time_slider_control";
        config: Readonly<{} & {
            start_percentage_of_time_range: number;
            end_percentage_of_time_range: number;
            is_anchored: boolean;
        }>;
        width: "small" | "large" | "medium";
        grow: boolean;
    }>>(panelPackage: PanelPackage<State>) => Promise<import("@kbn/embeddable-plugin/public").DefaultEmbeddableApi<object> | undefined>;
    replacePanel: <State extends PinnedControlState = Readonly<{
        id?: string | undefined;
    } & {
        type: "esql_control";
        config: Readonly<{
            title?: string | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            }> | undefined;
        } & {
            control_type: "STATIC_VALUES";
            available_options: string[];
            selected_options: string[];
            single_select: boolean;
            variable_name: string;
            variable_type: "values" | "fields" | "functions" | "time_literal" | "multi_values";
        }> | Readonly<{
            title?: string | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            }> | undefined;
        } & {
            control_type: "VALUES_FROM_QUERY";
            selected_options: string[];
            single_select: boolean;
            variable_name: string;
            variable_type: "values" | "fields" | "functions" | "time_literal" | "multi_values";
            esql_query: string;
        }>;
        width: "small" | "large" | "medium";
        grow: boolean;
    }> | Readonly<{
        id?: string | undefined;
    } & {
        type: "options_list_control";
        config: Readonly<{
            title?: string | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            }> | undefined;
        } & {
            sort: Readonly<{} & {
                by: "_count" | "_key";
                direction: "asc" | "desc";
            }>;
            selected_options: (string | number)[];
            single_select: boolean;
            exclude: boolean;
            exists_selected: boolean;
            run_past_timeout: boolean;
            search_technique: "prefix" | "wildcard" | "exact";
            data_view_id: string;
            field_name: string;
            use_global_filters: boolean;
            ignore_validations: boolean;
        }>;
        width: "small" | "large" | "medium";
        grow: boolean;
    }> | Readonly<{
        id?: string | undefined;
    } & {
        type: "range_slider_control";
        config: Readonly<{
            value?: string[] | undefined;
            title?: string | undefined;
        } & {
            step: number;
            data_view_id: string;
            field_name: string;
            use_global_filters: boolean;
            ignore_validations: boolean;
        }>;
        width: "small" | "large" | "medium";
        grow: boolean;
    }> | Readonly<{
        id?: string | undefined;
    } & {
        type: "time_slider_control";
        config: Readonly<{} & {
            start_percentage_of_time_range: number;
            end_percentage_of_time_range: number;
            is_anchored: boolean;
        }>;
        width: "small" | "large" | "medium";
        grow: boolean;
    }>>(idToRemove: string, newPanel: PanelPackage<State>) => Promise<string>;
    removePanel: (idToRemove: string) => void;
    childrenLoading$: import("rxjs").Observable<boolean>;
} | undefined;
