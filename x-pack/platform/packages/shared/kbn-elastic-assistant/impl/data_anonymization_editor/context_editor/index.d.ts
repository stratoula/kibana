import type { CriteriaWithPagination, EuiSearchBarOnChangeArgs, EuiSearchBarProps, EuiTableSortingType } from '@elastic/eui';
import React from 'react';
import type { ContextEditorRow } from './types';
import type { ServerSidePagination } from '../../assistant/common/components/assistant_settings_management/pagination/use_session_pagination';
import type { UseSelectionReturn } from './selection/use_selection';
import type { HandlePageReset, HandleRowReset, OnListUpdated } from '../../assistant/settings/use_settings_updater/use_anonymization_updater';
import type { FindAnonymizationFieldsClientResponse } from './selection/types';
export interface Props {
    anonymizationAllFields: FindAnonymizationFieldsClientResponse;
    anonymizationPageFields: FindAnonymizationFieldsClientResponse;
    compressed?: boolean;
    onListUpdated: OnListUpdated;
    rawData: Record<string, string[]> | null;
    onTableChange: (param: CriteriaWithPagination<ContextEditorRow>) => void;
    pagination: ServerSidePagination;
    sorting: EuiTableSortingType<ContextEditorRow>;
    search: EuiSearchBarProps;
    handleSearch: (query: EuiSearchBarOnChangeArgs) => void;
    handleRowReset: HandleRowReset;
    handlePageReset: HandlePageReset;
    handleTableReset: () => void;
    selectionState: UseSelectionReturn['selectionState'];
    selectionActions: UseSelectionReturn['selectionActions'];
}
export declare const ContextEditor: React.NamedExoticComponent<Props>;
