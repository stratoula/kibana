import type { ApmSynthtraceEsClient } from '../../lib/apm/client/apm_synthtrace_es_client';
import type { InfraSynthtraceEsClient } from '../../lib/infra/infra_synthtrace_es_client';
import type { LogsSynthtraceEsClient } from '../../lib/logs/logs_synthtrace_es_client';
import type { SynthtraceEsClientOptions } from '../../lib/shared/base_client';
import type { SyntheticsSynthtraceEsClient } from '../../lib/synthetics/synthetics_synthtrace_es_client';
import type { StreamsSynthtraceClient } from '../../lib/streams/streams_synthtrace_client';
import type { PackageManagement } from '../../lib/shared/types';
export interface PipelineOptions {
    includePipelineSerialization?: boolean;
}
type DefaultSynthtraceClients = [
    'apmEsClient',
    'infraEsClient',
    'logsEsClient',
    'syntheticsEsClient',
    'streamsClient'
];
export interface SynthtraceClients {
    apmEsClient: ApmSynthtraceEsClient;
    infraEsClient: InfraSynthtraceEsClient;
    logsEsClient: LogsSynthtraceEsClient;
    syntheticsEsClient: SyntheticsSynthtraceEsClient;
    streamsClient: StreamsSynthtraceClient;
}
export type SynthtraceClientsWithFleetPackage = {
    [K in keyof SynthtraceClients]: SynthtraceClients[K] extends PackageManagement ? K : never;
}[keyof SynthtraceClients];
export type SynthtraceClientTypes = DefaultSynthtraceClients[number];
export type GetClientsReturn<K extends SynthtraceClientTypes = SynthtraceClientTypes> = Pick<SynthtraceClients, K>;
export declare class SynthtraceClientsManager {
    private readonly options;
    constructor(options: Omit<SynthtraceEsClientOptions, 'pipeline' | 'fleetClient' | 'kibana'> & PipelineOptions);
    getClients<const TClient extends SynthtraceClientTypes = SynthtraceClientTypes>(opts?: {
        clients?: TClient[];
        packageVersion?: string;
    } & Pick<SynthtraceEsClientOptions, 'kibana'>): GetClientsReturn<TClient>;
    initFleetPackageForClient<TClient extends SynthtraceClientTypes = SynthtraceClientsWithFleetPackage>(opts: {
        clients: Partial<GetClientsReturn<TClient>>;
        version?: string;
        skipInstallation?: boolean;
    }): Promise<Record<TClient, string | undefined>>;
    private isClientWithPackageManangement;
}
export {};
