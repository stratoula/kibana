import type { RunOptions } from './parse_run_cli_flags';
export declare function startHistoricalDataUpload({ runOptions, from, to, }: {
    runOptions: RunOptions;
    from: number;
    to: number;
}): Promise<void>;
