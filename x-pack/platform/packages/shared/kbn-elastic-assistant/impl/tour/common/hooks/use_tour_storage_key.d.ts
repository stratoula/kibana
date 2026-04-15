import { type NEW_FEATURES_TOUR_STORAGE_KEYS } from '../../const';
/**
 *
 * @param featureKey The key of the feature for storage key
 * @returns A unique storage key for the feature based on the space ID
 */
export declare const useTourStorageKey: (featureKey: NEW_FEATURES_TOUR_STORAGE_KEYS) => string;
