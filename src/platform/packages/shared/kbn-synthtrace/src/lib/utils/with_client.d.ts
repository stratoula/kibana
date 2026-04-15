import type { Fields, SynthtraceGenerator } from '@kbn/synthtrace-client';
import type { Readable } from 'stream';
import type { SynthtraceEsClient } from '../shared/base_client';
export type SynthGenerator<TFields extends Fields> = SynthtraceGenerator<TFields> | Array<SynthtraceGenerator<TFields>> | Readable;
export declare const withClient: <TFields extends Fields>(client: SynthtraceEsClient<TFields>, generator: SynthGenerator<TFields>) => {
    client: SynthtraceEsClient<TFields>;
    generator: SynthGenerator<TFields>;
};
export type ScenarioReturnType<TFields extends Fields> = ReturnType<typeof withClient<TFields>>;
export declare function indexAll(scenarios: ScenarioReturnType<Fields> | ScenarioReturnType<Fields>[]): Promise<void>;
