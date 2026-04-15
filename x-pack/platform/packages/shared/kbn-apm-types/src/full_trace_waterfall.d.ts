type FullTraceWaterfallScrollProps = {
    scrollStrategy?: 'window';
    highlightedSpanId?: string;
} | {
    scrollStrategy: 'parent';
    highlightedSpanId?: string;
    scrollToHighlightedOnMount?: boolean;
};
export type FullTraceWaterfallProps = {
    traceId: string;
    rangeFrom: string;
    rangeTo: string;
    serviceName?: string;
    scrollElement?: Element;
    onNodeClick?: (nodeSpanId: string) => void;
    onErrorClick?: FullTraceWaterfallOnErrorClick;
} & FullTraceWaterfallScrollProps;
export type FullTraceWaterfallOnErrorClick = (params: {
    traceId: string;
    docId: string;
    errorCount: number;
    errorDocId?: string;
    docIndex?: string;
}) => void;
export {};
