import type { TraceSpan } from '@kbn/evals-common';
export interface SpanNode extends TraceSpan {
    children: SpanNode[];
    depth: number;
}
