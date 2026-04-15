import type { Fields, Timerange } from '@kbn/synthtrace-client';
import type { Client } from '@elastic/elasticsearch';
import type { Logger } from '../lib/utils/create_logger';
import type { ScenarioReturnType } from '../lib/utils/with_client';
import type { SynthtraceClients } from './utils/clients_manager';
import type { RunOptions } from './utils/parse_run_cli_flags';
import type { KibanaClient } from '../lib/shared/base_kibana_client';
export type ScenarioInitOptions = RunOptions & {
    logger: Logger;
    from: number;
    to: number;
};
type Generate<TFields extends Fields> = (options: {
    range: Timerange;
    clients: SynthtraceClients;
}) => ScenarioReturnType<TFields> | Array<ScenarioReturnType<TFields>>;
export type Scenario<TFields extends Fields = Fields> = (options: ScenarioInitOptions) => Promise<{
    bootstrap?: (synthtraceClients: SynthtraceClients, kibanaClient: KibanaClient, esClient: Client) => Promise<void>;
    generate: Generate<TFields>;
    teardown?: (synthtraceClients: SynthtraceClients, kibanaClient: KibanaClient, esClient: Client) => Promise<void>;
    setupPipeline?: (synthtraceClients: SynthtraceClients) => void;
}>;
export {};
