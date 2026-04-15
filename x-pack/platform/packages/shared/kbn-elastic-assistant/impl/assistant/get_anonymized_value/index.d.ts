import type { Replacements } from '@kbn/elastic-assistant-common';
export declare const getAnonymizedValue: ({ currentReplacements, rawValue, }: {
    currentReplacements: Replacements | undefined;
    rawValue: string;
}) => string;
