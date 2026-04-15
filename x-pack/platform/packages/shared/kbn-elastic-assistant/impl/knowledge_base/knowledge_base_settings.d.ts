import React from 'react';
import type { KnowledgeBaseConfig } from '../assistant/types';
interface Props {
    knowledgeBase: KnowledgeBaseConfig;
    setUpdatedKnowledgeBaseSettings: React.Dispatch<React.SetStateAction<KnowledgeBaseConfig>>;
    modalMode?: boolean;
}
/**
 * Knowledge Base Settings -- set up the Knowledge Base and configure RAG on alerts
 */
export declare const KnowledgeBaseSettings: React.FC<Props>;
export {};
