import type { Fields } from '../entity';
import { Serializable } from '../serializable';
export declare const LONG_FIELD_NAME = "thisisaverylongfieldnamethatevendoesnotcontainanyspaceswhyitcouldpotentiallybreakouruiinseveralplaces";
export type OtelLogDocument = Fields & Partial<{
    _index?: string;
    trace_id?: string;
    span_id?: string;
    attributes?: Record<string, unknown>;
    severity_text?: string;
    severity_number?: number;
    resource?: {
        attributes?: Record<string, unknown>;
    };
    body?: {
        text?: string;
        structured?: Record<string, unknown>;
    };
    flags?: number;
    observed_timestamp?: number;
}>;
declare class OtelLog extends Serializable<OtelLogDocument> {
    constructor(fields: OtelLogDocument);
    private setResourceAttributeField;
    service(name: string): this;
    hostName(name: string): this;
    containerId(id: string): this;
    logLevel(level: string): this;
    message(message: string): this;
    setHostIp(hostIp: string): this;
    timestamp(time: number): this;
    addAttributes(attributes: Record<string, unknown>): this;
    addResourceAttributes(attributes: Record<string, unknown>): this;
    deleteField(fieldName: keyof OtelLogDocument): this;
}
declare function create(): OtelLog;
declare function createForIndex(index: string): OtelLog;
export declare const otelLog: {
    create: typeof create;
    createForIndex: typeof createForIndex;
};
export {};
