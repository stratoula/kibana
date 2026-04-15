import { LogLevel } from '../../lib/utils/create_logger';
import type { RunCliFlags } from '../run_synthtrace';
export declare function parseRunCliFlags(flags: RunCliFlags): {
    scenarioOpts: Record<string, unknown>;
    logLevel: LogLevel;
    files: string[];
    kibana: string | undefined;
    target: string | undefined;
    apiKey: string | undefined;
    versionOverride: unknown;
    concurrency: number;
    uniqueIds: boolean | undefined;
    liveBucketSize: number;
    clean: boolean;
    workers: number | undefined;
    "assume-package-version": string | undefined;
    insecure: boolean;
};
export type RunOptions = ReturnType<typeof parseRunCliFlags>;
