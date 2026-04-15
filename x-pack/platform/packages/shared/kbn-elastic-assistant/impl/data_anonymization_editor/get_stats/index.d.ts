import type { Replacements } from '@kbn/elastic-assistant-common';
import type { AnonymizationFieldResponse } from '@kbn/elastic-assistant-common/impl/schemas';
import type { Stats } from '../helpers';
export declare const getStats: ({ anonymizationFieldsStatus, anonymizationFields, rawData, replacements, }: {
    anonymizationFieldsStatus?: {
        allowed?: {
            doc_count: number;
        };
        anonymized?: {
            doc_count: number;
        };
        denied?: {
            doc_count: number;
        };
    };
    anonymizationFields?: AnonymizationFieldResponse[];
    rawData?: string | Record<string, string[]>;
    replacements?: Replacements;
}) => Stats;
