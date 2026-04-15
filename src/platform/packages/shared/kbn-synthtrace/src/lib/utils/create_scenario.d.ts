import type { Fields } from '@kbn/synthtrace-client';
import type { Scenario } from '../../cli/scenario';
type GenerateFn<TFields extends Fields> = Awaited<ReturnType<Scenario<TFields>>>['generate'];
export declare const createCliScenario: <TFields extends Fields>(generate: GenerateFn<TFields>) => Scenario<TFields>;
export {};
