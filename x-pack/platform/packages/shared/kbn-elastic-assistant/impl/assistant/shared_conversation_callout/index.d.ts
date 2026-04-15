import React from 'react';
import type { DataStreamApis } from '../use_data_stream_apis';
import type { Conversation } from '../../..';
interface Props {
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
    selectedConversation?: Conversation;
    setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | undefined>>;
}
export declare const SharedConversationCallout: React.NamedExoticComponent<Props>;
export {};
