import { type Streams } from '@kbn/streams-schema';
import type { Required } from 'utility-types';
import type { Condition } from '@kbn/streamlang';
import type { IngestUpsertRequest } from '@kbn/streams-schema';
import type { SynthtraceEsClient, SynthtraceEsClientOptions } from '../shared/base_client';
import { SynthtraceEsClientBase } from '../shared/base_client';
import type { KibanaClientFetchOptions } from '../shared/base_kibana_client';
interface StreamsDocument {
}
export interface StreamsSynthtraceClient extends SynthtraceEsClient<StreamsDocument> {
    forkStream<TFetchOptions extends KibanaClientFetchOptions | undefined>(streamName: string, request: {
        stream: {
            name: string;
        };
        where: Condition;
    }, requestOptions?: TFetchOptions): Promise<TFetchOptions extends {
        ignore: number[];
    } ? undefined : {
        acknowledged: true;
    }>;
    putStream<TFetchOptions extends KibanaClientFetchOptions | undefined>(streamName: string, request: Streams.all.UpsertRequest, requestOptions?: TFetchOptions): Promise<TFetchOptions extends {
        ignore: number[];
    } ? undefined : {
        acknowledged: true;
        result: 'created' | 'updated';
    }>;
    putIngestStream<TFetchOptions extends KibanaClientFetchOptions | undefined>(streamName: string, request: {
        ingest: IngestUpsertRequest;
    }, requestOptions?: TFetchOptions): Promise<TFetchOptions extends {
        ignore: number[];
    } ? undefined : {
        acknowledged: true;
        result: 'created' | 'updated';
    }>;
    enableFailureStore(streamName: string): Promise<unknown>;
    enable(): Promise<void>;
    disable(): Promise<void>;
    clearESCache(): Promise<void>;
}
export declare class StreamsSynthtraceClientImpl extends SynthtraceEsClientBase<StreamsDocument> implements StreamsSynthtraceClient {
    constructor(options: Required<Omit<SynthtraceEsClientOptions, 'pipeline'>, 'kibana'>);
    forkStream: StreamsSynthtraceClient['forkStream'];
    putStream: StreamsSynthtraceClient['putStream'];
    putIngestStream: StreamsSynthtraceClient['putIngestStream'];
    enableFailureStore(streamName: string): Promise<import("@elastic/elasticsearch/lib/api/types").AcknowledgedResponseBase>;
    enable(): Promise<void>;
    disable(): Promise<void>;
    clean(): Promise<void>;
    clearESCache(): Promise<void>;
}
export {};
