import type { ElasticsearchClient, Logger } from '@kbn/core/server';
import type { Field } from '../../fields/field';
import type { RegistryDataStream, IndexTemplateEntry, IndexTemplate, IndexTemplateMappings, RegistryElasticsearch } from '../../../../types';
export interface IndexTemplateMapping {
    [key: string]: any;
}
export interface CurrentDataStream {
    dataStreamName: string;
    replicated: boolean;
    indexTemplate: IndexTemplate;
    currentWriteIndex: string;
}
/**
 * getTemplate retrieves the default template but overwrites the index pattern with the given value.
 *
 * @param indexPattern String with the index pattern
 */
export declare function getTemplate({ templateIndexPattern, packageName, composedOfTemplates, templatePriority, hidden, registryElasticsearch, isIndexModeTimeSeries, type, isOtelInputType, }: {
    templateIndexPattern: string;
    packageName: string;
    composedOfTemplates: string[];
    templatePriority: number;
    type: string;
    hidden?: boolean;
    registryElasticsearch?: RegistryElasticsearch | undefined;
    isIndexModeTimeSeries?: boolean;
    isOtelInputType?: boolean;
}): IndexTemplate;
/**
 * Generate mapping takes the given nested fields array and creates the Elasticsearch
 * mapping properties out of it.
 *
 * This assumes that all fields with dotted.names have been expanded in a previous step.
 *
 * @param fields
 */
export declare function generateMappings(fields: Field[], isIndexModeTimeSeries?: boolean): IndexTemplateMappings;
/**
 * Generates the template name out of the given information
 */
export declare function generateTemplateName(dataStream: RegistryDataStream): string;
export declare function generateTemplateIndexPattern(dataStream: RegistryDataStream, isOtelInputType?: boolean): string;
export declare function getTemplatePriority(dataStream: RegistryDataStream): number;
/**
 * Returns a map of the data stream path fields to elasticsearch index pattern.
 * @param dataStreams an array of RegistryDataStream objects
 */
export declare function generateESIndexPatterns(dataStreams: RegistryDataStream[] | undefined): Record<string, string>;
export declare const updateCurrentWriteIndices: (esClient: ElasticsearchClient, logger: Logger, templates: IndexTemplateEntry[], options?: {
    ignoreMappingUpdateErrors?: boolean;
    skipDataStreamRollover?: boolean;
}) => Promise<void>;
