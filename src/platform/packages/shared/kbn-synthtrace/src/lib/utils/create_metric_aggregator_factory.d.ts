import type { Fields } from '@kbn/synthtrace-client';
import { PassThrough } from 'stream';
export declare function createMetricAggregatorFactory<TFields extends Fields>(): <TMetric extends Record<string, unknown>, TOutput extends Record<string, unknown>>({ filter, getAggregateKey, init, flushInterval, }: {
    filter: (event: TFields) => boolean;
    getAggregateKey: (event: TFields) => string;
    init: (event: TFields) => TMetric;
    flushInterval: string;
}, reduce: (metric: TMetric, event: TFields) => void, serialize: (metric: TMetric) => TOutput) => PassThrough;
