import React from 'react';
export { SpanDetail } from './span_detail';
export type { SpanNode } from './types';
interface TraceWaterfallProps {
    traceId: string;
    layout?: 'vertical' | 'horizontal';
}
export declare const TraceWaterfall: React.FC<TraceWaterfallProps>;
