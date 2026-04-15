import type { Replacements } from '@kbn/elastic-assistant-common';
import React from 'react';
export interface Props {
    markdown: string;
    replacements: Replacements;
}
export declare const ReplacementsContextViewer: React.NamedExoticComponent<Props>;
