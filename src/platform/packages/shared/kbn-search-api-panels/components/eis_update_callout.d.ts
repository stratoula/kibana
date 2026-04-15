import React from 'react';
/**
 * Props for the EisUpdateCallout component.
 *
 * @property {string} ctaLink
 *   URL for the call-to-action link to documentation.
 *
 * @property {string} promoId
 *   Unique identifier for this promo instance. Used for localStorage and telemetry.
 *
 * @property {boolean} shouldShowEisUpdateCallout
 *   Controls whether the callout should be displayed. Should only be set to true when the
 *   environment is cloud-enabled AND (has an enterprise license OR is serverless-enabled).
 *
 * @property {() => void} handleOnClick
 *   Callback function invoked when the call-to-action button is clicked.
 *
 * @property {'row' | 'column'} direction
 *   Layout direction for the callout content. Determines how the icon and text are arranged.
 *
 * @property {boolean | undefined} hasUpdatePrivileges
 *   Indicates whether the user has update privileges. If false, the callout will not be shown.
 *
 * @property {'top' | 'bottom'} [addSpacer]
 *   Optional spacer placement. Adds spacing above or below the callout when specified.
 */
export interface EisUpdateCalloutProps {
    ctaLink: string;
    promoId: string;
    shouldShowEisUpdateCallout: boolean;
    handleOnClick: () => void;
    direction: 'row' | 'column';
    hasUpdatePrivileges: boolean | undefined;
    addSpacer?: 'top' | 'bottom';
}
export declare const EisUpdateCallout: ({ ctaLink, promoId, shouldShowEisUpdateCallout, handleOnClick, direction, hasUpdatePrivileges, addSpacer, }: EisUpdateCalloutProps) => React.JSX.Element | null;
