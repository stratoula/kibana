import React from 'react';
import type { HttpSetup } from '@kbn/core-http-browser';
import type { PromptResponse, User } from '@kbn/elastic-assistant-common';
import { type Conversation } from '../../../..';
import type { ConversationsBulkActions } from '../../api';
export interface ConversationSettingsEditorProps {
    allSystemPrompts: PromptResponse[];
    conversationSettings: Record<string, Conversation>;
    currentUser?: User;
    conversationsSettingsBulkActions: ConversationsBulkActions;
    http: HttpSetup;
    isDisabled?: boolean;
    selectedConversation: Conversation;
    setConversationSettings: React.Dispatch<React.SetStateAction<Record<string, Conversation>>>;
    setConversationsSettingsBulkActions: React.Dispatch<React.SetStateAction<ConversationsBulkActions>>;
}
/**
 * Settings for adding/removing conversation and configuring default system prompt and connector.
 */
export declare const ConversationSettingsEditor: React.FC<ConversationSettingsEditorProps>;
