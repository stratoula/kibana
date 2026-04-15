import type { ElasticsearchClient } from '@kbn/core/server';
import type { Agent } from '../../types';
export declare function fetchAndAssignAgentMetrics(esClient: ElasticsearchClient, agents: Agent[]): Promise<Agent[]>;
