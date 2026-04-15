import type { ApmFields, ApmOtelFields } from '@kbn/synthtrace-client';
export declare const createApmMetricAggregator: <TMetric extends Record<string, unknown>, TOutput extends Record<string, unknown>>({ filter, getAggregateKey, init, flushInterval, }: {
    filter: (event: ApmFields) => boolean;
    getAggregateKey: (event: ApmFields) => string;
    init: (event: ApmFields) => TMetric;
    flushInterval: string;
}, reduce: (metric: TMetric, event: ApmFields) => void, serialize: (metric: TMetric) => TOutput) => import("stream").PassThrough;
export declare const createOtelMetricAggregator: <TMetric extends Record<string, unknown>, TOutput extends Record<string, unknown>>({ filter, getAggregateKey, init, flushInterval, }: {
    filter: (event: ApmOtelFields) => boolean;
    getAggregateKey: (event: ApmOtelFields) => string;
    init: (event: ApmOtelFields) => TMetric;
    flushInterval: string;
}, reduce: (metric: TMetric, event: ApmOtelFields) => void, serialize: (metric: TMetric) => TOutput) => import("stream").PassThrough;
