import React from 'react';
import type { EuiTourStepProps } from '@elastic/eui';
/**
 * Props for the InferenceCostsTransparencyTour component.
 *
 * @property {EuiTourStepProps['anchorPosition']} [anchorPosition='downCenter']
 *   Position of the tour step relative to its anchor element.
 *
 * @property {string} [ctaLink]
 *   Optional URL for the call-to-action button in the tour footer.
 *
 * @property {string} promoId
 *   Unique identifier for this promo instance. Used for localStorage and telemetry.
 *
 * @property {boolean} isCloudEnabled
 *   Indicates that the component is running in a cloud-enabled environment.
 *   The tour will only be shown if this is true.
 *
 * @property {boolean} [isReady=true]
 *   If false, the tour will not render even if promo is visible. Use to delay showing until parent is ready.
 *   Ensures the tour renders in the correct place when there is animation on the parent.
 *
 * @property {React.ReactElement} children
 *   The anchor element for the tour step. The tour wraps this element.
 */
export interface InferenceCostsTransparencyTourProps {
    anchorPosition?: EuiTourStepProps['anchorPosition'];
    ctaLink?: string;
    promoId: string;
    isCloudEnabled: boolean;
    isReady?: boolean;
    children: React.ReactElement;
}
export declare const InferenceCostsTransparencyTour: ({ anchorPosition, ctaLink, promoId, isCloudEnabled, isReady, children, }: InferenceCostsTransparencyTourProps) => React.JSX.Element;
