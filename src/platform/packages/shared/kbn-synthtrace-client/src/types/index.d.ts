import type { BulkCreateOperation, BulkIndexOperation } from '@elastic/elasticsearch/lib/api/types';
import type { Fields } from '../lib/entity';
import type { Serializable } from '../lib/serializable';
export type SynthtraceESAction = {
    create: BulkCreateOperation;
} | {
    index: BulkIndexOperation;
};
export type SynthtraceDynamicTemplate = Record<string, string>;
export type ESDocumentWithOperation<TFields extends Fields> = {
    _index?: string;
    _action?: SynthtraceESAction;
    _dynamicTemplates?: SynthtraceDynamicTemplate;
    ['data_stream.type']?: string;
    ['data_stream.dataset']?: string;
    ['data_stream.namespace']?: string;
} & TFields;
export type SynthtraceGenerator<TFields extends Fields> = Generator<Serializable<TFields>>;
export type SynthtraceProcessor<TFields extends Fields> = (fields: ESDocumentWithOperation<TFields>) => ESDocumentWithOperation<TFields>;
export { ApmSynthtracePipelineSchema, type ApmSynthtracePipelines, } from './apm_synthtrace_pipelines';
