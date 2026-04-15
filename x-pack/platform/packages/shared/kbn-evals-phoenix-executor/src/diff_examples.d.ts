import type { Example } from '@kbn/evals';
type ExampleWithId = Example & {
    id: string;
};
export declare function diffExamples(stored: ExampleWithId[], next: Example[]): {
    toDelete: string[];
    toAdd: Example<Record<string, unknown>, any, Record<string, unknown> | null>[];
};
export {};
