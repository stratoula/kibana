import React from 'react';
import { ConversationSharedState } from '@kbn/elastic-assistant-common';
import type { DataStreamApis } from '../use_data_stream_apis';
import type { Conversation } from '../../..';
interface Props {
    conversationSharedState: ConversationSharedState;
    selectedConversation: Conversation | undefined;
    isConversationOwner: boolean;
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
    refetchCurrentConversation: ({ isStreamRefetch }: {
        isStreamRefetch?: boolean;
    }) => void;
}
export declare const ShareSelectModal: React.NamedExoticComponent<Props>;
export {};
