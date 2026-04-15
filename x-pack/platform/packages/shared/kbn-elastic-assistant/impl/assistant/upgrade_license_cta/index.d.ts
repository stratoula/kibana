import React from 'react';
import type { HttpSetup } from '@kbn/core-http-browser';
interface OwnProps {
    http: HttpSetup;
}
type Props = OwnProps;
/**
 * Provides a call-to-action for users to upgrade their subscription
 */
export declare const UpgradeLicenseCallToAction: React.FC<Props>;
export {};
