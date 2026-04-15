import type { BaseWorkerData } from '../types';
export interface WorkerData extends Omit<BaseWorkerData, 'bucketFrom' | 'bucketTo'> {
    bucketSizeInMs: number;
}
