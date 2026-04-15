import type { Logger } from '../../../lib/utils/create_logger';
import { LogLevel } from '../../../lib/utils/create_logger';
export declare function logMessage(logger: Logger, [logLevel, msg]: [LogLevel, string]): void;
