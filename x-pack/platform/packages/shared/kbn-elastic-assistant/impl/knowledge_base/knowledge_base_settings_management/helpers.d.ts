import { DocumentEntryType, KnowledgeBaseEntryCreateProps, KnowledgeBaseEntryResponse } from '@kbn/elastic-assistant-common';
import type { z } from '@kbn/zod/v4';
export declare const isSystemEntry: (entry: KnowledgeBaseEntryResponse) => entry is KnowledgeBaseEntryResponse & {
    type: DocumentEntryType;
    kbResource: "esql" | "security_labs";
};
export declare const isGlobalEntry: (entry: KnowledgeBaseEntryResponse) => entry is KnowledgeBaseEntryResponse;
export declare const isKnowledgeBaseEntryCreateProps: (entry: unknown) => entry is z.infer<typeof KnowledgeBaseEntryCreateProps>;
export declare const isKnowledgeBaseEntryResponse: (entry: unknown) => entry is z.infer<typeof KnowledgeBaseEntryResponse>;
