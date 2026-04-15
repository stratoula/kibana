import type { ToolingLog } from '@kbn/tooling-log';
export declare function untilContainerReady({ containerName, dockerComposeFilePath, signal, log, condition, }: {
    containerName: string;
    dockerComposeFilePath: string;
    signal: AbortSignal;
    log: ToolingLog;
    condition: [string, string];
}): Promise<void>;
