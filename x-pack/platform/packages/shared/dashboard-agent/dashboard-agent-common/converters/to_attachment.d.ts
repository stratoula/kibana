import type { DashboardPanel, DashboardSection, DashboardState } from '@kbn/dashboard-plugin/server';
import { type LensApiSchemaType, type LensAttributes } from '@kbn/lens-embeddable-utils/config_builder';
import type { AttachmentPanel, DashboardSection as DashboardAttachmentSection } from '../types';
import type { DashboardAttachmentData } from '../types';
/**
 * Type guard to check if attributes are in LensAttributes format (internal).
 * LensAttributes have a `visualizationType` property, while LensApiSchemaType does not.
 */
export declare const isLensAttributes: (attributes: LensApiSchemaType | LensAttributes | undefined) => attributes is LensAttributes;
/**
 * Converts a DashboardPanel to an AttachmentPanel.
 * For Lens panels with internal attributes format, converts to API format.
 */
export declare const toAttachmentPanel: (panel: DashboardPanel) => AttachmentPanel | undefined;
/**
 * Converts a DashboardSection to a DashboardAttachmentSection.
 */
export declare const toAttachmentSection: (section: DashboardSection) => DashboardAttachmentSection;
/**
 * Converts a DashboardPanel or DashboardSection to the corresponding attachment type.
 */
export declare const toAttachmentWidget: (widget: DashboardPanel | DashboardSection) => DashboardAttachmentData["panels"][number] | undefined;
/**
 * Converts a DashboardState to DashboardAttachmentData.
 * Preserves all dashboard state fields for full round-trip support.
 */
export declare const dashboardStateToAttachmentData: (state: DashboardState) => DashboardAttachmentData;
