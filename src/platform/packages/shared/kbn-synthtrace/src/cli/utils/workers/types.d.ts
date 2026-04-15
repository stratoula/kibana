import type { RunOptions } from '../parse_run_cli_flags';
export interface BaseWorkerData {
    bucketFrom: Date;
    bucketTo: Date;
    workerId: string;
    file: string;
    from: number;
    to: number;
    runOptions: RunOptions;
}
