import type { Client } from '@elastic/elasticsearch';
import type { InfraDocument } from '@kbn/synthtrace-client';
import type { SynthtraceEsClient, SynthtraceEsClientOptions } from '../shared/base_client';
import { SynthtraceEsClientBase } from '../shared/base_client';
import type { Logger } from '../utils/create_logger';
import type { PipelineOptions } from '../../cli/utils/clients_manager';
import type { PackageManagement } from '../shared/types';
export type InfraSynthtraceEsClientOptions = Omit<SynthtraceEsClientOptions, 'pipeline'>;
export interface InfraSynthtraceEsClient extends SynthtraceEsClient<InfraDocument>, PackageManagement {
}
export declare class InfraSynthtraceEsClientImpl extends SynthtraceEsClientBase<InfraDocument> implements InfraSynthtraceEsClient {
    constructor(options: {
        client: Client;
        logger: Logger;
        pipeline?: PipelineOptions;
    } & InfraSynthtraceEsClientOptions & PipelineOptions);
    initializePackage(opts?: {
        version?: string;
        skipInstallation?: boolean;
    }): Promise<string>;
    uninstallPackage(): Promise<void>;
}
