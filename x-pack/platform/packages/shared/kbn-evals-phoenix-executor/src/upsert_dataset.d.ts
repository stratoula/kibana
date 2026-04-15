import type { PhoenixClient } from '@arizeai/phoenix-client';
import type { Example } from '@kbn/evals';
type ExampleWithId = Example & {
    id: string;
};
/**
 * Upserts a dataset. Phoenix doesn't allow to do this through its
 * REST API (yet), so we use GraphQL to remove/append examples from
 * the stored dataset, based on the examples in memory, matching
 * them by content.
 */
export declare function upsertDataset({ phoenixClient, datasetId, storedExamples, nextExamples, }: {
    phoenixClient: PhoenixClient;
    datasetId: string;
    storedExamples: ExampleWithId[];
    nextExamples: Example[];
}): Promise<void>;
export {};
