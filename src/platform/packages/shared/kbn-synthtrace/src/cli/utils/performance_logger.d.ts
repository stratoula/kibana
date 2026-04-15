import type { Logger } from '../../lib/utils/create_logger';
export declare function startPerformanceLogger({ logger, interval, }: {
    logger: Logger;
    interval?: number;
}): () => void;
