import type { Assign } from 'utility-types';
import type { Props } from '@kbn/config-schema';
import type { LensByValueSerializedState } from '@kbn/lens-common';
import type { LensByRefSerializedAPIConfig, LensByValueSerializedAPIConfig } from '@kbn/lens-common-2';
import type { AnyLensPanelConfig, FlattenedLensByValuePanelSchema } from './types';
/**
 * Picks a subset of props from base schema definition
 *
 * TODO: move this to shared package, maybe `@kbn/config-schema`
 */
export declare function pickFromObjectSchema<T extends Props, K extends keyof T>(schema: T, keys: K[]): Assign<{}, Pick<T, K>>;
export declare function isByRefLensConfig(config: AnyLensPanelConfig): config is LensByRefSerializedAPIConfig;
export declare function isFlattenedAPIConfig(config: FlattenedLensByValuePanelSchema | LensByValueSerializedState): config is FlattenedLensByValuePanelSchema;
export declare function unflattenAPIConfig(config: FlattenedLensByValuePanelSchema): LensByValueSerializedAPIConfig;
