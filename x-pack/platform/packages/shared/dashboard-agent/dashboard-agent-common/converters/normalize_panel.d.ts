import type { AttachmentPanel } from '../types';
export interface VisualizationContent {
    type: string;
    config: Record<string, unknown>;
}
/** Panel input that may or may not have a id assigned yet */
export type DashboardPanelInput = Omit<AttachmentPanel, 'id'> & {
    id?: string;
};
/**
 * Converts panel input to a full AttachmentPanel (embeddable format).
 * - Generates a id if not provided
 * - Wraps Lens config in `attributes` if needed
 */
export declare const toEmbeddablePanel: ({ id, grid, type, config, }: DashboardPanelInput) => AttachmentPanel;
/**
 * Converts an embeddable panel back to vis input format.
 * - Unwraps Lens config from `attributes` if present
 */
export declare const fromEmbeddablePanel: ({ type, config }: AttachmentPanel) => VisualizationContent;
