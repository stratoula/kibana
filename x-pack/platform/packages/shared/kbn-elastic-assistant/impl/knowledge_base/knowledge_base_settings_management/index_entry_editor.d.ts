import React from 'react';
import type { IndexEntry } from '@kbn/elastic-assistant-common';
import type { DataViewsContract } from '@kbn/data-views-plugin/public';
import type { HttpSetup } from '@kbn/core-http-browser';
interface Props {
    http: HttpSetup;
    dataViews: DataViewsContract;
    entry?: IndexEntry;
    originalEntry?: IndexEntry;
    setEntry: React.Dispatch<React.SetStateAction<Partial<IndexEntry>>>;
    hasManageGlobalKnowledgeBase: boolean;
    docLink: string;
}
export declare const IndexEntryEditor: React.FC<Props>;
export {};
