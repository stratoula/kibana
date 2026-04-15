import type { OpenTelemetryAgentName } from '../../types/agent_names';
import { Entity } from '../entity';
import type { ApmFields } from './apm_fields';
import { Instance } from './instance';
import type { OtelServiceParams } from './otel';
import { OtelService } from './otel';
export declare class Service extends Entity<ApmFields> {
    instance(instanceName: string): Instance;
}
export declare function service(name: string, environment: string, agentName: string | OpenTelemetryAgentName): Service;
export declare function service(options: {
    name: string;
    environment: string;
    agentVersion?: string;
} & ({
    agentName: string;
} | {
    agentName: OpenTelemetryAgentName;
})): Service;
export declare function otelService(options: OtelServiceParams): OtelService;
