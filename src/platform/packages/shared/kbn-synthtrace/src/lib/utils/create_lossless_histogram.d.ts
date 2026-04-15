interface SerializedHistogram {
    counts: number[];
    values: number[];
    total: number;
    sum: number;
}
declare class LosslessHistogram {
    private backingHistogram;
    private readonly min;
    private readonly max;
    private readonly trackedValues;
    constructor(options?: {
        min?: number;
        max?: number;
    });
    private getBackingHistogram;
    private linearCounts;
    record(value: number): void;
    serialize(): SerializedHistogram;
}
export declare function createLosslessHistogram(options?: {
    min?: number;
    max?: number;
}): LosslessHistogram;
export {};
