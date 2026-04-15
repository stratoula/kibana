import type { DatasetInfo } from '@arizeai/phoenix-client/dist/esm/types/datasets';
import type { SomeDevLog } from '@kbn/some-dev-log';
import type { Model } from '@kbn/inference-common';
import type { EvalsExecutorClient, Evaluator, EvaluationDataset, ExperimentTask, RanExperiment, TaskOutput } from '@kbn/evals';
import type { PhoenixConfig } from './get_phoenix_config';
/**
 * Phoenix-backed eval runner. This remains supported as an option during the migration,
 * but the rest of `@kbn/evals` should depend only on the shared runner interface + types.
 */
export declare class KibanaPhoenixClient implements EvalsExecutorClient {
    private readonly options;
    private readonly phoenixClient;
    private readonly allowPhoenixDatasetDeleteRecreateFallback;
    private readonly experiments;
    constructor(options: {
        config: PhoenixConfig;
        log: SomeDevLog;
        model: Model;
        runId: string;
        repetitions?: number;
    });
    private syncDataSet;
    getDatasetByName(name: string): Promise<DatasetInfo>;
    runExperiment<TEvaluationDataset extends EvaluationDataset, TTaskOutput extends TaskOutput>(options: {
        dataset: TEvaluationDataset;
        metadata?: Record<string, unknown>;
        task: ExperimentTask<TEvaluationDataset['examples'][number], TTaskOutput>;
        concurrency?: number;
        /**
         * If true, the dataset is assumed to already exist in Phoenix and we will
         * use its id (resolved by name) instead of creating/upserting it from code.
         */
        trustUpstreamDataset?: boolean;
    }, evaluators: Array<Evaluator<TEvaluationDataset['examples'][number], TTaskOutput>>): Promise<RanExperiment>;
    getRanExperiments(): Promise<RanExperiment[]>;
}
