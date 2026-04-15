import type { ApmFields, ApmOtelFields } from '@kbn/synthtrace-client';
import { Transform } from 'stream';
export declare function getSerializeTransform<TFields = ApmFields | ApmOtelFields>(): Transform;
