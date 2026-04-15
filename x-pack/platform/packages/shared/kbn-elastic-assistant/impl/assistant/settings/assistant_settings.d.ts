import React from 'react';
import type { AIConnector } from '../../connectorland/connector_selector';
import type { Conversation } from '../../..';
interface Props {
    defaultConnector?: AIConnector;
    onClose: (event?: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement> | MouseEvent | TouchEvent) => void;
    onSave: (success: boolean) => Promise<void>;
    selectedConversationId?: string;
    onConversationSelected: ({ cId }: {
        cId: string;
    }) => void;
    conversations: Record<string, Conversation>;
    conversationsLoaded: boolean;
    setPaginationObserver: (ref: HTMLDivElement) => void;
}
/**
 * Modal for overall Assistant Settings, including conversation settings, quick prompts, system prompts,
 * anonymization, knowledge base, and evaluation via the `isModelEvaluationEnabled` feature flag.
 */
export declare const AssistantSettings: React.FC<Props>;
export {};
