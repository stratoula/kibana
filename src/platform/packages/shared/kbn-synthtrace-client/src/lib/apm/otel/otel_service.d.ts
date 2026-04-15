import { Entity } from '../../entity';
import type { ApmOtelFields } from './apm_otel_fields';
import { OtelInstance } from './otel_instance';
export interface OtelServiceParams {
    name: string;
    namespace?: string;
    sdkName: 'opentelemetry' | 'otlp';
    sdkLanguage: string;
    distro?: 'elastic';
}
export declare class OtelService extends Entity<ApmOtelFields> {
    constructor(params: OtelServiceParams);
    instance(instanceName: string): OtelInstance;
}
