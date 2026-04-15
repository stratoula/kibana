import type { SynthtraceGenerator } from '../types';
import type { Fields } from './entity';
import type { Serializable } from './serializable';
export declare class PoissonEvents<TFields extends Fields = Fields> {
    private readonly from;
    private readonly to;
    private readonly rate;
    constructor(from: Date, to: Date, rate: number);
    private getTotalTimePeriod;
    private getInterarrivalTime;
    generator<TGeneratedFields extends Fields = TFields>(map: (timestamp: number, index: number) => Serializable<TGeneratedFields> | Array<Serializable<TGeneratedFields>>): SynthtraceGenerator<TGeneratedFields>;
    private generateEvents;
}
