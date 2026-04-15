import React from 'react';
import type { DataStreamApis } from '../use_data_stream_apis';
import type { Conversation } from '../../..';
interface Props {
    refetchCurrentConversation: ({ isStreamRefetch }: {
        isStreamRefetch?: boolean;
    }) => void;
    refetchCurrentUserConversations: DataStreamApis['refetchCurrentUserConversations'];
    selectedConversation: Conversation | undefined;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const ShareModal: React.NamedExoticComponent<Props>;
export {};
