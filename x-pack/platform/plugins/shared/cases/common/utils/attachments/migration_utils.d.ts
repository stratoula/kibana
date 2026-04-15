export declare const isMigratedAttachmentType: (type: string, owner: string) => boolean;
export declare const toLegacyAttachmentType: (type?: string) => string | undefined;
export declare const toUnifiedAttachmentType: (type: string, owner: string) => string;
/**
 * True when the persistable-state subtype id (legacy `.lens` or unified `lens`) is one
 * that this stack migrates to unified attachment attributes (currently Lens only).
 */
export declare const isPersistableType: (type: string) => boolean;
export declare const toUnifiedPersistableStateAttachmentType: (type: string) => string;
export declare const toLegacyPersistableStateAttachmentType: (type: string) => string;
