import type { NewPackagePolicyInput, PackagePolicyConfigRecord, NewPackagePolicyInputStream, PackageInfo, InputsOverride } from '../../common/types';
import type { NewPackagePolicy } from '../types';
/**
 * Finds an input in `inputs` matching `type`, preferring a match on `policyTemplate`. Falls back
 * to an entry with no `policy_template` set to handle older stored policies where that field was
 * not reliably populated. Returns undefined when no match is found.
 */
export declare function findInputForMigration(inputs: NewPackagePolicyInput[], idOrType: string, policyTemplate: string | undefined): NewPackagePolicyInput | undefined;
/**
 * Applies input-level `migrate_from` migration when a new input type explicitly replaces an old
 * one.
 *
 * Mutates `update` in-place (merges vars, preserves the old input's enabled state) and removes the
 * now-stale old input from the mutable `inputs` array when it was not already pruned by the
 * policy-template filter above.
 *
 * Returns the source input that was migrated from, or undefined when no migration applies.
 */
export declare function applyInputLevelMigration(update: InputsOverride, allBaseInputs: NewPackagePolicyInput[], inputs: NewPackagePolicyInput[]): NewPackagePolicyInput | undefined;
/**
 * Merges vars from an old stream (and optionally its parent input's vars) into a new stream,
 * preserving the old stream's `enabled` state.
 *
 * Old input-level vars and old stream-level vars are combined before merging so that vars which
 * moved from input-level in the old input to stream-level in the new input are also carried over.
 * Stream-level vars take priority over input-level vars on collision.
 * `removeStaleVars` then discards any key not defined in the new stream schema.
 *
 * `oldStream` may be `undefined` when only input-level vars are available (e.g. the new input
 * has more streams than the old one). In that case `enabled` is left at the new stream's default.
 */
export declare function migrateStreamVars(newStream: InputsOverride, oldStream: NewPackagePolicyInputStream | undefined, oldInputVars: PackagePolicyConfigRecord | undefined): NewPackagePolicyInputStream;
/**
 * Applies stream-level `migrate_from` migration for a new input that has no matching existing
 * input in the current policy.
 *
 * Two sources of old streams are considered (in priority order):
 *  1. `originalInputToMigrate.streams` — when the parent input declared `migrate_from`, streams
 *     are matched positionally to the corresponding old input's streams.
 *  2. `newStream.migrate_from` — each stream can independently declare which old input type it
 *     migrates from, also matched positionally per source type.
 *
 * `update.streams` is replaced with the merged streams.
 * `update.enabled` is set from the old input's enabled state when stream-level migration occurred
 * without a corresponding input-level `migrate_from`.
 */
export declare function applyStreamLevelMigration(update: InputsOverride, originalInputToMigrate: NewPackagePolicyInput | undefined, allBaseInputs: NewPackagePolicyInput[]): void;
export declare function deepMergeVars(original: any, override: any, keepOriginalValue?: boolean): any;
export declare function getUpdatedGlobalVars(packageInfo: PackageInfo, packagePolicy: NewPackagePolicy): any;
export interface SupportsVars {
    vars?: PackagePolicyConfigRecord;
}
export declare function removeStaleVars<T extends SupportsVars>(currentWithVars: T, expectedVars: SupportsVars): T;
/**
 * Replaces null/undefined values on bool-typed vars with `false` after migration.
 *
 * Priority (from highest to lowest):
 *  1. Old variable value (carried over by deepMergeVars when non-null)
 *  2. New package default (used by deepMergeVars when old value is null)
 *  3. `false` — guaranteed fallback for bool vars so the compiled agent YAML never
 *     contains an explicit `null` for a boolean field.
 */
export declare function sanitizeMigratedVars<T extends SupportsVars>(obj: T): T;
