import type { DashboardState } from '@kbn/dashboard-plugin/server';
import type { DashboardAttachmentData } from '../types';
export declare const DEFAULT_TIME_RANGE: {
    readonly from: "now-24h";
    readonly to: "now";
};
/**
 * Converts a DashboardAttachment to a DashboardState.
 * Uses provided values from the attachment, falling back to defaults for missing fields.
 */
export declare const attachmentDataToDashboardState: ({ panels, filters, query, pinned_panels, access_control, options, ...rest }: DashboardAttachmentData) => DashboardState;
