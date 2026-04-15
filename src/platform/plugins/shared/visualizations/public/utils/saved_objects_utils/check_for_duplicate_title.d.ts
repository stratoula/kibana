import type { VisSavedObject } from '../../types';
/**
 * Check for an existing VisSavedObject with the same title in ES
 * returns Promise<true> when it's no duplicate, or the modal displaying the warning
 * that's there's a duplicate is confirmed, else it returns a rejected Promise<ErrorMsg>
 */
export declare function checkForDuplicateTitle(savedObject: Pick<VisSavedObject, 'id' | 'title' | 'lastSavedTitle'>, copyOnSave: boolean, isTitleDuplicateConfirmed: boolean, onTitleDuplicate: () => void): Promise<boolean>;
