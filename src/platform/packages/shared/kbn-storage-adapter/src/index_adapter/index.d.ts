import type { ElasticsearchClient, Logger } from '@kbn/core/server';
import type { IndexStorageSettings, StorageDocumentOf, InternalIStorageClient } from '../..';
export interface StorageIndexAdapterOptions<TApplicationType> {
    /**
     * If this callback is provided, it will be called on every _source before returned to the caller of the search or get methods.
     * This is useful for migrating documents from one version to another, or for transforming the document before returning it.
     * This should be used as rarely as possible - in most cases, new properties should be added as optional.
     */
    migrateSource?: (document: Record<string, unknown>) => TApplicationType;
}
/**
 * Adapter for writing and reading documents to/from Elasticsearch,
 * using plain indices.
 *
 * TODO:
 * - Schema upgrades w/ fallbacks
 */
export declare class StorageIndexAdapter<TStorageSettings extends IndexStorageSettings, TApplicationType extends Partial<StorageDocumentOf<TStorageSettings>>> {
    private readonly esClient;
    private readonly storage;
    private readonly options;
    private readonly logger;
    constructor(esClient: ElasticsearchClient, logger: Logger, storage: TStorageSettings, options?: StorageIndexAdapterOptions<TApplicationType>);
    private getSearchIndexPattern;
    private getWriteTarget;
    private createOrUpdateIndexTemplate;
    private getExistingIndexTemplate;
    private getCurrentWriteIndex;
    private getExistingIndices;
    private getCurrentWriteIndexName;
    private createIndex;
    private updateMappingsOfExistingIndex;
    /**
     * Validates whether:
     * - an index template exists
     * - the index template has the right version (if not, update it)
     * - the index exists (if it doesn't, create it)
     * - the index has the right version (if not, update it)
     */
    private validateComponentsBeforeWriting;
    private search;
    private index;
    private bulk;
    private clean;
    private delete;
    private get;
    private maybeMigrateSource;
    private existsIndex;
    getClient(): InternalIStorageClient<TApplicationType>;
}
export type SimpleStorageIndexAdapter<TStorageSettings extends IndexStorageSettings> = StorageIndexAdapter<TStorageSettings, StorageDocumentOf<TStorageSettings>>;
