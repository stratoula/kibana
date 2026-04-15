import type { TypeOf } from '@kbn/config-schema';
import { DataGridDensity } from '@kbn/discover-utils';
import { VIEW_MODE } from '../../common';
export declare const SCHEMA_SEARCH_V8_8_0: import("@kbn/config-schema").ObjectType<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_1: import("@kbn/config-schema").ObjectType<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_2: import("@kbn/config-schema").ObjectType<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_3: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_4: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_5: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}, "density"> & {
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_6: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}, "density"> & {
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_7: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}, "density"> & {
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
}, "sort" | "columns" | "grid" | "tabs" | "rowHeight" | "hideChart" | "kibanaSavedObjectMeta" | "isTextBasedQuery"> & {
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_8: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}, "density"> & {
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
}, "sort" | "columns" | "grid" | "tabs" | "rowHeight" | "hideChart" | "kibanaSavedObjectMeta" | "isTextBasedQuery"> & {
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
}, "tabs" | "controlGroupJson"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_9_SO_API_WORKAROUND: import("@kbn/config-schema").ObjectType<{
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
    description: import("@kbn/config-schema").Type<string>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    title: import("@kbn/config-schema").Type<string>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_10: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}, "density"> & {
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
}, "sort" | "columns" | "grid" | "tabs" | "rowHeight" | "hideChart" | "kibanaSavedObjectMeta" | "isTextBasedQuery"> & {
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
}, "tabs" | "controlGroupJson"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
            chartInterval?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_10_SO_API_WORKAROUND: import("@kbn/config-schema").ObjectType<{
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
            chartInterval?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
    description: import("@kbn/config-schema").Type<string>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    title: import("@kbn/config-schema").Type<string>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_11: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}, "density"> & {
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
}, "sort" | "columns" | "grid" | "tabs" | "rowHeight" | "hideChart" | "kibanaSavedObjectMeta" | "isTextBasedQuery"> & {
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
}, "tabs" | "controlGroupJson"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
            chartInterval?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
}, "chartInterval"> & {
    chartInterval: import("@kbn/config-schema").Type<string | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_11_SO_API_WORKAROUND: import("@kbn/config-schema").ObjectType<{
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
            chartInterval?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
    description: import("@kbn/config-schema").Type<string>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    title: import("@kbn/config-schema").Type<string>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
    chartInterval: import("@kbn/config-schema").Type<string | undefined>;
}>;
declare const DISCOVER_SESSION_TAB_ATTRIBUTES_VERSION_12: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}, "density"> & {
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
}, "description" | "title"> & {}, "controlGroupJson"> & {
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
}, "chartInterval"> & {
    chartInterval: import("@kbn/config-schema").Type<string | undefined>;
}, "hideTable"> & {
    hideTable: import("@kbn/config-schema").Type<boolean>;
}>;
declare const SCHEMA_DISCOVER_SESSION_TAB_VERSION_12: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<{
    id: import("@kbn/config-schema").Type<string>;
    label: import("@kbn/config-schema").Type<string>;
    attributes: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<{
        title: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string>;
        columns: import("@kbn/config-schema").Type<string[]>;
        sort: import("@kbn/config-schema").Type<string[] | string[][]>;
        grid: import("@kbn/config-schema").ObjectType<{
            columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
                width?: number | undefined;
            } & {}>> | undefined>;
        }>;
        rowHeight: import("@kbn/config-schema").Type<number | undefined>;
        rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
        hideChart: import("@kbn/config-schema").Type<boolean>;
        breakdownField: import("@kbn/config-schema").Type<string | undefined>;
        kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
            searchSourceJSON: import("@kbn/config-schema").Type<string>;
        }>;
        isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
        usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
        timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
        timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
            from: string;
            to: string;
        }> | undefined>;
        refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
            value: number;
            pause: boolean;
        }> | undefined>;
        viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
        hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
        hits: import("@kbn/config-schema").Type<number | undefined>;
        version: import("@kbn/config-schema").Type<number | undefined>;
    }, "sampleSize"> & {
        sampleSize: import("@kbn/config-schema").Type<number | undefined>;
    }, "headerRowHeight"> & {
        headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
    }, "visContext"> & {
        visContext: import("@kbn/config-schema").Type<Readonly<{} & {
            attributes: Record<string, any>;
            suggestionType: string;
            requestData: Readonly<{
                timeField?: string | undefined;
                dataViewId?: string | undefined;
                breakdownField?: string | undefined;
                timeInterval?: string | undefined;
            } & {}>;
        }> | Readonly<{} & {}> | undefined>;
    }, "viewMode"> & {
        viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
    }, "density"> & {
        density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
    }, "description" | "title"> & {}>;
}, "attributes"> & {
    attributes: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
        title: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string>;
        columns: import("@kbn/config-schema").Type<string[]>;
        sort: import("@kbn/config-schema").Type<string[] | string[][]>;
        grid: import("@kbn/config-schema").ObjectType<{
            columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
                width?: number | undefined;
            } & {}>> | undefined>;
        }>;
        rowHeight: import("@kbn/config-schema").Type<number | undefined>;
        rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
        hideChart: import("@kbn/config-schema").Type<boolean>;
        breakdownField: import("@kbn/config-schema").Type<string | undefined>;
        kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
            searchSourceJSON: import("@kbn/config-schema").Type<string>;
        }>;
        isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
        usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
        timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
        timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
            from: string;
            to: string;
        }> | undefined>;
        refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
            value: number;
            pause: boolean;
        }> | undefined>;
        viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
        hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
        hits: import("@kbn/config-schema").Type<number | undefined>;
        version: import("@kbn/config-schema").Type<number | undefined>;
    }, "sampleSize"> & {
        sampleSize: import("@kbn/config-schema").Type<number | undefined>;
    }, "headerRowHeight"> & {
        headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
    }, "visContext"> & {
        visContext: import("@kbn/config-schema").Type<Readonly<{} & {
            attributes: Record<string, any>;
            suggestionType: string;
            requestData: Readonly<{
                timeField?: string | undefined;
                dataViewId?: string | undefined;
                breakdownField?: string | undefined;
                timeInterval?: string | undefined;
            } & {}>;
        }> | Readonly<{} & {}> | undefined>;
    }, "viewMode"> & {
        viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
    }, "density"> & {
        density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
    }, "description" | "title"> & {}, "controlGroupJson"> & {
        controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
    }>;
}, "attributes"> & {
    attributes: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
        title: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string>;
        columns: import("@kbn/config-schema").Type<string[]>;
        sort: import("@kbn/config-schema").Type<string[] | string[][]>;
        grid: import("@kbn/config-schema").ObjectType<{
            columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
                width?: number | undefined;
            } & {}>> | undefined>;
        }>;
        rowHeight: import("@kbn/config-schema").Type<number | undefined>;
        rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
        hideChart: import("@kbn/config-schema").Type<boolean>;
        breakdownField: import("@kbn/config-schema").Type<string | undefined>;
        kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
            searchSourceJSON: import("@kbn/config-schema").Type<string>;
        }>;
        isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
        usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
        timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
        timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
            from: string;
            to: string;
        }> | undefined>;
        refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
            value: number;
            pause: boolean;
        }> | undefined>;
        viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
        hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
        hits: import("@kbn/config-schema").Type<number | undefined>;
        version: import("@kbn/config-schema").Type<number | undefined>;
    }, "sampleSize"> & {
        sampleSize: import("@kbn/config-schema").Type<number | undefined>;
    }, "headerRowHeight"> & {
        headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
    }, "visContext"> & {
        visContext: import("@kbn/config-schema").Type<Readonly<{} & {
            attributes: Record<string, any>;
            suggestionType: string;
            requestData: Readonly<{
                timeField?: string | undefined;
                dataViewId?: string | undefined;
                breakdownField?: string | undefined;
                timeInterval?: string | undefined;
            } & {}>;
        }> | Readonly<{} & {}> | undefined>;
    }, "viewMode"> & {
        viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
    }, "density"> & {
        density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
    }, "description" | "title"> & {}, "controlGroupJson"> & {
        controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
    }, "chartInterval"> & {
        chartInterval: import("@kbn/config-schema").Type<string | undefined>;
    }>;
}, "attributes"> & {
    attributes: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
        title: import("@kbn/config-schema").Type<string>;
        description: import("@kbn/config-schema").Type<string>;
        columns: import("@kbn/config-schema").Type<string[]>;
        sort: import("@kbn/config-schema").Type<string[] | string[][]>;
        grid: import("@kbn/config-schema").ObjectType<{
            columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
                width?: number | undefined;
            } & {}>> | undefined>;
        }>;
        rowHeight: import("@kbn/config-schema").Type<number | undefined>;
        rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
        hideChart: import("@kbn/config-schema").Type<boolean>;
        breakdownField: import("@kbn/config-schema").Type<string | undefined>;
        kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
            searchSourceJSON: import("@kbn/config-schema").Type<string>;
        }>;
        isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
        usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
        timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
        timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
            from: string;
            to: string;
        }> | undefined>;
        refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
            value: number;
            pause: boolean;
        }> | undefined>;
        viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
        hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
        hits: import("@kbn/config-schema").Type<number | undefined>;
        version: import("@kbn/config-schema").Type<number | undefined>;
    }, "sampleSize"> & {
        sampleSize: import("@kbn/config-schema").Type<number | undefined>;
    }, "headerRowHeight"> & {
        headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
    }, "visContext"> & {
        visContext: import("@kbn/config-schema").Type<Readonly<{} & {
            attributes: Record<string, any>;
            suggestionType: string;
            requestData: Readonly<{
                timeField?: string | undefined;
                dataViewId?: string | undefined;
                breakdownField?: string | undefined;
                timeInterval?: string | undefined;
            } & {}>;
        }> | Readonly<{} & {}> | undefined>;
    }, "viewMode"> & {
        viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
    }, "density"> & {
        density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
    }, "description" | "title"> & {}, "controlGroupJson"> & {
        controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
    }, "chartInterval"> & {
        chartInterval: import("@kbn/config-schema").Type<string | undefined>;
    }, "hideTable"> & {
        hideTable: import("@kbn/config-schema").Type<boolean>;
    }>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_12: import("@kbn/config-schema").ObjectType<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<Omit<{
    title: import("@kbn/config-schema").Type<string>;
    description: import("@kbn/config-schema").Type<string>;
    columns: import("@kbn/config-schema").Type<string[]>;
    sort: import("@kbn/config-schema").Type<string[] | string[][]>;
    grid: import("@kbn/config-schema").ObjectType<{
        columns: import("@kbn/config-schema").Type<Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined>;
    }>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").ObjectType<{
        searchSourceJSON: import("@kbn/config-schema").Type<string>;
    }>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE.DOCUMENT_LEVEL | VIEW_MODE.AGGREGATED_LEVEL | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
}, "sampleSize"> & {
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
}, "headerRowHeight"> & {
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
}, "visContext"> & {
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
}, "viewMode"> & {
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
}, "density"> & {
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[] | undefined>;
}, "sort" | "columns" | "grid" | "tabs" | "rowHeight" | "hideChart" | "kibanaSavedObjectMeta" | "isTextBasedQuery"> & {
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
}, "tabs" | "controlGroupJson"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
}, "tabs"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
            chartInterval?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
        }>;
        label: string;
    }>[]>;
}, "chartInterval"> & {
    chartInterval: import("@kbn/config-schema").Type<string | undefined>;
}, "tabs" | "hideTable"> & {
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
            chartInterval?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
            hideTable: boolean;
        }>;
        label: string;
    }>[]>;
    hideTable: import("@kbn/config-schema").Type<boolean | undefined>;
}>;
export declare const SCHEMA_SEARCH_MODEL_VERSION_12_SO_API_WORKAROUND: import("@kbn/config-schema").ObjectType<{
    tabs: import("@kbn/config-schema").Type<Readonly<{} & {
        id: string;
        attributes: Readonly<{
            version?: number | undefined;
            hits?: number | undefined;
            refreshInterval?: Readonly<{} & {
                value: number;
                pause: boolean;
            }> | undefined;
            timeRange?: Readonly<{} & {
                from: string;
                to: string;
            }> | undefined;
            rowHeight?: number | undefined;
            viewMode?: VIEW_MODE | undefined;
            density?: DataGridDensity | undefined;
            headerRowHeight?: number | undefined;
            sampleSize?: number | undefined;
            rowsPerPage?: number | undefined;
            breakdownField?: string | undefined;
            usesAdHocDataView?: boolean | undefined;
            timeRestore?: boolean | undefined;
            hideAggregatedPreview?: boolean | undefined;
            visContext?: Readonly<{} & {
                attributes: Record<string, any>;
                suggestionType: string;
                requestData: Readonly<{
                    timeField?: string | undefined;
                    dataViewId?: string | undefined;
                    breakdownField?: string | undefined;
                    timeInterval?: string | undefined;
                } & {}>;
            }> | Readonly<{} & {}> | undefined;
            controlGroupJson?: string | undefined;
            chartInterval?: string | undefined;
        } & {
            sort: string[] | string[][];
            columns: string[];
            grid: Readonly<{
                columns?: Record<string, Readonly<{
                    width?: number | undefined;
                } & {}>> | undefined;
            } & {}>;
            hideChart: boolean;
            kibanaSavedObjectMeta: Readonly<{} & {
                searchSourceJSON: string;
            }>;
            isTextBasedQuery: boolean;
            hideTable: boolean;
        }>;
        label: string;
    }>[] | undefined>;
    sort: import("@kbn/config-schema").Type<string[] | string[][] | undefined>;
    version: import("@kbn/config-schema").Type<number | undefined>;
    description: import("@kbn/config-schema").Type<string>;
    hits: import("@kbn/config-schema").Type<number | undefined>;
    title: import("@kbn/config-schema").Type<string>;
    refreshInterval: import("@kbn/config-schema").Type<Readonly<{} & {
        value: number;
        pause: boolean;
    }> | undefined>;
    timeRange: import("@kbn/config-schema").Type<Readonly<{} & {
        from: string;
        to: string;
    }> | undefined>;
    columns: import("@kbn/config-schema").Type<string[] | undefined>;
    grid: import("@kbn/config-schema").Type<Readonly<{
        columns?: Record<string, Readonly<{
            width?: number | undefined;
        } & {}>> | undefined;
    } & {}> | undefined>;
    rowHeight: import("@kbn/config-schema").Type<number | undefined>;
    viewMode: import("@kbn/config-schema").Type<VIEW_MODE | undefined>;
    density: import("@kbn/config-schema").Type<DataGridDensity | undefined>;
    headerRowHeight: import("@kbn/config-schema").Type<number | undefined>;
    sampleSize: import("@kbn/config-schema").Type<number | undefined>;
    rowsPerPage: import("@kbn/config-schema").Type<number | undefined>;
    hideChart: import("@kbn/config-schema").Type<boolean | undefined>;
    breakdownField: import("@kbn/config-schema").Type<string | undefined>;
    kibanaSavedObjectMeta: import("@kbn/config-schema").Type<Readonly<{} & {
        searchSourceJSON: string;
    }> | undefined>;
    isTextBasedQuery: import("@kbn/config-schema").Type<boolean | undefined>;
    usesAdHocDataView: import("@kbn/config-schema").Type<boolean | undefined>;
    timeRestore: import("@kbn/config-schema").Type<boolean | undefined>;
    hideAggregatedPreview: import("@kbn/config-schema").Type<boolean | undefined>;
    visContext: import("@kbn/config-schema").Type<Readonly<{} & {
        attributes: Record<string, any>;
        suggestionType: string;
        requestData: Readonly<{
            timeField?: string | undefined;
            dataViewId?: string | undefined;
            breakdownField?: string | undefined;
            timeInterval?: string | undefined;
        } & {}>;
    }> | Readonly<{} & {}> | undefined>;
    controlGroupJson: import("@kbn/config-schema").Type<string | undefined>;
    chartInterval: import("@kbn/config-schema").Type<string | undefined>;
    hideTable: import("@kbn/config-schema").Type<boolean | undefined>;
}>;
export type DiscoverSessionTabAttributes = TypeOf<typeof DISCOVER_SESSION_TAB_ATTRIBUTES_VERSION_12>;
export type DiscoverSessionTab = TypeOf<typeof SCHEMA_DISCOVER_SESSION_TAB_VERSION_12>;
export {};
