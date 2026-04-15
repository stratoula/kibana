import type { Readable } from 'stream';
import type { Logger } from '../../../utils/create_logger';
export declare function apmPipeline(logger: Logger, includeSerialization?: boolean, version?: string): (base: Readable) => NodeJS.WritableStream;
