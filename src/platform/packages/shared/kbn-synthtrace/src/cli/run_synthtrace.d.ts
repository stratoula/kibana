import type { Argv } from 'yargs';
declare function options(y: Argv): Argv<{
    files: string;
} & {
    target: string | undefined;
} & {
    kibana: string | undefined;
} & {
    apiKey: string | undefined;
} & {
    from: unknown;
} & {
    to: unknown;
} & {
    live: boolean | undefined;
} & {
    uniqueIds: boolean | undefined;
} & {
    liveBucketSize: number;
} & {
    clean: boolean;
} & {
    workers: number | undefined;
} & {
    concurrency: number;
} & {
    debug: boolean | undefined;
} & {
    verbose: boolean | undefined;
} & {
    logLevel: string;
} & {
    scenarioOpts: string | undefined;
} & {
    "assume-package-version": string | undefined;
} & {
    insecure: boolean;
}>;
export type RunCliFlags = ReturnType<typeof options>['argv'];
export declare function runSynthtrace(): void;
export {};
