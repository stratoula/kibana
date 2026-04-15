import { OtelSpan } from './otel_span';
import type { ApmOtelFields, SpanKind } from './apm_otel_fields';
import { ApmOtelError } from './apm_otel_error';
import { Entity } from '../../entity';
import type { HttpMethod } from '../span';
import type { ApmApplicationMetricFields } from '../apm_fields';
import { OtelMetricset } from './apm_otel_metrics';
export declare class OtelInstance extends Entity<ApmOtelFields> {
    span({ name, kind, ...fields }: ApmOtelFields & {
        kind: Extract<SpanKind, 'Internal' | 'Server'>;
    }): OtelSpan;
    httpExitSpan({ name, destinationUrl, }: {
        name: string;
        destinationUrl: string;
        method?: HttpMethod;
        statusCode?: number;
    }): OtelSpan;
    dbExitSpan({ name, type, statement }: {
        name: string;
        type: string;
        statement?: string;
    }): OtelSpan;
    messagingExitSpan({ name, type, operation, destination, }: {
        name: string;
        type: string;
        destination: string;
        operation: 'publish' | 'receive';
    }): OtelSpan;
    rpcSpan({ name, method, service }: {
        name: string;
        method: string;
        service: string;
    }): OtelSpan;
    appMetrics(metrics: ApmApplicationMetricFields): OtelMetricset<ApmOtelFields>;
    error({ message, type, stackTrace, groupingKey, }: {
        message: string;
        type?: string;
        stackTrace?: string;
        groupingKey?: string;
    }): ApmOtelError;
    containerId(containerId: string): this;
    podId(podId: string): this;
    hostName(hostName: string): this;
}
