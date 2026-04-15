import React from 'react';
import { IgnoredReason } from '@kbn/discover-utils';
export declare const DOC_VIEWER_DEFAULT_TRUNCATE_MAX_HEIGHT = 110;
interface TableFieldValueProps {
    field: string;
    formattedValue: string;
    rawValue: unknown;
    ignoreReason?: IgnoredReason;
    isDetails?: boolean;
    isHighlighted?: boolean;
}
export declare const TableFieldValue: ({ formattedValue, field, rawValue, ignoreReason, isDetails, isHighlighted, }: TableFieldValueProps) => React.JSX.Element;
export {};
