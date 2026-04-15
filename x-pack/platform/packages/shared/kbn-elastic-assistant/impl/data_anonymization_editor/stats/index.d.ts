import type { AnonymizationFieldResponse } from '@kbn/elastic-assistant-common/impl/schemas';
import type { Replacements } from '@kbn/elastic-assistant-common';
import React from 'react';
interface Props {
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
    isDataAnonymizable: boolean;
    anonymizationFields?: AnonymizationFieldResponse[];
    rawData?: string | Record<string, string[]>;
    inline?: boolean;
    replacements?: Replacements;
    titleSize?: 's' | 'l' | 'xs' | 'm' | 'xxxs' | 'xxs' | undefined;
    gap?: string;
}
export declare const Stats: React.NamedExoticComponent<Props>;
export {};
