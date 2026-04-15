import type { Fields } from '@kbn/synthtrace-client';
import { Transform } from 'stream';
export declare function getRoutingTransform<T extends Fields>(dataStreamType: string): Transform;
