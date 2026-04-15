import type { EuiTableActionsColumnType } from '@elastic/eui';
interface Props<T> {
    isEditEnabled?: (rowItem: T) => boolean;
    isDeleteEnabled?: (rowItem: T) => boolean;
    onDelete?: (rowItem: T) => void;
    onEdit?: (rowItem: T) => void;
}
export declare const useInlineActions: <T extends {}>() => ({ isEditEnabled, isDeleteEnabled, onDelete, onEdit, }: Props<T>) => EuiTableActionsColumnType<T>;
export {};
