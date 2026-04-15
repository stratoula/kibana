import type { SynthtraceGenerator } from '../types';
import type { Fields } from './entity';
import type { Serializable } from './serializable';
export declare class GaussianEvents<TFields extends Fields = Fields> {
    private readonly from;
    private readonly to;
    private readonly mean;
    private readonly width;
    private readonly totalPoints;
    constructor(from: Date, to: Date, mean: Date, width: number, totalPoints: number);
    generator<TGeneratedFields extends Fields = TFields>(map: (timestamp: number, index: number) => Serializable<TGeneratedFields> | Array<Serializable<TGeneratedFields>>): SynthtraceGenerator<TGeneratedFields>;
    private generateEvents;
}
