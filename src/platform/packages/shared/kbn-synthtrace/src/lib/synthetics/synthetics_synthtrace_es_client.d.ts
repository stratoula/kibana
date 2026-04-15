import type { Client } from '@elastic/elasticsearch';
import type { SyntheticsMonitorDocument } from '@kbn/synthtrace-client';
import type { SynthtraceEsClient, SynthtraceEsClientOptions } from '../shared/base_client';
import { SynthtraceEsClientBase } from '../shared/base_client';
import type { Logger } from '../utils/create_logger';
export type SyntheticsSynthtraceEsClientOptions = Omit<SynthtraceEsClientOptions, 'pipeline'>;
export type SyntheticsSynthtraceEsClient = SynthtraceEsClient<SyntheticsMonitorDocument>;
export declare class SyntheticsSynthtraceEsClientImpl extends SynthtraceEsClientBase<SyntheticsMonitorDocument> implements SyntheticsSynthtraceEsClient {
    constructor(options: {
        client: Client;
        logger: Logger;
    } & SyntheticsSynthtraceEsClientOptions);
}
