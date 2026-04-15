import { Client } from '@elastic/elasticsearch';
import type { RunOptions } from './parse_run_cli_flags';
export declare function bootstrap({ skipClientBootstrap, ...runOptions }: RunOptions & {
    skipClientBootstrap?: boolean;
}): Promise<{
    esClient: Client;
    kibanaClient: import("../../lib/shared/base_kibana_client").KibanaClient;
    clients: import("./clients_manager").GetClientsReturn<"apmEsClient" | "infraEsClient" | "logsEsClient" | "syntheticsEsClient" | "streamsClient">;
    logger: import("../../lib/utils/create_logger").Logger;
    kibanaUrl: string;
    esUrl: string;
}>;
