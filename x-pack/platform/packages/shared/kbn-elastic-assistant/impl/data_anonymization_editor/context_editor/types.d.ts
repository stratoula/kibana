export interface ContextEditorRow {
    /** Is the field is allowed to be included in the context sent to the assistant */
    allowed: boolean;
    /** Are the field's values anonymized */
    anonymized: boolean;
    /** Is the field is denied to be included in the context sent to the assistant */
    denied: boolean;
    /** The name of the field, e.g. `user.name` */
    field: string;
    /** The raw, NOT anonymized values */
    rawValues: string[];
}
export declare const FIELDS: {
    ACTIONS: string;
    ALLOWED: string;
    ANONYMIZED: string;
    DENIED: string;
    FIELD: string;
    ID: string;
    RAW_VALUES: string;
};
/** The `field` in the specified `list` will be added or removed, as specified by the `operation` */
export interface BatchUpdateListItem {
    field: string;
    operation: 'add' | 'remove';
    update: 'allow' | 'allowReplacement' | 'defaultAllow' | 'defaultAllowReplacement' | 'deny' | 'denyReplacement';
}
