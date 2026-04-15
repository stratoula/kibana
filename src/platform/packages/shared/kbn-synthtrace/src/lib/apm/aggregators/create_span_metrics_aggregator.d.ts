/**
 * Simulates multiple spans aggregated into a single service_destination metric document.
 * Import this constant in tests to calculate expected values.
 */
export declare const SPANS_PER_DESTINATION_METRIC = 5;
export declare function createSpanMetricsAggregator(flushInterval: string): import("stream").PassThrough;
