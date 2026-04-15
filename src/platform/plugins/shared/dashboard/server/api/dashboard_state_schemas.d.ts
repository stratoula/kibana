import type { ObjectType, Type } from '@kbn/config-schema';
export declare const panelGridSchema: ObjectType<{
    x: Type<number>;
    y: Type<number>;
    w: Type<number>;
    h: Type<number>;
}>;
export declare function getPanelSchema(isDashboardAppRequest: boolean): ObjectType<{
    type: Type<string>;
    config: ObjectType<{}>;
    grid: ObjectType<{
        x: Type<number>;
        y: Type<number>;
        w: Type<number>;
        h: Type<number>;
    }>;
    id: Type<string | undefined>;
}> | Type<Readonly<{
    id?: string | undefined;
    version?: string | undefined;
} & {
    grid: Readonly<{} & {
        x: number;
        y: number;
        w: number;
        h: number;
    }>;
    type: string;
    config: Readonly<{} & {}>;
}>>;
export declare function getSectionSchema(isDashboardAppRequest: boolean): ObjectType<{
    title: Type<string>;
    collapsed: Type<boolean>;
    grid: ObjectType<{
        y: Type<number>;
    }>;
    panels: Type<Readonly<{
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
    }>[]>;
    id: Type<string | undefined>;
}>;
export declare const optionsSchema: ObjectType<{
    auto_apply_filters: Type<boolean>;
    hide_panel_titles: Type<boolean>;
    hide_panel_borders: Type<boolean>;
    use_margins: Type<boolean>;
    sync_colors: Type<boolean>;
    sync_tooltips: Type<boolean>;
    sync_cursor: Type<boolean>;
}>;
export declare const accessControlSchema: Type<Readonly<{
    access_mode?: "default" | "write_restricted" | undefined;
} & {}> | undefined>;
export declare function getDashboardStateSchema(isDashboardAppRequest: boolean): ObjectType<{
    pinned_panels: Type<(Readonly<{
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
    }>)[]>;
    description: Type<string | undefined>;
    filters: Type<(Readonly<{
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
    }>)[] | undefined>;
    options: ObjectType<{
        auto_apply_filters: Type<boolean>;
        hide_panel_titles: Type<boolean>;
        hide_panel_borders: Type<boolean>;
        use_margins: Type<boolean>;
        sync_colors: Type<boolean>;
        sync_tooltips: Type<boolean>;
        sync_cursor: Type<boolean>;
    }>;
    panels: Type<(Readonly<{
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
    }>)[]>;
    project_routing: Type<string | undefined>;
    query: Type<Readonly<{} & {
        language: "kql" | "lucene";
        expression: string;
    }> | undefined>;
    refresh_interval: Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    tags: Type<string[] | undefined>;
    time_range: Type<Readonly<{
        mode?: "relative" | "absolute" | undefined;
    } & {
        from: string;
        to: string;
    }> | undefined>;
    title: Type<string>;
    access_control: Type<Readonly<{
        access_mode?: "default" | "write_restricted" | undefined;
    } & {}> | undefined>;
}>;
