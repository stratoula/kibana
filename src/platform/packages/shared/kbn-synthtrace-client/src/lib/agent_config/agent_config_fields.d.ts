import type { ApmFields } from '../apm/apm_fields';
export type AgentConfigFields = Pick<ApmFields, '@timestamp' | 'processor.event' | 'processor.name' | 'metricset.name' | 'observer.version' | 'observer.type' | 'observer.version_major' | 'ecs.version' | 'event.ingested'> & Partial<{
    'labels.etag': string;
    agent_config_applied: number;
    'event.agent_id_status': string;
}>;
