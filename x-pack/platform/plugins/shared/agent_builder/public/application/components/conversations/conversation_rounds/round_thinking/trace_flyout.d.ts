import React, { type ComponentType } from 'react';
interface TraceFlyoutProps {
    traceId: string;
    onClose: () => void;
    TraceWaterfall: ComponentType<{
        traceId: string;
    }>;
}
export declare const TraceFlyout: React.FC<TraceFlyoutProps>;
export {};
