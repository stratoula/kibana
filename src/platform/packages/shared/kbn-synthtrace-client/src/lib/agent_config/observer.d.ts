import type { AgentConfigFields } from './agent_config_fields';
import { AgentConfig } from './agent_config';
import { Entity } from '../entity';
export declare class Observer extends Entity<AgentConfigFields> {
    agentConfig(): AgentConfig;
}
export declare function observer(): Observer;
