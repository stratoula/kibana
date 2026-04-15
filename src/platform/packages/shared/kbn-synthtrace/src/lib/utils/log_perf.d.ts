import type { ToolingLog } from '@kbn/tooling-log';
import { LogLevel } from './create_logger';
export declare const logPerf: <T>(logger: ToolingLog, logLevel: LogLevel, name: string, cb: () => T) => T;
