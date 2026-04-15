import type { TypeOf } from '@kbn/config-schema';
/**
 * Statistical functions that can be displayed in chart legend for data series
 */
export declare const statisticsSchema: import("@kbn/config-schema").Type<"min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value">;
export declare const statisticsOptionsSize = 17;
/**
 * Y-axis domain configuration defining how the axis bounds are calculated
 */
declare const yDomainSchema: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
    type: import("@kbn/config-schema").Type<"full">;
    rounding: import("@kbn/config-schema").Type<boolean | undefined>;
} | {
    type: import("@kbn/config-schema").Type<"fit">;
    rounding: import("@kbn/config-schema").Type<boolean | undefined>;
} | {
    type: import("@kbn/config-schema").Type<"custom">;
    min: import("@kbn/config-schema").Type<number>;
    max: import("@kbn/config-schema").Type<number>;
    rounding: import("@kbn/config-schema").Type<boolean | undefined>;
}>>;
export type YDomainSchemaType = TypeOf<typeof yDomainSchema>;
/**
 * Y-axis scale type for data transformation
 */
declare const yScaleSchema: import("@kbn/config-schema").Type<"log" | "linear" | "sqrt">;
export type YScaleSchemaType = TypeOf<typeof yScaleSchema>;
/**
 * Common axis configuration properties shared across X and Y axes
 */
export declare const sharedAxisSchema: {
    title: import("@kbn/config-schema").Type<Readonly<{
        text?: string | undefined;
        visible?: boolean | undefined;
    } & {}> | undefined>;
    ticks: import("@kbn/config-schema").Type<Readonly<{} & {
        visible: boolean;
    }> | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{} & {
        visible: boolean;
    }> | undefined>;
    labels: import("@kbn/config-schema").Type<Readonly<{
        orientation?: "horizontal" | "vertical" | "angled" | undefined;
    } & {}> | undefined>;
};
declare const yAxisSchema: import("@kbn/config-schema").ObjectType<{
    scale: import("@kbn/config-schema").Type<"log" | "linear" | "sqrt" | undefined>;
    domain: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
        type: import("@kbn/config-schema").Type<"full">;
        rounding: import("@kbn/config-schema").Type<boolean | undefined>;
    } | {
        type: import("@kbn/config-schema").Type<"fit">;
        rounding: import("@kbn/config-schema").Type<boolean | undefined>;
    } | {
        type: import("@kbn/config-schema").Type<"custom">;
        min: import("@kbn/config-schema").Type<number>;
        max: import("@kbn/config-schema").Type<number>;
        rounding: import("@kbn/config-schema").Type<boolean | undefined>;
    }> | undefined>;
    title: import("@kbn/config-schema").Type<Readonly<{
        text?: string | undefined;
        visible?: boolean | undefined;
    } & {}> | undefined>;
    ticks: import("@kbn/config-schema").Type<Readonly<{} & {
        visible: boolean;
    }> | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{} & {
        visible: boolean;
    }> | undefined>;
    labels: import("@kbn/config-schema").Type<Readonly<{
        orientation?: "horizontal" | "vertical" | "angled" | undefined;
    } & {}> | undefined>;
    anchor: import("@kbn/config-schema").Type<"end" | "start" | undefined>;
}>;
export type YAxisSchemaType = TypeOf<typeof yAxisSchema>;
declare const xAxisSchema: import("@kbn/config-schema").ObjectType<{
    scale: import("@kbn/config-schema").Type<"linear" | "ordinal" | "temporal" | undefined>;
    domain: import("@kbn/config-schema").Type<Readonly<{
        rounding?: boolean | undefined;
    } & {
        type: "fit";
    }> | Readonly<{
        rounding?: boolean | undefined;
    } & {
        type: "custom";
        min: number;
        max: number;
    }> | undefined>;
    title: import("@kbn/config-schema").Type<Readonly<{
        text?: string | undefined;
        visible?: boolean | undefined;
    } & {}> | undefined>;
    ticks: import("@kbn/config-schema").Type<Readonly<{} & {
        visible: boolean;
    }> | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{} & {
        visible: boolean;
    }> | undefined>;
    labels: import("@kbn/config-schema").Type<Readonly<{
        orientation?: "horizontal" | "vertical" | "angled" | undefined;
    } & {}> | undefined>;
}>;
export type XAxisSchemaType = TypeOf<typeof xAxisSchema>;
/**
 * Chart types available for data layers in XY visualizations
 */
export declare const xyDataLayerSharedSchema: {
    type: import("@kbn/config-schema").Type<"line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage">;
};
declare const XY_API_LINE_INTERPOLATION: {
    readonly LINEAR: "linear";
    readonly SMOOTH: "smooth";
    readonly STEPPED: "stepped";
};
export type XYApiLineInterpolation = typeof XY_API_LINE_INTERPOLATION;
declare const xyStylingSchema: import("@kbn/config-schema").ObjectType<{
    overlays: import("@kbn/config-schema").Type<Readonly<{
        partial_buckets?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        current_time_marker?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
    } & {}> | undefined>;
    fitting: import("@kbn/config-schema").Type<Readonly<{
        extend?: "none" | "zero" | "nearest" | undefined;
        emphasize?: boolean | undefined;
    } & {
        type: "none" | "linear" | "average" | "zero" | "carry" | "lookahead" | "nearest";
    }> | undefined>;
    interpolation: import("@kbn/config-schema").Type<"linear" | "smooth" | "stepped" | undefined>;
    points: import("@kbn/config-schema").Type<Readonly<{
        visibility?: "hidden" | "auto" | "visible" | undefined;
    } & {}> | undefined>;
    areas: import("@kbn/config-schema").Type<Readonly<{
        fill_opacity?: number | undefined;
    } & {}> | undefined>;
    bars: import("@kbn/config-schema").Type<Readonly<{
        minimum_height?: number | undefined;
        data_labels?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
    } & {}> | undefined>;
}>;
/**
 * Data layer configuration for standard (non-ES|QL) queries with breakdown and metrics
 */
declare const xyDataLayerSchemaNoESQL: import("@kbn/config-schema").ObjectType<{
    breakdown_by: import("@kbn/config-schema").Type<Readonly<{
        label?: string | undefined;
        color?: Readonly<{
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mapping: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
                color: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>;
            }>[];
            mode: "categorical";
            palette: string;
        }> | Readonly<{
            sort?: "asc" | "desc" | undefined;
            mapping?: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
            }>[] | undefined;
            gradient?: (Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }>)[] | undefined;
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mode: "gradient";
            palette: string;
        }> | undefined;
        drop_partial_intervals?: boolean | undefined;
        collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
        aggregate_first?: boolean | undefined;
    } & {
        field: string;
        operation: "date_histogram";
        suggested_interval: string;
        use_original_time_range: boolean;
        include_empty_rows: boolean;
    }> | Readonly<{
        includes?: Readonly<{
            as_regex?: boolean | undefined;
        } & {
            values: string[];
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mapping: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
                color: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>;
            }>[];
            mode: "categorical";
            palette: string;
        }> | Readonly<{
            sort?: "asc" | "desc" | undefined;
            mapping?: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
            }>[] | undefined;
            gradient?: (Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }>)[] | undefined;
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mode: "gradient";
            palette: string;
        }> | undefined;
        increase_accuracy?: boolean | undefined;
        excludes?: Readonly<{
            as_regex?: boolean | undefined;
        } & {
            values: string[];
        }> | undefined;
        other_bucket?: Readonly<{} & {
            include_documents_without_field: boolean;
        }> | undefined;
        rank_by?: Readonly<{} & {
            type: "alphabetical";
            direction: "asc" | "desc";
        }> | Readonly<{} & {
            type: "rare";
            max: number;
        }> | Readonly<{} & {
            type: "significant";
        }> | Readonly<{} & {
            type: "metric";
            direction: "asc" | "desc";
            metric_index: number;
        }> | Readonly<{} & {
            type: "custom";
            field: string;
            operation: "min" | "max" | "count" | "sum" | "median" | "average" | "unique_count" | "last_value" | "standard_deviation";
            direction: "asc" | "desc";
        }> | Readonly<{} & {
            type: "custom";
            field: string;
            operation: "percentile";
            direction: "asc" | "desc";
            percentile: number;
        }> | Readonly<{} & {
            type: "custom";
            field: string;
            operation: "percentile_rank";
            rank: number;
            direction: "asc" | "desc";
        }> | undefined;
        collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
        aggregate_first?: boolean | undefined;
    } & {
        limit: number;
        fields: string[];
        operation: "terms";
    }> | Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mapping: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
                color: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>;
            }>[];
            mode: "categorical";
            palette: string;
        }> | Readonly<{
            sort?: "asc" | "desc" | undefined;
            mapping?: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
            }>[] | undefined;
            gradient?: (Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }>)[] | undefined;
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mode: "gradient";
            palette: string;
        }> | undefined;
        collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
        aggregate_first?: boolean | undefined;
    } & {
        field: string;
        operation: "histogram";
        include_empty_rows: boolean;
        granularity: number | "auto";
    }> | Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mapping: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
                color: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>;
            }>[];
            mode: "categorical";
            palette: string;
        }> | Readonly<{
            sort?: "asc" | "desc" | undefined;
            mapping?: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
            }>[] | undefined;
            gradient?: (Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }>)[] | undefined;
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mode: "gradient";
            palette: string;
        }> | undefined;
        collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
        aggregate_first?: boolean | undefined;
    } & {
        field: string;
        operation: "range";
        ranges: Readonly<{
            lte?: number | undefined;
            label?: string | undefined;
            gt?: number | undefined;
        } & {}>[];
    }> | Readonly<{
        label?: string | undefined;
        color?: Readonly<{
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mapping: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
                color: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>;
            }>[];
            mode: "categorical";
            palette: string;
        }> | Readonly<{
            sort?: "asc" | "desc" | undefined;
            mapping?: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
            }>[] | undefined;
            gradient?: (Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }>)[] | undefined;
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mode: "gradient";
            palette: string;
        }> | undefined;
        collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
        aggregate_first?: boolean | undefined;
    } & {
        filters: Readonly<{
            label?: string | undefined;
        } & {
            filter: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }>;
        }>[];
        operation: "filters";
    }> | undefined>;
    y: import("@kbn/config-schema").Type<(Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        field?: string | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        operation: "count";
        empty_as_null: boolean;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        field: string;
        operation: "unique_count";
        empty_as_null: boolean;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        field: string;
        operation: "min" | "max" | "median" | "average" | "standard_deviation";
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        field: string;
        operation: "sum";
        empty_as_null: boolean;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        field: string;
        operation: "last_value";
        time_field: string;
        multi_value: boolean;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        field: string;
        operation: "percentile";
        percentile: number;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        field: string;
        operation: "percentile_rank";
        rank: number;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        operation: "differences";
        of: Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            field?: string | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            operation: "count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "unique_count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "min" | "max" | "median" | "average" | "standard_deviation";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "sum";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "last_value";
            time_field: string;
            multi_value: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "percentile";
            percentile: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "percentile_rank";
            rank: number;
        }>;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        operation: "moving_average";
        window: number;
        of: Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            field?: string | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            operation: "count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "unique_count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "min" | "max" | "median" | "average" | "standard_deviation";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "sum";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "last_value";
            time_field: string;
            multi_value: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "percentile";
            percentile: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
        } & {
            field: string;
            operation: "percentile_rank";
            rank: number;
        }>;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        field: string;
        operation: "cumulative_sum";
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        field: string;
        operation: "counter_rate";
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        operation: "formula";
        formula: string;
    }>)[]>;
    x: import("@kbn/config-schema").Type<Readonly<{
        label?: string | undefined;
        drop_partial_intervals?: boolean | undefined;
    } & {
        field: string;
        operation: "date_histogram";
        suggested_interval: string;
        use_original_time_range: boolean;
        include_empty_rows: boolean;
    }> | Readonly<{
        includes?: Readonly<{
            as_regex?: boolean | undefined;
        } & {
            values: string[];
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        increase_accuracy?: boolean | undefined;
        excludes?: Readonly<{
            as_regex?: boolean | undefined;
        } & {
            values: string[];
        }> | undefined;
        other_bucket?: Readonly<{} & {
            include_documents_without_field: boolean;
        }> | undefined;
        rank_by?: Readonly<{} & {
            type: "alphabetical";
            direction: "asc" | "desc";
        }> | Readonly<{} & {
            type: "rare";
            max: number;
        }> | Readonly<{} & {
            type: "significant";
        }> | Readonly<{} & {
            type: "metric";
            direction: "asc" | "desc";
            metric_index: number;
        }> | Readonly<{} & {
            type: "custom";
            field: string;
            operation: "min" | "max" | "count" | "sum" | "median" | "average" | "unique_count" | "last_value" | "standard_deviation";
            direction: "asc" | "desc";
        }> | Readonly<{} & {
            type: "custom";
            field: string;
            operation: "percentile";
            direction: "asc" | "desc";
            percentile: number;
        }> | Readonly<{} & {
            type: "custom";
            field: string;
            operation: "percentile_rank";
            rank: number;
            direction: "asc" | "desc";
        }> | undefined;
    } & {
        limit: number;
        fields: string[];
        operation: "terms";
    }> | Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
    } & {
        field: string;
        operation: "histogram";
        include_empty_rows: boolean;
        granularity: number | "auto";
    }> | Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
    } & {
        field: string;
        operation: "range";
        ranges: Readonly<{
            lte?: number | undefined;
            label?: string | undefined;
            gt?: number | undefined;
        } & {}>[];
    }> | Readonly<{
        label?: string | undefined;
    } & {
        filters: Readonly<{
            label?: string | undefined;
        } & {
            filter: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }>;
        }>[];
        operation: "filters";
    }> | undefined>;
    type: import("@kbn/config-schema").Type<"line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage">;
    data_source: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
        type: import("@kbn/config-schema").Type<"data_view_reference">;
        ref_id: import("@kbn/config-schema").Type<string>;
    } | {
        type: import("@kbn/config-schema").Type<"data_view_spec">;
        index_pattern: import("@kbn/config-schema").Type<string>;
        time_field: import("@kbn/config-schema").Type<string | undefined>;
        runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
            format: import("@kbn/config-schema").Type<Readonly<{
                params?: any;
            } & {
                type: string;
            }> | undefined>;
            custom_label: import("@kbn/config-schema").Type<string | undefined>;
            custom_description: import("@kbn/config-schema").Type<string | undefined>;
        } | {
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"composite">;
            fields: import("@kbn/config-schema").Type<Readonly<{
                format?: Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined;
                custom_label?: string | undefined;
                custom_description?: string | undefined;
            } & {
                name: string;
                type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
            }>[]>;
        }>[] | undefined>;
    }>>;
    ignore_global_filters: import("@kbn/config-schema").Type<boolean>;
    sampling: import("@kbn/config-schema").Type<number>;
}>;
/**
 * Data layer configuration for ES|QL queries with column-based metrics
 */
declare const xyDataLayerSchemaESQL: import("@kbn/config-schema").ObjectType<{
    breakdown_by: import("@kbn/config-schema").Type<Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mapping: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
                color: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>;
            }>[];
            mode: "categorical";
            palette: string;
        }> | Readonly<{
            sort?: "asc" | "desc" | undefined;
            mapping?: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
            }>[] | undefined;
            gradient?: (Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }>)[] | undefined;
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mode: "gradient";
            palette: string;
        }> | undefined;
        collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
    } & {
        column: string;
    }> | undefined>;
    y: import("@kbn/config-schema").Type<Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        column: string;
    }>[]>;
    x: import("@kbn/config-schema").Type<Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
    } & {
        column: string;
    }> | undefined>;
    type: import("@kbn/config-schema").Type<"line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage">;
    data_source: import("@kbn/config-schema").ObjectType<{
        type: import("@kbn/config-schema").Type<"esql">;
        query: import("@kbn/config-schema").Type<string>;
    }>;
    ignore_global_filters: import("@kbn/config-schema").Type<boolean>;
    sampling: import("@kbn/config-schema").Type<number>;
}>;
/**
 * Reference line layer for standard queries with threshold values
 */
declare const referenceLineLayerSchemaNoESQL: import("@kbn/config-schema").ObjectType<{
    type: import("@kbn/config-schema").Type<"reference_lines">;
    thresholds: import("@kbn/config-schema").Type<(Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        fill?: "above" | "below" | undefined;
        field?: string | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        operation: "count";
        empty_as_null: boolean;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        field: string;
        operation: "unique_count";
        empty_as_null: boolean;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        field: string;
        operation: "min" | "max" | "median" | "average" | "standard_deviation";
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        field: string;
        operation: "sum";
        empty_as_null: boolean;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        field: string;
        operation: "last_value";
        time_field: string;
        multi_value: boolean;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        field: string;
        operation: "percentile";
        percentile: number;
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        time_shift?: string | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        field: string;
        operation: "percentile_rank";
        rank: number;
    }> | Readonly<{
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        value: number;
        operation: "static_value";
    }> | Readonly<{
        filter?: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }> | undefined;
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        time_scale?: "m" | "s" | "h" | "d" | undefined;
        reduced_time_range?: string | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        operation: "formula";
        formula: string;
    }>)[]>;
    data_source: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
        type: import("@kbn/config-schema").Type<"data_view_reference">;
        ref_id: import("@kbn/config-schema").Type<string>;
    } | {
        type: import("@kbn/config-schema").Type<"data_view_spec">;
        index_pattern: import("@kbn/config-schema").Type<string>;
        time_field: import("@kbn/config-schema").Type<string | undefined>;
        runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
            format: import("@kbn/config-schema").Type<Readonly<{
                params?: any;
            } & {
                type: string;
            }> | undefined>;
            custom_label: import("@kbn/config-schema").Type<string | undefined>;
            custom_description: import("@kbn/config-schema").Type<string | undefined>;
        } | {
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"composite">;
            fields: import("@kbn/config-schema").Type<Readonly<{
                format?: Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined;
                custom_label?: string | undefined;
                custom_description?: string | undefined;
            } & {
                name: string;
                type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
            }>[]>;
        }>[] | undefined>;
    }>>;
    ignore_global_filters: import("@kbn/config-schema").Type<boolean>;
    sampling: import("@kbn/config-schema").Type<number>;
}>;
/**
 * Reference line layer for ES|QL queries with column-based thresholds
 */
declare const referenceLineLayerSchemaESQL: import("@kbn/config-schema").ObjectType<{
    type: import("@kbn/config-schema").Type<"reference_lines">;
    thresholds: import("@kbn/config-schema").Type<Readonly<{
        fill?: "above" | "below" | undefined;
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        position?: "auto" | "left" | "right" | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        axis_id?: "x" | "y" | "secondary_y" | undefined;
        stroke_width?: number | undefined;
        stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
    } & {
        column: string;
    }>[]>;
    data_source: import("@kbn/config-schema").ObjectType<{
        type: import("@kbn/config-schema").Type<"esql">;
        query: import("@kbn/config-schema").Type<string>;
    }>;
    ignore_global_filters: import("@kbn/config-schema").Type<boolean>;
    sampling: import("@kbn/config-schema").Type<number>;
}>;
/**
 * Annotation layer containing query-based, point, and range annotations (by-value)
 */
declare const annotationLayerByValueSchema: import("@kbn/config-schema").ObjectType<{
    type: import("@kbn/config-schema").Type<"annotations">;
    events: import("@kbn/config-schema").Type<(Readonly<{
        text?: Readonly<{
            field?: string | undefined;
        } & {
            visible: boolean;
        }> | undefined;
        line?: Readonly<{} & {
            stroke_width: number;
            stroke_dash: "dashed" | "dotted" | "solid";
        }> | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        extra_fields?: string[] | undefined;
    } & {
        type: "query";
        query: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }>;
        time_field: string;
    }> | Readonly<{
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        line?: Readonly<{} & {
            stroke_width: number;
            stroke_dash: "dashed" | "dotted" | "solid";
        }> | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
    } & {
        type: "point";
        timestamp: string | number;
    }> | Readonly<{
        fill?: "inside" | "outside" | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
    } & {
        type: "range";
        interval: Readonly<{} & {
            from: string | number;
            to: string | number;
        }>;
    }>)[]>;
    data_source: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
        type: import("@kbn/config-schema").Type<"data_view_reference">;
        ref_id: import("@kbn/config-schema").Type<string>;
    } | {
        type: import("@kbn/config-schema").Type<"data_view_spec">;
        index_pattern: import("@kbn/config-schema").Type<string>;
        time_field: import("@kbn/config-schema").Type<string | undefined>;
        runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
            format: import("@kbn/config-schema").Type<Readonly<{
                params?: any;
            } & {
                type: string;
            }> | undefined>;
            custom_label: import("@kbn/config-schema").Type<string | undefined>;
            custom_description: import("@kbn/config-schema").Type<string | undefined>;
        } | {
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"composite">;
            fields: import("@kbn/config-schema").Type<Readonly<{
                format?: Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined;
                custom_label?: string | undefined;
                custom_description?: string | undefined;
            } & {
                name: string;
                type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
            }>[]>;
        }>[] | undefined>;
    }>>;
    ignore_global_filters: import("@kbn/config-schema").Type<boolean>;
}>;
/**
 * By-reference annotation layer that links to a library annotation group
 */
declare const annotationByRefLayerSchema: import("@kbn/config-schema").ObjectType<{
    type: import("@kbn/config-schema").Type<"annotation_group">;
    group_id: import("@kbn/config-schema").Type<string>;
}>;
declare const annotationLayerSchema: import("./utils/object_union").ObjectUnionType<[import("@kbn/config-schema").ObjectType<{
    type: import("@kbn/config-schema").Type<"annotations">;
    events: import("@kbn/config-schema").Type<(Readonly<{
        text?: Readonly<{
            field?: string | undefined;
        } & {
            visible: boolean;
        }> | undefined;
        line?: Readonly<{} & {
            stroke_width: number;
            stroke_dash: "dashed" | "dotted" | "solid";
        }> | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        extra_fields?: string[] | undefined;
    } & {
        type: "query";
        query: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }>;
        time_field: string;
    }> | Readonly<{
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        line?: Readonly<{} & {
            stroke_width: number;
            stroke_dash: "dashed" | "dotted" | "solid";
        }> | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
    } & {
        type: "point";
        timestamp: string | number;
    }> | Readonly<{
        fill?: "inside" | "outside" | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
    } & {
        type: "range";
        interval: Readonly<{} & {
            from: string | number;
            to: string | number;
        }>;
    }>)[]>;
    data_source: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
        type: import("@kbn/config-schema").Type<"data_view_reference">;
        ref_id: import("@kbn/config-schema").Type<string>;
    } | {
        type: import("@kbn/config-schema").Type<"data_view_spec">;
        index_pattern: import("@kbn/config-schema").Type<string>;
        time_field: import("@kbn/config-schema").Type<string | undefined>;
        runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
            format: import("@kbn/config-schema").Type<Readonly<{
                params?: any;
            } & {
                type: string;
            }> | undefined>;
            custom_label: import("@kbn/config-schema").Type<string | undefined>;
            custom_description: import("@kbn/config-schema").Type<string | undefined>;
        } | {
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"composite">;
            fields: import("@kbn/config-schema").Type<Readonly<{
                format?: Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined;
                custom_label?: string | undefined;
                custom_description?: string | undefined;
            } & {
                name: string;
                type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
            }>[]>;
        }>[] | undefined>;
    }>>;
    ignore_global_filters: import("@kbn/config-schema").Type<boolean>;
}>, import("@kbn/config-schema").ObjectType<{
    type: import("@kbn/config-schema").Type<"annotation_group">;
    group_id: import("@kbn/config-schema").Type<string>;
}>], Readonly<{} & {
    type: "annotations";
    data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
        type: import("@kbn/config-schema").Type<"data_view_reference">;
        ref_id: import("@kbn/config-schema").Type<string>;
    } | {
        type: import("@kbn/config-schema").Type<"data_view_spec">;
        index_pattern: import("@kbn/config-schema").Type<string>;
        time_field: import("@kbn/config-schema").Type<string | undefined>;
        runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
            format: import("@kbn/config-schema").Type<Readonly<{
                params?: any;
            } & {
                type: string;
            }> | undefined>;
            custom_label: import("@kbn/config-schema").Type<string | undefined>;
            custom_description: import("@kbn/config-schema").Type<string | undefined>;
        } | {
            name: import("@kbn/config-schema").Type<string>;
            script: import("@kbn/config-schema").Type<string | undefined>;
            type: import("@kbn/config-schema").Type<"composite">;
            fields: import("@kbn/config-schema").Type<Readonly<{
                format?: Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined;
                custom_label?: string | undefined;
                custom_description?: string | undefined;
            } & {
                name: string;
                type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
            }>[]>;
        }>[] | undefined>;
    }>;
    events: (Readonly<{
        text?: Readonly<{
            field?: string | undefined;
        } & {
            visible: boolean;
        }> | undefined;
        line?: Readonly<{} & {
            stroke_width: number;
            stroke_dash: "dashed" | "dotted" | "solid";
        }> | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        extra_fields?: string[] | undefined;
    } & {
        type: "query";
        query: Readonly<{} & {
            expression: string;
            language: "kql" | "lucene";
        }>;
        time_field: string;
    }> | Readonly<{
        text?: Readonly<{} & {
            visible: boolean;
        }> | undefined;
        line?: Readonly<{} & {
            stroke_width: number;
            stroke_dash: "dashed" | "dotted" | "solid";
        }> | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
    } & {
        type: "point";
        timestamp: string | number;
    }> | Readonly<{
        fill?: "inside" | "outside" | undefined;
        label?: string | undefined;
        visible?: boolean | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
    } & {
        type: "range";
        interval: Readonly<{} & {
            from: string | number;
            to: string | number;
        }>;
    }>)[];
    ignore_global_filters: boolean;
}> | Readonly<{} & {
    type: "annotation_group";
    group_id: string;
}>>;
declare const xyLayerUnionESQL: import("./utils/object_union").ObjectUnionType<[import("@kbn/config-schema").ObjectType<{
    breakdown_by: import("@kbn/config-schema").Type<Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mapping: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
                color: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>;
            }>[];
            mode: "categorical";
            palette: string;
        }> | Readonly<{
            sort?: "asc" | "desc" | undefined;
            mapping?: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
            }>[] | undefined;
            gradient?: (Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }>)[] | undefined;
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mode: "gradient";
            palette: string;
        }> | undefined;
        collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
    } & {
        column: string;
    }> | undefined>;
    y: import("@kbn/config-schema").Type<Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        column: string;
    }>[]>;
    x: import("@kbn/config-schema").Type<Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
    } & {
        column: string;
    }> | undefined>;
    type: import("@kbn/config-schema").Type<"line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage">;
    data_source: import("@kbn/config-schema").ObjectType<{
        type: import("@kbn/config-schema").Type<"esql">;
        query: import("@kbn/config-schema").Type<string>;
    }>;
    ignore_global_filters: import("@kbn/config-schema").Type<boolean>;
    sampling: import("@kbn/config-schema").Type<number>;
}>], Readonly<{
    x?: Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
    } & {
        column: string;
    }> | undefined;
    breakdown_by?: Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mapping: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
                color: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>;
            }>[];
            mode: "categorical";
            palette: string;
        }> | Readonly<{
            sort?: "asc" | "desc" | undefined;
            mapping?: Readonly<{} & {
                values: (string | number | Readonly<{} & {
                    type: "range_key";
                    from: string | number;
                    to: string | number;
                    ranges: Readonly<{} & {
                        from: string | number;
                        label: string;
                        to: string | number;
                    }>[];
                }> | Readonly<{} & {
                    type: "multi_field_key";
                    keys: string[];
                }>)[];
            }>[] | undefined;
            gradient?: (Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }>)[] | undefined;
            unassigned?: Readonly<{
                palette?: string | undefined;
            } & {
                type: "from_palette";
                index: number;
            }> | Readonly<{} & {
                type: "color_code";
                value: string;
            }> | undefined;
        } & {
            mode: "gradient";
            palette: string;
        }> | undefined;
        collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
    } & {
        column: string;
    }> | undefined;
} & {
    type: "line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage";
    y: Readonly<{
        format?: Readonly<{
            suffix?: string | undefined;
        } & {
            type: "number" | "percent";
            compact: boolean;
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "bytes" | "bits";
            decimals: number;
        }> | Readonly<{
            suffix?: string | undefined;
        } & {
            type: "duration";
            from: string;
            to: string;
        }> | Readonly<{} & {
            type: "custom";
            pattern: string;
        }> | undefined;
        label?: string | undefined;
        color?: Readonly<{} & {
            type: "static";
            color: string;
        }> | Readonly<{} & {
            type: "auto";
        }> | undefined;
        axis_id?: "y" | "secondary_y" | undefined;
    } & {
        column: string;
    }>[];
    data_source: Readonly<{} & {
        type: "esql";
        query: string;
    }>;
    sampling: number;
    ignore_global_filters: boolean;
}>>;
/**
 * XY chart state for DSL layers
 */
export declare const xyStateSchemaNoESQL: import("@kbn/config-schema").ObjectType<{
    layers: import("@kbn/config-schema").Type<(Readonly<{
        x?: Readonly<{
            label?: string | undefined;
            drop_partial_intervals?: boolean | undefined;
        } & {
            field: string;
            operation: "date_histogram";
            suggested_interval: string;
            use_original_time_range: boolean;
            include_empty_rows: boolean;
        }> | Readonly<{
            includes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            increase_accuracy?: boolean | undefined;
            excludes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            other_bucket?: Readonly<{} & {
                include_documents_without_field: boolean;
            }> | undefined;
            rank_by?: Readonly<{} & {
                type: "alphabetical";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "rare";
                max: number;
            }> | Readonly<{} & {
                type: "significant";
            }> | Readonly<{} & {
                type: "metric";
                direction: "asc" | "desc";
                metric_index: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "min" | "max" | "count" | "sum" | "median" | "average" | "unique_count" | "last_value" | "standard_deviation";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile";
                direction: "asc" | "desc";
                percentile: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile_rank";
                rank: number;
                direction: "asc" | "desc";
            }> | undefined;
        } & {
            limit: number;
            fields: string[];
            operation: "terms";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            field: string;
            operation: "histogram";
            include_empty_rows: boolean;
            granularity: number | "auto";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            field: string;
            operation: "range";
            ranges: Readonly<{
                lte?: number | undefined;
                label?: string | undefined;
                gt?: number | undefined;
            } & {}>[];
        }> | Readonly<{
            label?: string | undefined;
        } & {
            filters: Readonly<{
                label?: string | undefined;
            } & {
                filter: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }>;
            }>[];
            operation: "filters";
        }> | undefined;
        breakdown_by?: Readonly<{
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            drop_partial_intervals?: boolean | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "date_histogram";
            suggested_interval: string;
            use_original_time_range: boolean;
            include_empty_rows: boolean;
        }> | Readonly<{
            includes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            increase_accuracy?: boolean | undefined;
            excludes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            other_bucket?: Readonly<{} & {
                include_documents_without_field: boolean;
            }> | undefined;
            rank_by?: Readonly<{} & {
                type: "alphabetical";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "rare";
                max: number;
            }> | Readonly<{} & {
                type: "significant";
            }> | Readonly<{} & {
                type: "metric";
                direction: "asc" | "desc";
                metric_index: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "min" | "max" | "count" | "sum" | "median" | "average" | "unique_count" | "last_value" | "standard_deviation";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile";
                direction: "asc" | "desc";
                percentile: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile_rank";
                rank: number;
                direction: "asc" | "desc";
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            limit: number;
            fields: string[];
            operation: "terms";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "histogram";
            include_empty_rows: boolean;
            granularity: number | "auto";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "range";
            ranges: Readonly<{
                lte?: number | undefined;
                label?: string | undefined;
                gt?: number | undefined;
            } & {}>[];
        }> | Readonly<{
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            filters: Readonly<{
                label?: string | undefined;
            } & {
                filter: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }>;
            }>[];
            operation: "filters";
        }> | undefined;
    } & {
        type: "line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage";
        y: (Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            field?: string | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "unique_count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "min" | "max" | "median" | "average" | "standard_deviation";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "sum";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "last_value";
            time_field: string;
            multi_value: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "percentile";
            percentile: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "percentile_rank";
            rank: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "differences";
            of: Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                field?: string | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                operation: "count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "unique_count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "min" | "max" | "median" | "average" | "standard_deviation";
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "sum";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "last_value";
                time_field: string;
                multi_value: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile";
                percentile: number;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile_rank";
                rank: number;
            }>;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "moving_average";
            window: number;
            of: Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                field?: string | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                operation: "count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "unique_count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "min" | "max" | "median" | "average" | "standard_deviation";
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "sum";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "last_value";
                time_field: string;
                multi_value: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile";
                percentile: number;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile_rank";
                rank: number;
            }>;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "cumulative_sum";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "counter_rate";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "formula";
            formula: string;
        }>)[];
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
    }> | Readonly<{} & {
        type: "reference_lines";
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
        thresholds: (Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            field?: string | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            operation: "count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "unique_count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "min" | "max" | "median" | "average" | "standard_deviation";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "sum";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "last_value";
            time_field: string;
            multi_value: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "percentile";
            percentile: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "percentile_rank";
            rank: number;
        }> | Readonly<{
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            value: number;
            operation: "static_value";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            operation: "formula";
            formula: string;
        }>)[];
    }> | Readonly<{} & {
        type: "annotations";
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        events: (Readonly<{
            text?: Readonly<{
                field?: string | undefined;
            } & {
                visible: boolean;
            }> | undefined;
            line?: Readonly<{} & {
                stroke_width: number;
                stroke_dash: "dashed" | "dotted" | "solid";
            }> | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            extra_fields?: string[] | undefined;
        } & {
            type: "query";
            query: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }>;
            time_field: string;
        }> | Readonly<{
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            line?: Readonly<{} & {
                stroke_width: number;
                stroke_dash: "dashed" | "dotted" | "solid";
            }> | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        } & {
            type: "point";
            timestamp: string | number;
        }> | Readonly<{
            fill?: "inside" | "outside" | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
        } & {
            type: "range";
            interval: Readonly<{} & {
                from: string | number;
                to: string | number;
            }>;
        }>)[];
        ignore_global_filters: boolean;
    }> | Readonly<{} & {
        type: "annotation_group";
        group_id: string;
    }>)[]>;
    query: import("@kbn/config-schema").Type<Readonly<{} & {
        expression: string;
        language: "kql" | "lucene";
    }> | undefined>;
    legend: import("@kbn/config-schema").Type<Readonly<{
        position?: "top" | "bottom" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | Readonly<{} & {
            type: "list";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        size?: "m" | "s" | "l" | "auto" | "xl" | undefined;
        position?: "left" | "right" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        position?: "top_left" | "bottom_right" | "top_right" | "bottom_left" | undefined;
        columns?: number | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
    } & {
        placement: "inside";
    }> | undefined>;
    axis: import("@kbn/config-schema").Type<Readonly<{
        x?: Readonly<{
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "linear" | "ordinal" | "temporal" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "fit";
            }> | Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "custom";
                min: number;
                max: number;
            }> | undefined;
        } & {}> | undefined;
        y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
        secondary_y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    styling: import("@kbn/config-schema").Type<Readonly<{
        overlays?: Readonly<{
            partial_buckets?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            current_time_marker?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
        points?: Readonly<{
            visibility?: "hidden" | "auto" | "visible" | undefined;
        } & {}> | undefined;
        fitting?: Readonly<{
            extend?: "none" | "zero" | "nearest" | undefined;
            emphasize?: boolean | undefined;
        } & {
            type: "none" | "linear" | "average" | "zero" | "carry" | "lookahead" | "nearest";
        }> | undefined;
        interpolation?: "linear" | "smooth" | "stepped" | undefined;
        areas?: Readonly<{
            fill_opacity?: number | undefined;
        } & {}> | undefined;
        bars?: Readonly<{
            minimum_height?: number | undefined;
            data_labels?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    title: import("@kbn/config-schema").Type<string | undefined>;
    description: import("@kbn/config-schema").Type<string | undefined>;
    filters: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "condition"> & {
        type: import("@kbn/config-schema").Type<"condition">;
        condition: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string | number | boolean>;
            operator: import("@kbn/config-schema").Type<"is">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
            operator: import("@kbn/config-schema").Type<"is_one_of">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").ObjectType<{
                gte: import("@kbn/config-schema").Type<string | number | undefined>;
                lte: import("@kbn/config-schema").Type<string | number | undefined>;
                gt: import("@kbn/config-schema").Type<string | number | undefined>;
                lt: import("@kbn/config-schema").Type<string | number | undefined>;
                format: import("@kbn/config-schema").Type<string | undefined>;
            }>;
            operator: import("@kbn/config-schema").Type<"range">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "operator"> & {
            operator: import("@kbn/config-schema").Type<"exists">;
        })>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "group"> & {
        type: import("@kbn/config-schema").Type<"group">;
        group: import("@kbn/config-schema").ObjectType<{
            operator: import("@kbn/config-schema").Type<"or" | "and">;
            conditions: import("@kbn/config-schema").Type<(import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string | number | boolean>;
                operator: import("@kbn/config-schema").Type<"is">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
                operator: import("@kbn/config-schema").Type<"is_one_of">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").ObjectType<{
                    gte: import("@kbn/config-schema").Type<string | number | undefined>;
                    lte: import("@kbn/config-schema").Type<string | number | undefined>;
                    gt: import("@kbn/config-schema").Type<string | number | undefined>;
                    lt: import("@kbn/config-schema").Type<string | number | undefined>;
                    format: import("@kbn/config-schema").Type<string | undefined>;
                }>;
                operator: import("@kbn/config-schema").Type<"range">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "operator"> & {
                operator: import("@kbn/config-schema").Type<"exists">;
            })> | import("@kbn/as-code-filters-schema").AsCodeGroupFilterRecursive)[]>;
        }>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "params" | "type" | "field" | "dsl"> & {
        params: import("@kbn/config-schema").Type<any>;
        type: import("@kbn/config-schema").Type<"dsl">;
        field: import("@kbn/config-schema").Type<string | undefined>;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "dsl"> & {
        type: import("@kbn/config-schema").Type<"spatial">;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    })>[] | undefined>;
    type: import("@kbn/config-schema").Type<"xy">;
}>;
/**
 * XY chart state for ES|QL layers only (reference lines are not supported)
 */
export declare const xyStateSchemaESQL: import("@kbn/config-schema").ObjectType<{
    layers: import("@kbn/config-schema").Type<Readonly<{
        x?: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            column: string;
        }> | undefined;
        breakdown_by?: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
        } & {
            column: string;
        }> | undefined;
    } & {
        type: "line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage";
        y: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            column: string;
        }>[];
        data_source: Readonly<{} & {
            type: "esql";
            query: string;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
    }>[]>;
    legend: import("@kbn/config-schema").Type<Readonly<{
        position?: "top" | "bottom" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | Readonly<{} & {
            type: "list";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        size?: "m" | "s" | "l" | "auto" | "xl" | undefined;
        position?: "left" | "right" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        position?: "top_left" | "bottom_right" | "top_right" | "bottom_left" | undefined;
        columns?: number | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
    } & {
        placement: "inside";
    }> | undefined>;
    axis: import("@kbn/config-schema").Type<Readonly<{
        x?: Readonly<{
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "linear" | "ordinal" | "temporal" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "fit";
            }> | Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "custom";
                min: number;
                max: number;
            }> | undefined;
        } & {}> | undefined;
        y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
        secondary_y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    styling: import("@kbn/config-schema").Type<Readonly<{
        overlays?: Readonly<{
            partial_buckets?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            current_time_marker?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
        points?: Readonly<{
            visibility?: "hidden" | "auto" | "visible" | undefined;
        } & {}> | undefined;
        fitting?: Readonly<{
            extend?: "none" | "zero" | "nearest" | undefined;
            emphasize?: boolean | undefined;
        } & {
            type: "none" | "linear" | "average" | "zero" | "carry" | "lookahead" | "nearest";
        }> | undefined;
        interpolation?: "linear" | "smooth" | "stepped" | undefined;
        areas?: Readonly<{
            fill_opacity?: number | undefined;
        } & {}> | undefined;
        bars?: Readonly<{
            minimum_height?: number | undefined;
            data_labels?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    title: import("@kbn/config-schema").Type<string | undefined>;
    description: import("@kbn/config-schema").Type<string | undefined>;
    filters: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "condition"> & {
        type: import("@kbn/config-schema").Type<"condition">;
        condition: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string | number | boolean>;
            operator: import("@kbn/config-schema").Type<"is">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
            operator: import("@kbn/config-schema").Type<"is_one_of">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").ObjectType<{
                gte: import("@kbn/config-schema").Type<string | number | undefined>;
                lte: import("@kbn/config-schema").Type<string | number | undefined>;
                gt: import("@kbn/config-schema").Type<string | number | undefined>;
                lt: import("@kbn/config-schema").Type<string | number | undefined>;
                format: import("@kbn/config-schema").Type<string | undefined>;
            }>;
            operator: import("@kbn/config-schema").Type<"range">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "operator"> & {
            operator: import("@kbn/config-schema").Type<"exists">;
        })>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "group"> & {
        type: import("@kbn/config-schema").Type<"group">;
        group: import("@kbn/config-schema").ObjectType<{
            operator: import("@kbn/config-schema").Type<"or" | "and">;
            conditions: import("@kbn/config-schema").Type<(import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string | number | boolean>;
                operator: import("@kbn/config-schema").Type<"is">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
                operator: import("@kbn/config-schema").Type<"is_one_of">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").ObjectType<{
                    gte: import("@kbn/config-schema").Type<string | number | undefined>;
                    lte: import("@kbn/config-schema").Type<string | number | undefined>;
                    gt: import("@kbn/config-schema").Type<string | number | undefined>;
                    lt: import("@kbn/config-schema").Type<string | number | undefined>;
                    format: import("@kbn/config-schema").Type<string | undefined>;
                }>;
                operator: import("@kbn/config-schema").Type<"range">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "operator"> & {
                operator: import("@kbn/config-schema").Type<"exists">;
            })> | import("@kbn/as-code-filters-schema").AsCodeGroupFilterRecursive)[]>;
        }>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "params" | "type" | "field" | "dsl"> & {
        params: import("@kbn/config-schema").Type<any>;
        type: import("@kbn/config-schema").Type<"dsl">;
        field: import("@kbn/config-schema").Type<string | undefined>;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "dsl"> & {
        type: import("@kbn/config-schema").Type<"spatial">;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    })>[] | undefined>;
    type: import("@kbn/config-schema").Type<"xy">;
}>;
/**
 * XY chart state
 */
export declare const xyStateSchema: import("./utils/object_union").ObjectUnionType<[import("@kbn/config-schema").ObjectType<{
    layers: import("@kbn/config-schema").Type<(Readonly<{
        x?: Readonly<{
            label?: string | undefined;
            drop_partial_intervals?: boolean | undefined;
        } & {
            field: string;
            operation: "date_histogram";
            suggested_interval: string;
            use_original_time_range: boolean;
            include_empty_rows: boolean;
        }> | Readonly<{
            includes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            increase_accuracy?: boolean | undefined;
            excludes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            other_bucket?: Readonly<{} & {
                include_documents_without_field: boolean;
            }> | undefined;
            rank_by?: Readonly<{} & {
                type: "alphabetical";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "rare";
                max: number;
            }> | Readonly<{} & {
                type: "significant";
            }> | Readonly<{} & {
                type: "metric";
                direction: "asc" | "desc";
                metric_index: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "min" | "max" | "count" | "sum" | "median" | "average" | "unique_count" | "last_value" | "standard_deviation";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile";
                direction: "asc" | "desc";
                percentile: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile_rank";
                rank: number;
                direction: "asc" | "desc";
            }> | undefined;
        } & {
            limit: number;
            fields: string[];
            operation: "terms";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            field: string;
            operation: "histogram";
            include_empty_rows: boolean;
            granularity: number | "auto";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            field: string;
            operation: "range";
            ranges: Readonly<{
                lte?: number | undefined;
                label?: string | undefined;
                gt?: number | undefined;
            } & {}>[];
        }> | Readonly<{
            label?: string | undefined;
        } & {
            filters: Readonly<{
                label?: string | undefined;
            } & {
                filter: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }>;
            }>[];
            operation: "filters";
        }> | undefined;
        breakdown_by?: Readonly<{
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            drop_partial_intervals?: boolean | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "date_histogram";
            suggested_interval: string;
            use_original_time_range: boolean;
            include_empty_rows: boolean;
        }> | Readonly<{
            includes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            increase_accuracy?: boolean | undefined;
            excludes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            other_bucket?: Readonly<{} & {
                include_documents_without_field: boolean;
            }> | undefined;
            rank_by?: Readonly<{} & {
                type: "alphabetical";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "rare";
                max: number;
            }> | Readonly<{} & {
                type: "significant";
            }> | Readonly<{} & {
                type: "metric";
                direction: "asc" | "desc";
                metric_index: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "min" | "max" | "count" | "sum" | "median" | "average" | "unique_count" | "last_value" | "standard_deviation";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile";
                direction: "asc" | "desc";
                percentile: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile_rank";
                rank: number;
                direction: "asc" | "desc";
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            limit: number;
            fields: string[];
            operation: "terms";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "histogram";
            include_empty_rows: boolean;
            granularity: number | "auto";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "range";
            ranges: Readonly<{
                lte?: number | undefined;
                label?: string | undefined;
                gt?: number | undefined;
            } & {}>[];
        }> | Readonly<{
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            filters: Readonly<{
                label?: string | undefined;
            } & {
                filter: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }>;
            }>[];
            operation: "filters";
        }> | undefined;
    } & {
        type: "line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage";
        y: (Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            field?: string | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "unique_count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "min" | "max" | "median" | "average" | "standard_deviation";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "sum";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "last_value";
            time_field: string;
            multi_value: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "percentile";
            percentile: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "percentile_rank";
            rank: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "differences";
            of: Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                field?: string | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                operation: "count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "unique_count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "min" | "max" | "median" | "average" | "standard_deviation";
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "sum";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "last_value";
                time_field: string;
                multi_value: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile";
                percentile: number;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile_rank";
                rank: number;
            }>;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "moving_average";
            window: number;
            of: Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                field?: string | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                operation: "count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "unique_count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "min" | "max" | "median" | "average" | "standard_deviation";
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "sum";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "last_value";
                time_field: string;
                multi_value: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile";
                percentile: number;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile_rank";
                rank: number;
            }>;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "cumulative_sum";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "counter_rate";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "formula";
            formula: string;
        }>)[];
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
    }> | Readonly<{} & {
        type: "reference_lines";
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
        thresholds: (Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            field?: string | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            operation: "count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "unique_count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "min" | "max" | "median" | "average" | "standard_deviation";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "sum";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "last_value";
            time_field: string;
            multi_value: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "percentile";
            percentile: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "percentile_rank";
            rank: number;
        }> | Readonly<{
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            value: number;
            operation: "static_value";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            operation: "formula";
            formula: string;
        }>)[];
    }> | Readonly<{} & {
        type: "annotations";
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        events: (Readonly<{
            text?: Readonly<{
                field?: string | undefined;
            } & {
                visible: boolean;
            }> | undefined;
            line?: Readonly<{} & {
                stroke_width: number;
                stroke_dash: "dashed" | "dotted" | "solid";
            }> | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            extra_fields?: string[] | undefined;
        } & {
            type: "query";
            query: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }>;
            time_field: string;
        }> | Readonly<{
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            line?: Readonly<{} & {
                stroke_width: number;
                stroke_dash: "dashed" | "dotted" | "solid";
            }> | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        } & {
            type: "point";
            timestamp: string | number;
        }> | Readonly<{
            fill?: "inside" | "outside" | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
        } & {
            type: "range";
            interval: Readonly<{} & {
                from: string | number;
                to: string | number;
            }>;
        }>)[];
        ignore_global_filters: boolean;
    }> | Readonly<{} & {
        type: "annotation_group";
        group_id: string;
    }>)[]>;
    query: import("@kbn/config-schema").Type<Readonly<{} & {
        expression: string;
        language: "kql" | "lucene";
    }> | undefined>;
    legend: import("@kbn/config-schema").Type<Readonly<{
        position?: "top" | "bottom" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | Readonly<{} & {
            type: "list";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        size?: "m" | "s" | "l" | "auto" | "xl" | undefined;
        position?: "left" | "right" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        position?: "top_left" | "bottom_right" | "top_right" | "bottom_left" | undefined;
        columns?: number | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
    } & {
        placement: "inside";
    }> | undefined>;
    axis: import("@kbn/config-schema").Type<Readonly<{
        x?: Readonly<{
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "linear" | "ordinal" | "temporal" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "fit";
            }> | Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "custom";
                min: number;
                max: number;
            }> | undefined;
        } & {}> | undefined;
        y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
        secondary_y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    styling: import("@kbn/config-schema").Type<Readonly<{
        overlays?: Readonly<{
            partial_buckets?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            current_time_marker?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
        points?: Readonly<{
            visibility?: "hidden" | "auto" | "visible" | undefined;
        } & {}> | undefined;
        fitting?: Readonly<{
            extend?: "none" | "zero" | "nearest" | undefined;
            emphasize?: boolean | undefined;
        } & {
            type: "none" | "linear" | "average" | "zero" | "carry" | "lookahead" | "nearest";
        }> | undefined;
        interpolation?: "linear" | "smooth" | "stepped" | undefined;
        areas?: Readonly<{
            fill_opacity?: number | undefined;
        } & {}> | undefined;
        bars?: Readonly<{
            minimum_height?: number | undefined;
            data_labels?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    title: import("@kbn/config-schema").Type<string | undefined>;
    description: import("@kbn/config-schema").Type<string | undefined>;
    filters: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "condition"> & {
        type: import("@kbn/config-schema").Type<"condition">;
        condition: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string | number | boolean>;
            operator: import("@kbn/config-schema").Type<"is">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
            operator: import("@kbn/config-schema").Type<"is_one_of">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").ObjectType<{
                gte: import("@kbn/config-schema").Type<string | number | undefined>;
                lte: import("@kbn/config-schema").Type<string | number | undefined>;
                gt: import("@kbn/config-schema").Type<string | number | undefined>;
                lt: import("@kbn/config-schema").Type<string | number | undefined>;
                format: import("@kbn/config-schema").Type<string | undefined>;
            }>;
            operator: import("@kbn/config-schema").Type<"range">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "operator"> & {
            operator: import("@kbn/config-schema").Type<"exists">;
        })>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "group"> & {
        type: import("@kbn/config-schema").Type<"group">;
        group: import("@kbn/config-schema").ObjectType<{
            operator: import("@kbn/config-schema").Type<"or" | "and">;
            conditions: import("@kbn/config-schema").Type<(import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string | number | boolean>;
                operator: import("@kbn/config-schema").Type<"is">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
                operator: import("@kbn/config-schema").Type<"is_one_of">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").ObjectType<{
                    gte: import("@kbn/config-schema").Type<string | number | undefined>;
                    lte: import("@kbn/config-schema").Type<string | number | undefined>;
                    gt: import("@kbn/config-schema").Type<string | number | undefined>;
                    lt: import("@kbn/config-schema").Type<string | number | undefined>;
                    format: import("@kbn/config-schema").Type<string | undefined>;
                }>;
                operator: import("@kbn/config-schema").Type<"range">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "operator"> & {
                operator: import("@kbn/config-schema").Type<"exists">;
            })> | import("@kbn/as-code-filters-schema").AsCodeGroupFilterRecursive)[]>;
        }>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "params" | "type" | "field" | "dsl"> & {
        params: import("@kbn/config-schema").Type<any>;
        type: import("@kbn/config-schema").Type<"dsl">;
        field: import("@kbn/config-schema").Type<string | undefined>;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "dsl"> & {
        type: import("@kbn/config-schema").Type<"spatial">;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    })>[] | undefined>;
    type: import("@kbn/config-schema").Type<"xy">;
}>, import("@kbn/config-schema").ObjectType<{
    layers: import("@kbn/config-schema").Type<Readonly<{
        x?: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            column: string;
        }> | undefined;
        breakdown_by?: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
        } & {
            column: string;
        }> | undefined;
    } & {
        type: "line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage";
        y: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            column: string;
        }>[];
        data_source: Readonly<{} & {
            type: "esql";
            query: string;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
    }>[]>;
    legend: import("@kbn/config-schema").Type<Readonly<{
        position?: "top" | "bottom" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | Readonly<{} & {
            type: "list";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        size?: "m" | "s" | "l" | "auto" | "xl" | undefined;
        position?: "left" | "right" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        position?: "top_left" | "bottom_right" | "top_right" | "bottom_left" | undefined;
        columns?: number | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
    } & {
        placement: "inside";
    }> | undefined>;
    axis: import("@kbn/config-schema").Type<Readonly<{
        x?: Readonly<{
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "linear" | "ordinal" | "temporal" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "fit";
            }> | Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "custom";
                min: number;
                max: number;
            }> | undefined;
        } & {}> | undefined;
        y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
        secondary_y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    styling: import("@kbn/config-schema").Type<Readonly<{
        overlays?: Readonly<{
            partial_buckets?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            current_time_marker?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
        points?: Readonly<{
            visibility?: "hidden" | "auto" | "visible" | undefined;
        } & {}> | undefined;
        fitting?: Readonly<{
            extend?: "none" | "zero" | "nearest" | undefined;
            emphasize?: boolean | undefined;
        } & {
            type: "none" | "linear" | "average" | "zero" | "carry" | "lookahead" | "nearest";
        }> | undefined;
        interpolation?: "linear" | "smooth" | "stepped" | undefined;
        areas?: Readonly<{
            fill_opacity?: number | undefined;
        } & {}> | undefined;
        bars?: Readonly<{
            minimum_height?: number | undefined;
            data_labels?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined>;
    title: import("@kbn/config-schema").Type<string | undefined>;
    description: import("@kbn/config-schema").Type<string | undefined>;
    filters: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "condition"> & {
        type: import("@kbn/config-schema").Type<"condition">;
        condition: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string | number | boolean>;
            operator: import("@kbn/config-schema").Type<"is">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
            operator: import("@kbn/config-schema").Type<"is_one_of">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").ObjectType<{
                gte: import("@kbn/config-schema").Type<string | number | undefined>;
                lte: import("@kbn/config-schema").Type<string | number | undefined>;
                gt: import("@kbn/config-schema").Type<string | number | undefined>;
                lt: import("@kbn/config-schema").Type<string | number | undefined>;
                format: import("@kbn/config-schema").Type<string | undefined>;
            }>;
            operator: import("@kbn/config-schema").Type<"range">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "operator"> & {
            operator: import("@kbn/config-schema").Type<"exists">;
        })>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "group"> & {
        type: import("@kbn/config-schema").Type<"group">;
        group: import("@kbn/config-schema").ObjectType<{
            operator: import("@kbn/config-schema").Type<"or" | "and">;
            conditions: import("@kbn/config-schema").Type<(import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string | number | boolean>;
                operator: import("@kbn/config-schema").Type<"is">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
                operator: import("@kbn/config-schema").Type<"is_one_of">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").ObjectType<{
                    gte: import("@kbn/config-schema").Type<string | number | undefined>;
                    lte: import("@kbn/config-schema").Type<string | number | undefined>;
                    gt: import("@kbn/config-schema").Type<string | number | undefined>;
                    lt: import("@kbn/config-schema").Type<string | number | undefined>;
                    format: import("@kbn/config-schema").Type<string | undefined>;
                }>;
                operator: import("@kbn/config-schema").Type<"range">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "operator"> & {
                operator: import("@kbn/config-schema").Type<"exists">;
            })> | import("@kbn/as-code-filters-schema").AsCodeGroupFilterRecursive)[]>;
        }>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "params" | "type" | "field" | "dsl"> & {
        params: import("@kbn/config-schema").Type<any>;
        type: import("@kbn/config-schema").Type<"dsl">;
        field: import("@kbn/config-schema").Type<string | undefined>;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "dsl"> & {
        type: import("@kbn/config-schema").Type<"spatial">;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    })>[] | undefined>;
    type: import("@kbn/config-schema").Type<"xy">;
}>], Readonly<{
    description?: string | undefined;
    filters?: import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "condition"> & {
        type: import("@kbn/config-schema").Type<"condition">;
        condition: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string | number | boolean>;
            operator: import("@kbn/config-schema").Type<"is">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
            operator: import("@kbn/config-schema").Type<"is_one_of">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").ObjectType<{
                gte: import("@kbn/config-schema").Type<string | number | undefined>;
                lte: import("@kbn/config-schema").Type<string | number | undefined>;
                gt: import("@kbn/config-schema").Type<string | number | undefined>;
                lt: import("@kbn/config-schema").Type<string | number | undefined>;
                format: import("@kbn/config-schema").Type<string | undefined>;
            }>;
            operator: import("@kbn/config-schema").Type<"range">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "operator"> & {
            operator: import("@kbn/config-schema").Type<"exists">;
        })>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "group"> & {
        type: import("@kbn/config-schema").Type<"group">;
        group: import("@kbn/config-schema").ObjectType<{
            operator: import("@kbn/config-schema").Type<"or" | "and">;
            conditions: import("@kbn/config-schema").Type<(import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string | number | boolean>;
                operator: import("@kbn/config-schema").Type<"is">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
                operator: import("@kbn/config-schema").Type<"is_one_of">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").ObjectType<{
                    gte: import("@kbn/config-schema").Type<string | number | undefined>;
                    lte: import("@kbn/config-schema").Type<string | number | undefined>;
                    gt: import("@kbn/config-schema").Type<string | number | undefined>;
                    lt: import("@kbn/config-schema").Type<string | number | undefined>;
                    format: import("@kbn/config-schema").Type<string | undefined>;
                }>;
                operator: import("@kbn/config-schema").Type<"range">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "operator"> & {
                operator: import("@kbn/config-schema").Type<"exists">;
            })> | import("@kbn/as-code-filters-schema").AsCodeGroupFilterRecursive)[]>;
        }>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "params" | "type" | "field" | "dsl"> & {
        params: import("@kbn/config-schema").Type<any>;
        type: import("@kbn/config-schema").Type<"dsl">;
        field: import("@kbn/config-schema").Type<string | undefined>;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "dsl"> & {
        type: import("@kbn/config-schema").Type<"spatial">;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    })>[] | undefined;
    query?: Readonly<{} & {
        expression: string;
        language: "kql" | "lucene";
    }> | undefined;
    title?: string | undefined;
    legend?: Readonly<{
        position?: "top" | "bottom" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | Readonly<{} & {
            type: "list";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        size?: "m" | "s" | "l" | "auto" | "xl" | undefined;
        position?: "left" | "right" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        position?: "top_left" | "bottom_right" | "top_right" | "bottom_left" | undefined;
        columns?: number | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
    } & {
        placement: "inside";
    }> | undefined;
    styling?: Readonly<{
        overlays?: Readonly<{
            partial_buckets?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            current_time_marker?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
        points?: Readonly<{
            visibility?: "hidden" | "auto" | "visible" | undefined;
        } & {}> | undefined;
        fitting?: Readonly<{
            extend?: "none" | "zero" | "nearest" | undefined;
            emphasize?: boolean | undefined;
        } & {
            type: "none" | "linear" | "average" | "zero" | "carry" | "lookahead" | "nearest";
        }> | undefined;
        interpolation?: "linear" | "smooth" | "stepped" | undefined;
        areas?: Readonly<{
            fill_opacity?: number | undefined;
        } & {}> | undefined;
        bars?: Readonly<{
            minimum_height?: number | undefined;
            data_labels?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined;
    axis?: Readonly<{
        x?: Readonly<{
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "linear" | "ordinal" | "temporal" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "fit";
            }> | Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "custom";
                min: number;
                max: number;
            }> | undefined;
        } & {}> | undefined;
        y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
        secondary_y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined;
} & {
    type: "xy";
    layers: (Readonly<{
        x?: Readonly<{
            label?: string | undefined;
            drop_partial_intervals?: boolean | undefined;
        } & {
            field: string;
            operation: "date_histogram";
            suggested_interval: string;
            use_original_time_range: boolean;
            include_empty_rows: boolean;
        }> | Readonly<{
            includes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            increase_accuracy?: boolean | undefined;
            excludes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            other_bucket?: Readonly<{} & {
                include_documents_without_field: boolean;
            }> | undefined;
            rank_by?: Readonly<{} & {
                type: "alphabetical";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "rare";
                max: number;
            }> | Readonly<{} & {
                type: "significant";
            }> | Readonly<{} & {
                type: "metric";
                direction: "asc" | "desc";
                metric_index: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "min" | "max" | "count" | "sum" | "median" | "average" | "unique_count" | "last_value" | "standard_deviation";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile";
                direction: "asc" | "desc";
                percentile: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile_rank";
                rank: number;
                direction: "asc" | "desc";
            }> | undefined;
        } & {
            limit: number;
            fields: string[];
            operation: "terms";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            field: string;
            operation: "histogram";
            include_empty_rows: boolean;
            granularity: number | "auto";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            field: string;
            operation: "range";
            ranges: Readonly<{
                lte?: number | undefined;
                label?: string | undefined;
                gt?: number | undefined;
            } & {}>[];
        }> | Readonly<{
            label?: string | undefined;
        } & {
            filters: Readonly<{
                label?: string | undefined;
            } & {
                filter: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }>;
            }>[];
            operation: "filters";
        }> | undefined;
        breakdown_by?: Readonly<{
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            drop_partial_intervals?: boolean | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "date_histogram";
            suggested_interval: string;
            use_original_time_range: boolean;
            include_empty_rows: boolean;
        }> | Readonly<{
            includes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            increase_accuracy?: boolean | undefined;
            excludes?: Readonly<{
                as_regex?: boolean | undefined;
            } & {
                values: string[];
            }> | undefined;
            other_bucket?: Readonly<{} & {
                include_documents_without_field: boolean;
            }> | undefined;
            rank_by?: Readonly<{} & {
                type: "alphabetical";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "rare";
                max: number;
            }> | Readonly<{} & {
                type: "significant";
            }> | Readonly<{} & {
                type: "metric";
                direction: "asc" | "desc";
                metric_index: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "min" | "max" | "count" | "sum" | "median" | "average" | "unique_count" | "last_value" | "standard_deviation";
                direction: "asc" | "desc";
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile";
                direction: "asc" | "desc";
                percentile: number;
            }> | Readonly<{} & {
                type: "custom";
                field: string;
                operation: "percentile_rank";
                rank: number;
                direction: "asc" | "desc";
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            limit: number;
            fields: string[];
            operation: "terms";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "histogram";
            include_empty_rows: boolean;
            granularity: number | "auto";
        }> | Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            field: string;
            operation: "range";
            ranges: Readonly<{
                lte?: number | undefined;
                label?: string | undefined;
                gt?: number | undefined;
            } & {}>[];
        }> | Readonly<{
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
            aggregate_first?: boolean | undefined;
        } & {
            filters: Readonly<{
                label?: string | undefined;
            } & {
                filter: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }>;
            }>[];
            operation: "filters";
        }> | undefined;
    } & {
        type: "line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage";
        y: (Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            field?: string | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "unique_count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "min" | "max" | "median" | "average" | "standard_deviation";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "sum";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "last_value";
            time_field: string;
            multi_value: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "percentile";
            percentile: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "percentile_rank";
            rank: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "differences";
            of: Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                field?: string | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                operation: "count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "unique_count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "min" | "max" | "median" | "average" | "standard_deviation";
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "sum";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "last_value";
                time_field: string;
                multi_value: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile";
                percentile: number;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile_rank";
                rank: number;
            }>;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "moving_average";
            window: number;
            of: Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                field?: string | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                operation: "count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "unique_count";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "min" | "max" | "median" | "average" | "standard_deviation";
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "sum";
                empty_as_null: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "last_value";
                time_field: string;
                multi_value: boolean;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile";
                percentile: number;
            }> | Readonly<{
                filter?: Readonly<{} & {
                    expression: string;
                    language: "kql" | "lucene";
                }> | undefined;
                format?: Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "number" | "percent";
                    compact: boolean;
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "bytes" | "bits";
                    decimals: number;
                }> | Readonly<{
                    suffix?: string | undefined;
                } & {
                    type: "duration";
                    from: string;
                    to: string;
                }> | Readonly<{} & {
                    type: "custom";
                    pattern: string;
                }> | undefined;
                label?: string | undefined;
                time_scale?: "m" | "s" | "h" | "d" | undefined;
                reduced_time_range?: string | undefined;
                time_shift?: string | undefined;
            } & {
                field: string;
                operation: "percentile_rank";
                rank: number;
            }>;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "cumulative_sum";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            field: string;
            operation: "counter_rate";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            operation: "formula";
            formula: string;
        }>)[];
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
    }> | Readonly<{} & {
        type: "reference_lines";
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
        thresholds: (Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            field?: string | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            operation: "count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "unique_count";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "min" | "max" | "median" | "average" | "standard_deviation";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "sum";
            empty_as_null: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "last_value";
            time_field: string;
            multi_value: boolean;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "percentile";
            percentile: number;
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            time_shift?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            field: string;
            operation: "percentile_rank";
            rank: number;
        }> | Readonly<{
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            value: number;
            operation: "static_value";
        }> | Readonly<{
            filter?: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }> | undefined;
            fill?: "above" | "below" | undefined;
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            position?: "auto" | "left" | "right" | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            time_scale?: "m" | "s" | "h" | "d" | undefined;
            reduced_time_range?: string | undefined;
            axis_id?: "x" | "y" | "secondary_y" | undefined;
            stroke_width?: number | undefined;
            stroke_dash?: "dashed" | "dotted" | "solid" | undefined;
        } & {
            operation: "formula";
            formula: string;
        }>)[];
    }> | Readonly<{} & {
        type: "annotations";
        data_source: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
            type: import("@kbn/config-schema").Type<"data_view_reference">;
            ref_id: import("@kbn/config-schema").Type<string>;
        } | {
            type: import("@kbn/config-schema").Type<"data_view_spec">;
            index_pattern: import("@kbn/config-schema").Type<string>;
            time_field: import("@kbn/config-schema").Type<string | undefined>;
            runtime_fields: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double">;
                format: import("@kbn/config-schema").Type<Readonly<{
                    params?: any;
                } & {
                    type: string;
                }> | undefined>;
                custom_label: import("@kbn/config-schema").Type<string | undefined>;
                custom_description: import("@kbn/config-schema").Type<string | undefined>;
            } | {
                name: import("@kbn/config-schema").Type<string>;
                script: import("@kbn/config-schema").Type<string | undefined>;
                type: import("@kbn/config-schema").Type<"composite">;
                fields: import("@kbn/config-schema").Type<Readonly<{
                    format?: Readonly<{
                        params?: any;
                    } & {
                        type: string;
                    }> | undefined;
                    custom_label?: string | undefined;
                    custom_description?: string | undefined;
                } & {
                    name: string;
                    type: "boolean" | "date" | "keyword" | "long" | "geo_point" | "ip" | "double";
                }>[]>;
            }>[] | undefined>;
        }>;
        events: (Readonly<{
            text?: Readonly<{
                field?: string | undefined;
            } & {
                visible: boolean;
            }> | undefined;
            line?: Readonly<{} & {
                stroke_width: number;
                stroke_dash: "dashed" | "dotted" | "solid";
            }> | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
            extra_fields?: string[] | undefined;
        } & {
            type: "query";
            query: Readonly<{} & {
                expression: string;
                language: "kql" | "lucene";
            }>;
            time_field: string;
        }> | Readonly<{
            text?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            line?: Readonly<{} & {
                stroke_width: number;
                stroke_dash: "dashed" | "dotted" | "solid";
            }> | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            icon?: "alert" | "asterisk" | "bell" | "bolt" | "bug" | "flag" | "heart" | "tag" | "circle" | "triangle" | "editor_comment" | "map_marker" | "star_empty" | "pin_filled" | "star_filled" | undefined;
        } & {
            type: "point";
            timestamp: string | number;
        }> | Readonly<{
            fill?: "inside" | "outside" | undefined;
            label?: string | undefined;
            visible?: boolean | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
        } & {
            type: "range";
            interval: Readonly<{} & {
                from: string | number;
                to: string | number;
            }>;
        }>)[];
        ignore_global_filters: boolean;
    }> | Readonly<{} & {
        type: "annotation_group";
        group_id: string;
    }>)[];
}> | Readonly<{
    description?: string | undefined;
    filters?: import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "condition"> & {
        type: import("@kbn/config-schema").Type<"condition">;
        condition: import("@kbn/config-schema").Type<import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string | number | boolean>;
            operator: import("@kbn/config-schema").Type<"is">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
            operator: import("@kbn/config-schema").Type<"is_one_of">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "value" | "operator"> & {
            value: import("@kbn/config-schema").ObjectType<{
                gte: import("@kbn/config-schema").Type<string | number | undefined>;
                lte: import("@kbn/config-schema").Type<string | number | undefined>;
                gt: import("@kbn/config-schema").Type<string | number | undefined>;
                lt: import("@kbn/config-schema").Type<string | number | undefined>;
                format: import("@kbn/config-schema").Type<string | undefined>;
            }>;
            operator: import("@kbn/config-schema").Type<"range">;
        }) | (Omit<{
            field: import("@kbn/config-schema").Type<string>;
            negate: import("@kbn/config-schema").Type<boolean | undefined>;
        }, "operator"> & {
            operator: import("@kbn/config-schema").Type<"exists">;
        })>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "group"> & {
        type: import("@kbn/config-schema").Type<"group">;
        group: import("@kbn/config-schema").ObjectType<{
            operator: import("@kbn/config-schema").Type<"or" | "and">;
            conditions: import("@kbn/config-schema").Type<(import("@kbn/config-schema/src/types").ObjectResultUnionType<(Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string | number | boolean>;
                operator: import("@kbn/config-schema").Type<"is">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").Type<string[] | number[] | boolean[]>;
                operator: import("@kbn/config-schema").Type<"is_one_of">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "value" | "operator"> & {
                value: import("@kbn/config-schema").ObjectType<{
                    gte: import("@kbn/config-schema").Type<string | number | undefined>;
                    lte: import("@kbn/config-schema").Type<string | number | undefined>;
                    gt: import("@kbn/config-schema").Type<string | number | undefined>;
                    lt: import("@kbn/config-schema").Type<string | number | undefined>;
                    format: import("@kbn/config-schema").Type<string | undefined>;
                }>;
                operator: import("@kbn/config-schema").Type<"range">;
            }) | (Omit<{
                field: import("@kbn/config-schema").Type<string>;
                negate: import("@kbn/config-schema").Type<boolean | undefined>;
            }, "operator"> & {
                operator: import("@kbn/config-schema").Type<"exists">;
            })> | import("@kbn/as-code-filters-schema").AsCodeGroupFilterRecursive)[]>;
        }>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "params" | "type" | "field" | "dsl"> & {
        params: import("@kbn/config-schema").Type<any>;
        type: import("@kbn/config-schema").Type<"dsl">;
        field: import("@kbn/config-schema").Type<string | undefined>;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    }) | (Omit<{
        disabled: import("@kbn/config-schema").Type<boolean | undefined>;
        negate: import("@kbn/config-schema").Type<boolean | undefined>;
        controlled_by: import("@kbn/config-schema").Type<string | undefined>;
        data_view_id: import("@kbn/config-schema").Type<string | undefined>;
        label: import("@kbn/config-schema").Type<string | undefined>;
        is_multi_index: import("@kbn/config-schema").Type<boolean | undefined>;
    }, "type" | "dsl"> & {
        type: import("@kbn/config-schema").Type<"spatial">;
        dsl: import("@kbn/config-schema").Type<Record<string, any>>;
    })>[] | undefined;
    title?: string | undefined;
    legend?: Readonly<{
        position?: "top" | "bottom" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | Readonly<{} & {
            type: "list";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        size?: "m" | "s" | "l" | "auto" | "xl" | undefined;
        position?: "left" | "right" | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
        placement?: "outside" | undefined;
    } & {}> | Readonly<{
        position?: "top_left" | "bottom_right" | "top_right" | "bottom_left" | undefined;
        columns?: number | undefined;
        statistics?: ("min" | "max" | "count" | "range" | "avg" | "median" | "total" | "difference" | "variance" | "last_value" | "standard_deviation" | "last_non_null_value" | "first_value" | "first_non_null_value" | "difference_percentage" | "distinct_count" | "current_and_last_value")[] | undefined;
        visibility?: "hidden" | "auto" | "visible" | undefined;
        layout?: Readonly<{
            truncate?: Readonly<{
                enabled?: boolean | undefined;
                max_lines?: number | undefined;
            } & {}> | undefined;
        } & {
            type: "grid";
        }> | undefined;
    } & {
        placement: "inside";
    }> | undefined;
    styling?: Readonly<{
        overlays?: Readonly<{
            partial_buckets?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            current_time_marker?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
        points?: Readonly<{
            visibility?: "hidden" | "auto" | "visible" | undefined;
        } & {}> | undefined;
        fitting?: Readonly<{
            extend?: "none" | "zero" | "nearest" | undefined;
            emphasize?: boolean | undefined;
        } & {
            type: "none" | "linear" | "average" | "zero" | "carry" | "lookahead" | "nearest";
        }> | undefined;
        interpolation?: "linear" | "smooth" | "stepped" | undefined;
        areas?: Readonly<{
            fill_opacity?: number | undefined;
        } & {}> | undefined;
        bars?: Readonly<{
            minimum_height?: number | undefined;
            data_labels?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined;
    axis?: Readonly<{
        x?: Readonly<{
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "linear" | "ordinal" | "temporal" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "fit";
            }> | Readonly<{
                rounding?: boolean | undefined;
            } & {
                type: "custom";
                min: number;
                max: number;
            }> | undefined;
        } & {}> | undefined;
        y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
        secondary_y?: Readonly<{
            anchor?: "end" | "start" | undefined;
            labels?: Readonly<{
                orientation?: "horizontal" | "vertical" | "angled" | undefined;
            } & {}> | undefined;
            title?: Readonly<{
                text?: string | undefined;
                visible?: boolean | undefined;
            } & {}> | undefined;
            grid?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            scale?: "log" | "linear" | "sqrt" | undefined;
            ticks?: Readonly<{} & {
                visible: boolean;
            }> | undefined;
            domain?: import("@kbn/config-schema/src/types").ObjectResultUnionType<{
                type: import("@kbn/config-schema").Type<"full">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"fit">;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            } | {
                type: import("@kbn/config-schema").Type<"custom">;
                min: import("@kbn/config-schema").Type<number>;
                max: import("@kbn/config-schema").Type<number>;
                rounding: import("@kbn/config-schema").Type<boolean | undefined>;
            }> | undefined;
        } & {}> | undefined;
    } & {}> | undefined;
} & {
    type: "xy";
    layers: Readonly<{
        x?: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
        } & {
            column: string;
        }> | undefined;
        breakdown_by?: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mapping: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                    color: Readonly<{
                        palette?: string | undefined;
                    } & {
                        type: "from_palette";
                        index: number;
                    }> | Readonly<{} & {
                        type: "color_code";
                        value: string;
                    }>;
                }>[];
                mode: "categorical";
                palette: string;
            }> | Readonly<{
                sort?: "asc" | "desc" | undefined;
                mapping?: Readonly<{} & {
                    values: (string | number | Readonly<{} & {
                        type: "range_key";
                        from: string | number;
                        to: string | number;
                        ranges: Readonly<{} & {
                            from: string | number;
                            label: string;
                            to: string | number;
                        }>[];
                    }> | Readonly<{} & {
                        type: "multi_field_key";
                        keys: string[];
                    }>)[];
                }>[] | undefined;
                gradient?: (Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }>)[] | undefined;
                unassigned?: Readonly<{
                    palette?: string | undefined;
                } & {
                    type: "from_palette";
                    index: number;
                }> | Readonly<{} & {
                    type: "color_code";
                    value: string;
                }> | undefined;
            } & {
                mode: "gradient";
                palette: string;
            }> | undefined;
            collapse_by?: "min" | "max" | "sum" | "avg" | undefined;
        } & {
            column: string;
        }> | undefined;
    } & {
        type: "line" | "area" | "bar" | "bar_stacked" | "area_stacked" | "bar_horizontal" | "bar_horizontal_stacked" | "area_percentage" | "bar_horizontal_percentage" | "bar_percentage";
        y: Readonly<{
            format?: Readonly<{
                suffix?: string | undefined;
            } & {
                type: "number" | "percent";
                compact: boolean;
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "bytes" | "bits";
                decimals: number;
            }> | Readonly<{
                suffix?: string | undefined;
            } & {
                type: "duration";
                from: string;
                to: string;
            }> | Readonly<{} & {
                type: "custom";
                pattern: string;
            }> | undefined;
            label?: string | undefined;
            color?: Readonly<{} & {
                type: "static";
                color: string;
            }> | Readonly<{} & {
                type: "auto";
            }> | undefined;
            axis_id?: "y" | "secondary_y" | undefined;
        } & {
            column: string;
        }>[];
        data_source: Readonly<{} & {
            type: "esql";
            query: string;
        }>;
        sampling: number;
        ignore_global_filters: boolean;
    }>[];
}>>;
export type XYStateNoESQL = TypeOf<typeof xyStateSchemaNoESQL>;
export type XYStateESQL = TypeOf<typeof xyStateSchemaESQL>;
export type XYState = TypeOf<typeof xyStateSchema>;
export type DataLayerTypeESQL = TypeOf<typeof xyDataLayerSchemaESQL>;
export type DataLayerTypeNoESQL = TypeOf<typeof xyDataLayerSchemaNoESQL>;
export type DataLayerType = DataLayerTypeNoESQL | DataLayerTypeESQL;
/**
 * @deprecated ES|QL reference lines are not yet supported
 */
export type ReferenceLineLayerTypeESQL = TypeOf<typeof referenceLineLayerSchemaESQL>;
export type ReferenceLineLayerTypeNoESQL = TypeOf<typeof referenceLineLayerSchemaNoESQL>;
export type ReferenceLineLayerType = ReferenceLineLayerTypeNoESQL | ReferenceLineLayerTypeESQL;
export type AnnotationLayerType = TypeOf<typeof annotationLayerSchema>;
export type AnnotationLayerByRefType = TypeOf<typeof annotationByRefLayerSchema>;
export type AnnotationLayerByValueType = TypeOf<typeof annotationLayerByValueSchema>;
/**
 * Reference line layers are not support but included to keep existing logic
 */
export type LayerTypeESQL = TypeOf<typeof xyLayerUnionESQL> | ReferenceLineLayerTypeESQL;
export type LayerTypeNoESQL = DataLayerTypeNoESQL | ReferenceLineLayerTypeNoESQL | AnnotationLayerType;
export type XYLayer = LayerTypeNoESQL | LayerTypeESQL;
export type XYStyling = TypeOf<typeof xyStylingSchema>;
export {};
