export declare const TARGET_TYPE_INDEX: "index";
export declare const TARGET_TYPE_INDEX_PATTERN: "index_pattern";
export declare const TARGET_TYPE_DATA_VIEW: "data_view";
export declare const TARGET_TYPES: readonly ["index", "index_pattern", "data_view"];
export type TargetType = (typeof TARGET_TYPES)[number];
