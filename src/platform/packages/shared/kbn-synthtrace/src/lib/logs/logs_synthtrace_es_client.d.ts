import type { Client, estypes } from '@elastic/elasticsearch';
import type { LogDocument } from '@kbn/synthtrace-client/src/lib/logs';
import type { IngestProcessorContainer, MappingTypeMapping } from '@elastic/elasticsearch/lib/api/types';
import type { ValuesType } from 'utility-types';
import type { SynthtraceEsClient, SynthtraceEsClientOptions } from '../shared/base_client';
import { SynthtraceEsClientBase } from '../shared/base_client';
import type { Logger } from '../utils/create_logger';
import type { IndexTemplateName } from './custom_logsdb_index_templates';
export declare const LogsIndex = "logs";
export declare const LogsCustom = "logs@custom";
export type LogsSynthtraceEsClientOptions = Omit<SynthtraceEsClientOptions, 'pipeline'>;
interface Pipeline {
    includeSerialization?: boolean;
}
export interface LogsSynthtraceEsClient extends SynthtraceEsClient<LogDocument> {
    createIndexTemplate(name: IndexTemplateName): Promise<void>;
    deleteIndexTemplate(name: IndexTemplateName): Promise<void>;
    createComponentTemplate({ name, mappings, dataStreamOptions, }: {
        name: string;
        mappings?: MappingTypeMapping;
        dataStreamOptions?: {
            failure_store: {
                enabled: boolean;
            };
        };
    }): Promise<void>;
    deleteComponentTemplate(name: string): Promise<void>;
    createIndex(index: string, mappings?: MappingTypeMapping): Promise<void>;
    updateIndexTemplate(indexName: string, modify: (template: ValuesType<estypes.IndicesGetIndexTemplateResponse['index_templates']>['index_template']) => estypes.IndicesPutIndexTemplateRequest): Promise<void>;
    createCustomPipeline(processors: IngestProcessorContainer[], id: string): Promise<void>;
    deleteCustomPipeline(id: string): Promise<void>;
}
export declare class LogsSynthtraceEsClientImpl extends SynthtraceEsClientBase<LogDocument> implements LogsSynthtraceEsClient {
    constructor(options: {
        client: Client;
        logger: Logger;
        pipeline?: Pipeline;
    } & LogsSynthtraceEsClientOptions);
    createIndexTemplate(name: IndexTemplateName): Promise<void>;
    deleteIndexTemplate(name: IndexTemplateName): Promise<void>;
    createComponentTemplate({ name, mappings, dataStreamOptions, }: {
        name: string;
        mappings?: MappingTypeMapping;
        dataStreamOptions?: {
            failure_store: {
                enabled: boolean;
            };
        };
    }): Promise<void>;
    deleteComponentTemplate(name: string): Promise<void>;
    createIndex(index: string, mappings?: MappingTypeMapping): Promise<void>;
    updateIndexTemplate(indexName: string, modify: (template: ValuesType<estypes.IndicesGetIndexTemplateResponse['index_templates']>['index_template']) => estypes.IndicesPutIndexTemplateRequest): Promise<void>;
    createCustomPipeline(processors: IngestProcessorContainer[], id?: string): Promise<void>;
    deleteCustomPipeline(id?: string): Promise<void>;
}
export {};
