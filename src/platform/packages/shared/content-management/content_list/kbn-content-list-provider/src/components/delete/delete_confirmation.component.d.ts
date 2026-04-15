import React from 'react';
import type { ContentListItem } from '../../item';
/**
 * Props for the presentational {@link DeleteConfirmationComponent}.
 */
export interface DeleteConfirmationComponentProps {
    /** Items being deleted. */
    items: ContentListItem[];
    /** Singular entity name (e.g., "dashboard"). */
    entityName: string;
    /** Plural entity name (e.g., "dashboards"). */
    entityNamePlural: string;
    /** Whether a delete operation is currently executing. */
    isDeleting: boolean;
    /** Error message from the last failed attempt, displayed inline. */
    error?: string | null;
    /** Called when the user cancels. */
    onCancel: () => void;
    /** Called when the user confirms. */
    onConfirm: () => void;
}
/**
 * Presentational confirmation modal for delete operations.
 *
 * Stateless — all data and callbacks are provided via props.
 * Use {@link DeleteConfirmationModal} for the connected version that
 * reads from content list context.
 */
export declare const DeleteConfirmationComponent: ({ items, entityName, entityNamePlural, isDeleting, error, onCancel, onConfirm, }: DeleteConfirmationComponentProps) => React.JSX.Element;
