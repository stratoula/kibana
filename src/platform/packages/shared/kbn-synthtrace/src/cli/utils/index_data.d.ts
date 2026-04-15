import type { Logger } from '../../lib/utils/create_logger';
import type { SynthtraceClients } from './clients_manager';
import type { BaseWorkerData } from './workers/types';
import type { StreamManager } from './stream_manager';
export declare function indexData({ file, bucketFrom, bucketTo, runOptions, workerId, logger, clients, from, to, streamManager, autoTerminateStreams, }: BaseWorkerData & {
    logger: Logger;
    clients: SynthtraceClients;
    streamManager: StreamManager;
    autoTerminateStreams?: boolean;
}): Promise<import("../../lib/utils/with_client").ScenarioReturnType<{
    '@timestamp'?: number;
}>[]>;
