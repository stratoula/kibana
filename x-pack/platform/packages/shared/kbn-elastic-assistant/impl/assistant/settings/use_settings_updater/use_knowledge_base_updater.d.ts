import type React from 'react';
import type { AssistantTelemetry } from '../../../..';
import type { KnowledgeBaseConfig } from '../../types';
interface Params {
    assistantTelemetry?: AssistantTelemetry;
    setKnowledgeBase: React.Dispatch<React.SetStateAction<KnowledgeBaseConfig | undefined>>;
    knowledgeBase: KnowledgeBaseConfig;
}
interface KnowledgeBaseUpdater {
    knowledgeBaseSettings: KnowledgeBaseConfig;
    resetKnowledgeBaseSettings: () => void;
    saveKnowledgeBaseSettings: () => boolean;
    setUpdatedKnowledgeBaseSettings: React.Dispatch<React.SetStateAction<KnowledgeBaseConfig>>;
}
export declare const useKnowledgeBaseUpdater: ({ assistantTelemetry, knowledgeBase, setKnowledgeBase, }: Params) => KnowledgeBaseUpdater;
export {};
