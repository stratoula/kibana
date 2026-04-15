import type { Moment } from 'moment';
import type { ToolingLog } from '@kbn/tooling-log';
import { GaussianEvents } from './gaussian_events';
import { Interval } from './interval';
import { PoissonEvents } from './poisson_events';
export declare class Timerange {
    readonly from: Date;
    readonly to: Date;
    private readonly log?;
    constructor(from: Date, to: Date, log?: ToolingLog | undefined);
    interval(interval: string): Interval<{
        '@timestamp'?: number;
    }>;
    ratePerMinute(rate: number): Interval<{
        '@timestamp'?: number;
    }>;
    poissonEvents(rate: number): PoissonEvents<{
        '@timestamp'?: number;
    }>;
    gaussianEvents(mean: Date, width: number, totalPoints: number): GaussianEvents<{
        '@timestamp'?: number;
    }>;
    splitInto(segmentCount: number): Timerange[];
    toString(): string;
}
type DateLike = Date | number | Moment | string;
export declare function timerange(from: DateLike, to: DateLike, log?: ToolingLog): Timerange;
export {};
