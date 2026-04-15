import type { Writer } from '@kbn/tooling-log';
import { ToolingLog } from '@kbn/tooling-log';
export declare enum LogLevel {
    verbose = "verbose",
    debug = "debug",
    info = "info",
    warn = "warning",
    error = "error"
}
export declare function extendToolingLog(log: ToolingLog, logLevel?: LogLevel): Logger;
export declare function createLogger(logLevel: LogLevel, writer?: Writer): Logger;
export type Logger = ToolingLog & {
    perf: <T>(name: string, cb: () => T) => T;
};
