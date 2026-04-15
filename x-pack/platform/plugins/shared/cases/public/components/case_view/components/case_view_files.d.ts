import React from 'react';
import type { CaseUI } from '../../../../common/ui/types';
interface CaseViewFilesProps {
    caseData: CaseUI;
    searchTerm?: string;
}
export declare const DEFAULT_CASE_FILES_FILTERING_OPTIONS: {
    page: number;
    perPage: number;
};
export declare const CaseViewFiles: {
    ({ caseData, searchTerm }: CaseViewFilesProps): React.JSX.Element;
    displayName: string;
};
export {};
