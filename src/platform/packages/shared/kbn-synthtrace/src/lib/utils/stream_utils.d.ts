import type { Duplex, Readable } from 'stream';
import { Transform, PassThrough } from 'stream';
export declare function sequential(...streams: Readable[]): PassThrough;
export declare function fork(...streams: Transform[]): Duplex;
export declare function createFilterTransform<T>(filter: (chunk: T) => boolean): Transform;
