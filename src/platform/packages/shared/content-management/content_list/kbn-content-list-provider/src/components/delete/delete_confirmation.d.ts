import React from 'react';
import type { ContentListItem } from '../../item';
/**
 * Props for the connected {@link DeleteConfirmationModal}.
 */
export interface DeleteConfirmationModalProps {
    /** Items to delete. */
    items: ContentListItem[];
    /** Called when the modal should close (cancel or successful delete). */
    onClose: () => void;
}
/**
 * Connected confirmation modal for delete operations.
 *
 * Reads `item.onDelete` and entity labels from the provider config, calls
 * `refetch` on success, and manages `isDeleting`/`error` locally.
 * Delegates rendering to {@link DeleteConfirmationComponent}.
 *
 * @example
 * ```tsx
 * {showDeleteModal && (
 *   <DeleteConfirmationModal
 *     items={selectedItems}
 *     onClose={() => setShowDeleteModal(false)}
 *   />
 * )}
 * ```
 */
export declare const DeleteConfirmationModal: ({ items, onClose }: DeleteConfirmationModalProps) => React.JSX.Element;
