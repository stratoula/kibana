import { BaseSpan } from './base_span';
import type { ApmFields, SpanParams } from './apm_fields';
export declare class Span extends BaseSpan {
    constructor(fields: ApmFields);
    duration(duration: number): this;
    destination(resource: string): this;
}
export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';
export declare function httpExitSpan({ spanName, destinationUrl, method, statusCode, }: {
    spanName: string;
    destinationUrl: string;
    method?: HttpMethod;
    statusCode?: number;
}): SpanParams;
export declare function dbExitSpan({ spanName, spanSubtype }: {
    spanName: string;
    spanSubtype?: string;
}): {
    spanName: string;
    spanType: string;
    spanSubtype: string | undefined;
    'service.target.type': string | undefined;
    'span.destination.service.resource': string | undefined;
};
export declare function elasticsearchSpan(spanName: string, statement?: string): SpanParams;
export declare function sqliteSpan(spanName: string, statement?: string): SpanParams;
export declare function kafkaSpan(spanName: string): SpanParams;
export declare function redisSpan(spanName: string): SpanParams;
