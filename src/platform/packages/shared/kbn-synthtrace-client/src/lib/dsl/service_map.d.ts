import type { AgentName } from '../../types/agent_names';
import type { Instance } from '../apm/instance';
import type { Transaction } from '../apm/transaction';
type SpanTypes = 'db' | 'app' | 'messaging' | 'external';
type SpanSubtypes = 'elasticsearch' | 'redis' | 'sqlite' | 'kafka';
type ServiceMapNode = Instance | SpanSubtypes;
type TransactionName = string;
type TraceItem = ServiceMapNode | [ServiceMapNode, TransactionName, SpanTypes?];
type TracePath = TraceItem[];
interface TracePathOpts {
    path: TracePath;
    transaction?: (transaction: Transaction) => Transaction;
}
type PathDef = TracePath | TracePathOpts;
export interface ServiceMapOpts {
    services: Array<string | {
        [serviceName: string]: AgentName;
    }>;
    definePaths: (services: Instance[]) => PathDef[];
    environment?: string;
    rootWithParent?: boolean;
}
export declare function serviceMap(options: ServiceMapOpts): (timestamp: number) => Transaction[];
export {};
