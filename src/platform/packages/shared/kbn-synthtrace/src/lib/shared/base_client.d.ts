import type { Client } from '@elastic/elasticsearch';
import type { Fields, SynthtraceGenerator } from '@kbn/synthtrace-client';
import { Readable } from 'stream';
import type { Logger } from '../utils/create_logger';
import { KibanaClient } from './base_kibana_client';
import { FleetClient } from './fleet_client';
export interface SynthtraceEsClientOptions {
    client: Client;
    kibana?: {
        target: string;
        username?: string;
        password?: string;
        apiKey?: string;
        logger?: Logger;
    } | KibanaClient;
    fleetClient?: FleetClient;
    logger: Logger;
    concurrency?: number;
    refreshAfterIndex?: boolean;
    pipeline: (base: Readable) => NodeJS.WritableStream;
}
type MaybeArray<T> = T | T[];
export interface SynthtraceEsClient<TFields extends Fields = {}> {
    index(streamOrGenerator: MaybeArray<Readable | SynthtraceGenerator<TFields>>, pipelineCallback?: (base: Readable) => NodeJS.WritableStream): Promise<void>;
    clean(): Promise<void>;
    refresh(): ReturnType<Client['indices']['refresh']>;
    setEsClient(client: Client): void;
    setPipeline(cb: (base: Readable) => NodeJS.WritableStream): void;
    getAllIndices(): string[];
}
export declare class SynthtraceEsClientBase<TFields extends Fields> implements SynthtraceEsClient<TFields> {
    protected client: Client;
    protected readonly kibanaClient?: KibanaClient;
    protected readonly fleetClient?: FleetClient;
    protected readonly logger: Logger;
    private readonly concurrency;
    private readonly refreshAfterIndex;
    private pipelineCallback;
    protected dataStreams: string[];
    protected indices: string[];
    constructor(options: SynthtraceEsClientOptions);
    private initKibanaClient;
    protected get kibana(): KibanaClient;
    clean(): Promise<void>;
    refresh(): Promise<import("@elastic/elasticsearch/lib/api/types").ShardsOperationResponseBase>;
    setEsClient(client: Client): void;
    setPipeline(cb: (base: Readable) => NodeJS.WritableStream): void;
    index(streamOrGenerator: MaybeArray<Readable | SynthtraceGenerator<TFields>>, pipelineCallback?: (base: Readable) => NodeJS.WritableStream): Promise<void>;
    getAllIndices(): string[];
}
export {};
