export declare const COMMENT_ATTACHMENT_TYPE = "comment";
export declare const SECURITY_EVENT_ATTACHMENT_TYPE = "security.event";
export declare const LENS_ATTACHMENT_TYPE = "lens";
export declare const LEGACY_ACTIONS_TYPE = "actions";
export declare const LEGACY_ALERT_TYPE = "alert";
export declare const LEGACY_EVENT_TYPE = "event";
export declare const LEGACY_EXTERNAL_REFERENCE_TYPE = "externalReference";
export declare const LEGACY_PERSISTABLE_STATE_TYPE = "persistableState";
export declare const LEGACY_USER_TYPE = "user";
export declare const LEGACY_LENS_ATTACHMENT_TYPE = ".lens";
export declare const LEGACY_ATTACHMENT_TYPES: Set<string>;
export declare const UNIFIED_ATTACHMENT_TYPES: Set<string>;
export declare const PERSISTABLE_STATE_LEGACY_TO_UNIFIED_MAP: Record<string, string>;
export declare const PERSISTABLE_STATE_UNIFIED_TO_LEGACY_MAP: Record<string, string>;
export declare const PERSISTABLE_ATTACHMENT_TYPES: Set<string>;
/**
 * Mapping from legacy attachment type names to unified names.
 */
export declare const LEGACY_TO_UNIFIED_MAP: Record<string, string>;
/**
 * Reverse mapping from unified names to legacy names.
 */
export declare const UNIFIED_TO_LEGACY_MAP: Record<string, string>;
/**
 * Attachment type identifiers that are migrated to unified read/write behavior.
 */
export declare const MIGRATED_ATTACHMENT_TYPES: Set<string>;
export declare const OWNER_TO_PREFIX_MAP: Partial<Record<string, string>>;
export declare const PREFIX_TO_OWNER_MAP: Partial<Record<string, string>>;
