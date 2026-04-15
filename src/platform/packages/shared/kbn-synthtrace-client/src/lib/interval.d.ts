import type { ToolingLog } from '@kbn/tooling-log';
import type { unitOfTime } from 'moment';
import type { SynthtraceGenerator } from '../types';
import type { Fields } from './entity';
import type { Serializable } from './serializable';
export declare function parseInterval(interval: string): {
    intervalAmount: number;
    intervalUnit: unitOfTime.DurationConstructor;
};
interface IntervalOptions {
    from: Date;
    to: Date;
    interval: string;
    rate?: number;
    log?: ToolingLog;
}
interface StepDetails {
    stepMilliseconds: number;
}
export declare class Interval<TFields extends Fields = Fields> {
    private readonly options;
    private readonly intervalAmount;
    private readonly intervalUnit;
    private readonly _rate;
    constructor(options: IntervalOptions);
    private getIntervalMilliseconds;
    private getTimestamps;
    generator<TGeneratedFields extends Fields = TFields>(map: (timestamp: number, index: number, stepDetails: StepDetails) => Serializable<TGeneratedFields> | Array<Serializable<TGeneratedFields>>): SynthtraceGenerator<TGeneratedFields>;
    rate(rate: number): Interval;
}
export {};
