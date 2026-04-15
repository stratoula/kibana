import type { Readable } from 'stream';
import type { Logger } from '../../../../utils/create_logger';
export declare function getOtelTransforms(): import("stream").Duplex[];
export declare function otelToApmPipeline(logger: Logger, includeSerialization?: boolean): (base: Readable) => import("stream").Duplex;
