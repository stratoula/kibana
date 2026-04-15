import React from 'react';
import { type EuiTourStepProps } from '@elastic/eui';
/**
 * Props for the EisCloudConnectPromoTour component.
 *
 * @property {EuiTourStepProps['anchorPosition']} [anchorPosition='downCenter']
 *   Position of the tour step relative to its anchor element.
 *
 * @property {string} [navigateToApp]
 *   Callback function invoked when the call-to-action button is clicked.
 *   Navigates the user to the cloud connect management application.
 *
 * @property {string} promoId
 *   Unique identifier for this promo instance. Used for localStorage and telemetry.
 *
 * @property {boolean} isSelfManaged
 *   Indicates that the component is running in a self-managed environment.
 *   The tour will only be shown if this is true.
 *
 * @property {boolean} [isReady=true]
 *   If false, the tour will not render even if promo is visible. Use to delay showing until parent is ready.
 *   Ensures the tour renders in the correct place when there is animation on the parent.
 *
 * @property {React.ReactElement} children
 *   The anchor element for the tour step. The tour wraps this element.
 */
export interface EisCloudConnectPromoTourProps {
    anchorPosition?: EuiTourStepProps['anchorPosition'];
    navigateToApp: () => void;
    promoId: string;
    isSelfManaged: boolean;
    isReady?: boolean;
    children: React.ReactElement;
}
export declare const EisCloudConnectPromoTour: ({ anchorPosition, navigateToApp, promoId, isSelfManaged, isReady, children, }: EisCloudConnectPromoTourProps) => React.JSX.Element;
