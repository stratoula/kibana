import React from 'react';
import type { User } from '@kbn/elastic-assistant-common';
import { ConversationSharedState } from '@kbn/elastic-assistant-common';
import type { Conversation } from '../../..';
interface Props {
    onUsersUpdate: (users: User[]) => void;
    onSharedSelectionChange: (value: ConversationSharedState) => void;
    selectedConversation: Conversation | undefined;
}
export declare const ShareSelect: React.NamedExoticComponent<Props>;
export {};
