import type { IconType } from '@elastic/eui';
import { copyToClipboard } from '@elastic/eui';
import type { DocViewRenderProps } from '@kbn/unified-doc-viewer/types';
import type { FieldMapping } from '@kbn/unified-doc-viewer/src/services/types';
interface WithFieldParam {
    field: string;
    mapping?: FieldMapping;
}
interface WithValueParam {
    value: unknown;
}
interface TFieldActionParams extends WithFieldParam, WithValueParam {
    formattedValue?: string;
}
export interface TFieldAction {
    id: string;
    iconType: IconType;
    label: string;
    onClick: () => void;
}
type UseFieldActionsDeps = Pick<DocViewRenderProps, 'columns' | 'filter' | 'onAddColumn' | 'onRemoveColumn'>;
export declare const FieldActionsProvider: import("react").FC<import("react").PropsWithChildren<UseFieldActionsDeps>>, useFieldActionsContext: () => {
    addColumn: ((columnName: string) => void) | undefined;
    addFilterExist: ({ field }: WithFieldParam) => void | undefined;
    addFilterIn: ({ field, value, mapping }: TFieldActionParams) => void | undefined;
    addFilterOut: ({ field, value, mapping }: TFieldActionParams) => void | undefined;
    copyToClipboard: typeof copyToClipboard;
    removeColumn: ((columnName: string) => void) | undefined;
    isColumnAdded: ({ field }: WithFieldParam) => boolean;
    toggleFieldColumn: ({ field }: WithFieldParam) => void;
};
/**
 * This is a preset of the UI elements and related actions that can be used to build an action bar anywhere in a DocView
 */
export declare const useUIFieldActions: ({ field, value, mapping, formattedValue, }: TFieldActionParams) => TFieldAction[];
export {};
