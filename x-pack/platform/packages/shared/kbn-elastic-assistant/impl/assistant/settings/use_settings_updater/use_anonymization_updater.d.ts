import type { HttpSetup } from '@kbn/core-http-browser';
import type { IToasts } from '@kbn/core-notifications-browser';
import type { BatchUpdateListItem } from '../../../data_anonymization_editor/context_editor/types';
import type { FindAnonymizationFieldsClientResponse } from '../../../data_anonymization_editor/context_editor/selection/types';
interface Params {
    anonymizationFields: FindAnonymizationFieldsClientResponse;
    anonymizationAllFields: FindAnonymizationFieldsClientResponse;
    http: HttpSetup;
    toasts?: IToasts;
}
export type OnListUpdated = (updates: BatchUpdateListItem[], isSelectAll?: boolean, anonymizationAllFields?: FindAnonymizationFieldsClientResponse) => void;
export type HandleRowReset = (field: string) => void;
export type HandlePageReset = (fields: string[]) => void;
interface AnonymizationUpdater {
    hasPendingChanges: boolean;
    onListUpdated: OnListUpdated;
    resetAnonymizationSettings: () => void;
    saveAnonymizationSettings: () => Promise<boolean>;
    updatedAnonymizationData: FindAnonymizationFieldsClientResponse;
    handleRowReset: HandleRowReset;
    handlePageReset: HandlePageReset;
}
export declare const useAnonymizationUpdater: ({ anonymizationAllFields, anonymizationFields, http, toasts, }: Params) => AnonymizationUpdater;
export {};
