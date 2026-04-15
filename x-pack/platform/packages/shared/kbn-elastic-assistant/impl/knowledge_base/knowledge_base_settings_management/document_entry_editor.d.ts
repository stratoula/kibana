import React from 'react';
import type { DocumentEntry } from '@kbn/elastic-assistant-common';
interface Props {
    entry?: DocumentEntry;
    originalEntry?: DocumentEntry;
    setEntry: React.Dispatch<React.SetStateAction<Partial<DocumentEntry>>>;
    hasManageGlobalKnowledgeBase: boolean;
}
export declare const DocumentEntryEditor: React.FC<Props>;
export {};
