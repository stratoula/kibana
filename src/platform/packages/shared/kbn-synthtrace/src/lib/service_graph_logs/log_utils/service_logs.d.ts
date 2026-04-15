import type { LogDocument } from '@kbn/synthtrace-client';
import type { FailureMap } from '../types';
import { type ServiceGraphOptions } from './shared';
export interface RequestDocsOptions extends ServiceGraphOptions {
    entryService: string;
    index?: number;
    failures?: FailureMap;
}
export declare function generateServiceDocs({ serviceGraph, entryService, index, seed, failures, timestamp, metadataCache, }: RequestDocsOptions): Array<Partial<LogDocument>>;
