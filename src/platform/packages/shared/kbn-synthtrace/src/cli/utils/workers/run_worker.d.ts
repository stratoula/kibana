import type { Logger } from '../../../lib/utils/create_logger';
import type { StreamManager } from '../stream_manager';
interface WorkerServiceOptions<TWorkerData> {
    logger: Logger;
    streamManager: StreamManager;
    workerIndex: number;
    workerScriptPath: string;
    workerData: TWorkerData;
    onMessage?: (message: unknown) => void;
}
export declare function runWorker<TWorkerData>({ workerIndex, workerScriptPath, streamManager, workerData, onMessage, logger, }: WorkerServiceOptions<TWorkerData>): Promise<unknown>;
export {};
