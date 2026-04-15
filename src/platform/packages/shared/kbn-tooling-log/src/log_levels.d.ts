declare const LEVELS: readonly ["silent", "error", "warning", "success", "info", "debug", "verbose"];
export declare const DEFAULT_LOG_LEVEL: "info";
export type LogLevel = (typeof LEVELS)[number];
export declare function pickLevelFromFlags(flags: Record<string, string | boolean | string[] | undefined>, options?: {
    default?: LogLevel;
}): "verbose" | "debug" | "info" | "silent" | "error" | "warning" | "success";
export declare const LOG_LEVEL_FLAGS: Array<{
    name: 'verbose' | 'info' | 'debug' | 'quiet' | 'silent';
    flag: string;
    description: string;
}>;
export declare function getLogLevelFlagHelpItems(defaultLogLevel?: string): Array<{
    flag: string;
    description: string;
}>;
export declare function getLogLevelFlagsHelp(defaultLogLevel?: string): string;
export type ParsedLogLevel = ReturnType<typeof parseLogLevel>;
export declare function parseLogLevel(name: LogLevel): {
    name: "verbose" | "debug" | "info" | "silent" | "error" | "warning" | "success";
    flags: { [key in LogLevel]: boolean; };
};
export {};
