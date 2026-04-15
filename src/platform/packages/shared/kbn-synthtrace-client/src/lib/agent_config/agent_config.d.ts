import type { AgentConfigFields } from './agent_config_fields';
import { Metricset } from '../apm/metricset';
export declare class AgentConfig extends Metricset<AgentConfigFields> {
    constructor();
    etag(etag: string): this;
}
