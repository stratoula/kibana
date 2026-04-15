import type { FunctionComponent } from 'react';
import type { AttackDiscoveryStatus } from '@kbn/elastic-assistant-common';
interface Props {
    hasViewed: boolean;
    status: AttackDiscoveryStatus;
    count: number;
}
export declare const AttackDiscoveryStatusIndicator: FunctionComponent<Props>;
export {};
