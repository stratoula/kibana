import React from 'react';
import type { DataStreamApis } from '../use_data_stream_apis';
import type { Conversation } from '../../..';
/**
 * Renders a header title, a tooltip button, and a popover with
 * information about the assistant feature and access to documentation.
 */
export declare const AssistantTitle: React.FC<{
    isDisabled?: boolean;
    title?: string;
    selectedConversation: Conversation | undefined;
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
}>;
