import type { RunOptions } from './parse_run_cli_flags';
export declare function startLiveDataUpload({ runOptions, from, to, }: {
    runOptions: RunOptions;
    from: number;
    to: number;
}): Promise<void>;
