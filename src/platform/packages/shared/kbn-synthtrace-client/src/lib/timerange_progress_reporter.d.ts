import type { ToolingLog } from '@kbn/tooling-log';
interface TimerangeProgressOptions {
    log: ToolingLog;
    total: number;
    reportEvery: number;
}
export declare class TimerangeProgressReporter {
    private readonly options;
    private readonly startOfRun;
    private measurements;
    private lastReported;
    constructor(options: TimerangeProgressOptions);
    next(index: number): void;
    private report;
}
export {};
