import type { ReactNode } from 'react';
import type { ContentListItem } from '../../item/types';
/**
 * Options for {@link useDeleteConfirmation}.
 */
export interface UseDeleteConfirmationOptions {
    /**
     * Called after the modal closes (cancel or successful delete).
     * Use for side effects like clearing selection state.
     */
    onClose?: () => void;
}
/**
 * Return value of {@link useDeleteConfirmation}.
 */
export interface UseDeleteConfirmationReturn {
    /** Trigger the delete confirmation modal for the given items. */
    requestDelete: (items: ContentListItem[]) => void;
    /** The modal element to render, or `null` when inactive. */
    deleteModal: ReactNode;
}
/**
 * Encapsulates the open/close state for a {@link DeleteConfirmationModal}.
 *
 * Consumers call `requestDelete(items)` to open the modal and render
 * `deleteModal` in their JSX. The modal handles confirmation, deletion
 * (via the provider's `onDelete`), loading, and error display internally.
 *
 * @example Row-level delete (table)
 * ```tsx
 * const { requestDelete, deleteModal } = useDeleteConfirmation();
 * // pass requestDelete to action builder context
 * return <>{table}{deleteModal}</>;
 * ```
 *
 * @example Bulk delete (toolbar selection bar)
 * ```tsx
 * const { requestDelete, deleteModal } = useDeleteConfirmation({
 *   onClose: clearSelection,
 * });
 * return (
 *   <>
 *     <EuiButton onClick={() => requestDelete(selectedItems)}>Delete</EuiButton>
 *     {deleteModal}
 *   </>
 * );
 * ```
 */
export declare const useDeleteConfirmation: (options?: UseDeleteConfirmationOptions) => UseDeleteConfirmationReturn;
