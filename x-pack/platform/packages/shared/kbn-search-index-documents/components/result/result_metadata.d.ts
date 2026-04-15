import type { IndicesGetMappingResponse, MappingProperty, SearchHit } from '@elastic/elasticsearch/lib/api/types';
import type { MetaDataProps, FieldProps } from './result_types';
export declare const resultTitle: (result: SearchHit) => string | undefined;
export declare const resultMetaData: (result: SearchHit) => MetaDataProps;
/**
 * Reorders an array of fields based on their importance.
 *
 * The function sorts the fields by checking if their names are in the `SPECIAL_NAME_FIELDS` array first and then by
 * their mapping type (semantic_text, dense_vector, sparse_vector) if they are not in the `SPECIAL_NAME_FIELDS` array.
 *
 * @param fields - An array of field properties to be reordered.
 * @returns The reordered array of field properties.
 */
export declare const reorderFieldsInImportance: (fields: FieldProps[]) => FieldProps[];
export declare const resultToFieldFromMappingResponse: (result: SearchHit, mappings?: IndicesGetMappingResponse) => FieldProps[];
export declare const resultToFieldFromMappings: (result: SearchHit, mappings?: Record<string, MappingProperty>) => FieldProps[];
