import type { MappingProperty } from '@elastic/elasticsearch/lib/api/types';
export interface ExtractedField {
    name: string;
    type: string;
    fullPath: string;
}
/**
 * Extracts all searchable fields from Elasticsearch mappings
 *
 * @param mappings - The mappings object from Elasticsearch
 * @returns Array of searchable fields with their full paths and types
 */
export declare const extractSearchableFields: (mappings: {
    mappings?: {
        properties?: Record<string, MappingProperty>;
    };
}) => ExtractedField[];
/**
 * Extracts all fields (not just searchable ones) from Elasticsearch mappings
 * Used for output field options where any field type is acceptable
 *
 * @param mappings - The mappings object from Elasticsearch
 * @returns Array of all fields with their full paths and types
 */
export declare const extractAllFields: (mappings: {
    mappings?: {
        properties?: Record<string, MappingProperty>;
    };
}) => ExtractedField[];
