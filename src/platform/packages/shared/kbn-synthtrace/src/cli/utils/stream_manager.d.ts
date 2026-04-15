import type { ToolingLog } from '@kbn/tooling-log';
import type { Fields } from '@kbn/synthtrace-client';
import type { Worker } from 'worker_threads';
import type { SynthtraceEsClient } from '../../lib/shared/base_client';
import type { SynthGenerator } from '../../lib/utils/with_client';
export declare class StreamManager {
    private readonly logger;
    private readonly teardownCallback;
    private readonly clientStreams;
    private readonly clientIndexPromises;
    private readonly trackedGeneratorStreams;
    readonly trackedWorkers: Worker[];
    constructor(logger: ToolingLog, teardownCallback?: () => Promise<void>);
    trackWorker(worker: Worker): void;
    /**
     * Create a single stream per client, and index data
     * received from the generator into that stream.
     */
    index(client: SynthtraceEsClient<Fields>, generator: SynthGenerator<Fields>): Promise<void>;
    private createOrReuseClientStream;
    teardown: () => Promise<void>;
}
