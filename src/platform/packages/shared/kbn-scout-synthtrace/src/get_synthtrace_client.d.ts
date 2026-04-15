import type { Client } from '@elastic/elasticsearch';
import type { SynthtraceClientTypes, GetClientsReturn } from '@kbn/synthtrace';
import type { ScoutLogger, ScoutTestConfig } from '@kbn/scout';
export interface SynthtraceClientOptions {
    kbnUrl?: string;
    esClient: Client;
    log: ScoutLogger;
    config: ScoutTestConfig;
}
export declare function getSynthtraceClient<TClient extends SynthtraceClientTypes = SynthtraceClientTypes>(synthClient: TClient, { esClient, kbnUrl, log, config }: SynthtraceClientOptions, overrides?: {
    skipInstallation?: boolean;
}): Promise<GetClientsReturn<TClient>>;
