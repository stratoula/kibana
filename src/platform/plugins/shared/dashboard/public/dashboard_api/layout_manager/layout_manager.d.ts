import { BehaviorSubject, type Observable } from 'rxjs';
import type { DefaultEmbeddableApi, EmbeddablePackageState } from '@kbn/embeddable-plugin/public';
import type { GridLayoutData } from '@kbn/grid-layout';
import type { PinnedControlLayoutState as PinnedPanelLayoutState } from '@kbn/controls-schemas';
import type { PanelPackage } from '@kbn/presentation-publishing';
import type { PinnedControlLayoutState } from '@kbn/controls-schemas';
import type { DashboardState } from '../../../common';
import type { DashboardPanel } from '../../../server';
import type { initializeTrackPanel } from '../track_panel';
import type { initializeViewModeManager } from '../view_mode_manager';
import { type DashboardChildren, type DashboardLayout, type DashboardLayoutPanel } from './types';
export declare function initializeLayoutManager(viewModeManager: ReturnType<typeof initializeViewModeManager>, incomingEmbeddables: EmbeddablePackageState[] | undefined, initialPanels: DashboardState['panels'], initialPinnedPanels: DashboardState['pinned_panels'], trackPanel: ReturnType<typeof initializeTrackPanel>): {
    internalApi: {
        getSerializedStateForPanel: (panelId: string) => object;
        getLastSavedStateForPanel: (panelId: string) => object;
        gridLayout$: BehaviorSubject<GridLayoutData>;
        childrenLoading$: Observable<boolean>;
        reset: (state: DashboardState) => void;
        serializeLayout: () => Pick<import("@kbn/utility-types").Writable<Readonly<{
            query?: Readonly<{} & {
                language: "kql" | "lucene";
                expression: string;
            }> | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            time_range?: Readonly<{
                mode?: "relative" | "absolute" | undefined;
            } & {
                from: string;
                to: string;
            }> | undefined;
            filters?: (Readonly<{
                label?: string | undefined;
                disabled?: boolean | undefined;
                negate?: boolean | undefined;
                data_view_id?: string | undefined;
                controlled_by?: string | undefined;
                is_multi_index?: boolean | undefined;
            } & {
                type: "condition";
                condition: Readonly<{
                    negate?: boolean | undefined;
                } & {
                    value: string | number | boolean;
                    operator: "is";
                    field: string;
                }> | Readonly<{
                    negate?: boolean | undefined;
                } & {
                    value: number[] | string[] | boolean[];
                    operator: "is_one_of";
                    field: string;
                }> | Readonly<{
                    negate?: boolean | undefined;
                } & {
                    value: Readonly<{
                        format?: string | undefined;
                        gt?: string | number | undefined;
                        gte?: string | number | undefined;
                        lt?: string | number | undefined;
                        lte?: string | number | undefined;
                    } & {}>;
                    operator: "range";
                    field: string;
                }> | Readonly<{
                    negate?: boolean | undefined;
                } & {
                    operator: "exists";
                    field: string;
                }>;
            }> | Readonly<{
                label?: string | undefined;
                disabled?: boolean | undefined;
                negate?: boolean | undefined;
                data_view_id?: string | undefined;
                controlled_by?: string | undefined;
                is_multi_index?: boolean | undefined;
            } & {
                group: Readonly<{} & {
                    operator: "or" | "and";
                    conditions: (Readonly<{
                        negate?: boolean | undefined;
                    } & {
                        value: string | number | boolean;
                        operator: "is";
                        field: string;
                    }> | Readonly<{
                        negate?: boolean | undefined;
                    } & {
                        value: number[] | string[] | boolean[];
                        operator: "is_one_of";
                        field: string;
                    }> | Readonly<{
                        negate?: boolean | undefined;
                    } & {
                        value: Readonly<{
                            format?: string | undefined;
                            gt?: string | number | undefined;
                            gte?: string | number | undefined;
                            lt?: string | number | undefined;
                            lte?: string | number | undefined;
                        } & {}>;
                        operator: "range";
                        field: string;
                    }> | Readonly<{
                        negate?: boolean | undefined;
                    } & {
                        operator: "exists";
                        field: string;
                    }> | import("@kbn/as-code-filters-schema").AsCodeGroupFilterRecursive)[];
                }>;
                type: "group";
            }> | Readonly<{
                label?: string | undefined;
                disabled?: boolean | undefined;
                params?: any;
                field?: string | undefined;
                negate?: boolean | undefined;
                data_view_id?: string | undefined;
                controlled_by?: string | undefined;
                is_multi_index?: boolean | undefined;
            } & {
                type: "dsl";
                dsl: Record<string, any>;
            }> | Readonly<{
                label?: string | undefined;
                disabled?: boolean | undefined;
                negate?: boolean | undefined;
                data_view_id?: string | undefined;
                controlled_by?: string | undefined;
                is_multi_index?: boolean | undefined;
            } & {
                type: "spatial";
                dsl: Record<string, any>;
            }>)[] | undefined;
            project_routing?: string | undefined;
            refresh_interval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            access_control?: Readonly<{
                access_mode?: "default" | "write_restricted" | undefined;
            } & {}> | undefined;
        } & {
            title: string;
            options: Readonly<{} & {
                auto_apply_filters: boolean;
                hide_panel_titles: boolean;
                hide_panel_borders: boolean;
                use_margins: boolean;
                sync_colors: boolean;
                sync_tooltips: boolean;
                sync_cursor: boolean;
            }>;
            panels: (Readonly<{
                id?: string | undefined;
            } & {
                grid: Readonly<{} & {
                    x: number;
                    y: number;
                    w: number;
                    h: number;
                }>;
                type: string;
                config: Readonly<{} & {}>;
            }> | Readonly<{
                id?: string | undefined;
            } & {
                title: string;
                grid: Readonly<{} & {
                    y: number;
                }>;
                panels: Readonly<{
                    id?: string | undefined;
                } & {
                    grid: Readonly<{} & {
                        x: number;
                        y: number;
                        w: number;
                        h: number;
                    }>;
                    type: string;
                    config: Readonly<{} & {}>;
                }>[];
                collapsed: boolean;
            }>)[];
            pinned_panels: (Readonly<{
                id?: string | undefined;
            } & {
                type: "esql_control";
                width: "small" | "medium" | "large";
                grow: boolean;
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
                    selected_options: string[];
                    single_select: boolean;
                    control_type: "STATIC_VALUES";
                    available_options: string[];
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
                    selected_options: string[];
                    single_select: boolean;
                    control_type: "VALUES_FROM_QUERY";
                    variable_name: string;
                    variable_type: "values" | "fields" | "functions" | "time_literal" | "multi_values";
                    esql_query: string;
                }>;
            }> | Readonly<{
                id?: string | undefined;
            } & {
                type: "options_list_control";
                width: "small" | "medium" | "large";
                grow: boolean;
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
                        direction: "desc" | "asc";
                        by: "_count" | "_key";
                    }>;
                    exclude: boolean;
                    field_name: string;
                    exists_selected: boolean;
                    run_past_timeout: boolean;
                    search_technique: "prefix" | "exact" | "wildcard";
                    selected_options: (string | number)[];
                    single_select: boolean;
                    data_view_id: string;
                    use_global_filters: boolean;
                    ignore_validations: boolean;
                }>;
            }> | Readonly<{
                id?: string | undefined;
            } & {
                type: "range_slider_control";
                width: "small" | "medium" | "large";
                grow: boolean;
                config: Readonly<{
                    title?: string | undefined;
                    value?: string[] | undefined;
                } & {
                    step: number;
                    field_name: string;
                    data_view_id: string;
                    use_global_filters: boolean;
                    ignore_validations: boolean;
                }>;
            }> | Readonly<{
                id?: string | undefined;
            } & {
                type: "time_slider_control";
                width: "small" | "medium" | "large";
                grow: boolean;
                config: Readonly<{} & {
                    start_percentage_of_time_range: number;
                    end_percentage_of_time_range: number;
                    is_anchored: boolean;
                }>;
            }>)[];
        }>>, "panels" | "pinned_panels">;
        startComparing: (lastSavedState$: BehaviorSubject<DashboardState>) => Observable<{
            panels?: DashboardState["panels"];
            pinned_panels?: DashboardState["pinned_panels"];
        }>;
        isSectionCollapsed: (sectionId?: string) => boolean;
    };
    api: {
        layout$: BehaviorSubject<DashboardLayout>;
        getLayout: (id: string) => DashboardLayoutPanel;
        setLayout: (id: string, newLayout: DashboardLayoutPanel | PinnedPanelLayoutState) => void;
        registerChildApi: (api: DefaultEmbeddableApi) => void;
        /** Panels */
        children$: BehaviorSubject<DashboardChildren>;
        getChildApi: (uuid: string) => Promise<DefaultEmbeddableApi | undefined>;
        addNewPanel: <ApiType>(panelPackage: PanelPackage, options?: {
            displaySuccessMessage?: boolean;
            scrollToPanel?: boolean;
            beside?: string;
        }, grid?: DashboardPanel["grid"]) => Promise<ApiType>;
        removePanel: (uuid: string) => void;
        replacePanel: (idToRemove: string, panelPackage: PanelPackage) => Promise<string>;
        duplicatePanel: (uuidToDuplicate: string) => Promise<void>;
        getDashboardPanelFromId: (panelId: string) => {
            type: string;
            grid: (Readonly<{} & {
                x: number;
                y: number;
                w: number;
                h: number;
            }> | Readonly<{} & {
                x: number;
                y: number;
                w: number;
                h: number;
            }>) & {
                sectionId?: string;
            };
            serializedState: object;
        };
        getPanelCount: () => number;
        canRemovePanels: () => boolean;
        /** Pinned panels (only controls can currently be pinned) */
        panelIsPinned: (uuid: string) => boolean;
        unpinPanel: (uuid: string) => void;
        pinPanel: (uuid: string) => void;
        addPinnedPanel: (panelPackage: PanelPackage, prevLayoutState?: Partial<PinnedControlLayoutState>) => Promise<DefaultEmbeddableApi<object> | {
            uuid: string;
        }>;
        /** Sections */
        addNewSection: () => void;
        getPanelSection: (uuid: string) => string | undefined;
        panelSection$: (uuid: string) => Observable<string | undefined>;
    };
    cleanup: () => void;
};
