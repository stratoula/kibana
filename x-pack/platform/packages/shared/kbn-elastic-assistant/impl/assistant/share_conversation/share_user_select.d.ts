import React from 'react';
import type { User } from '@kbn/elastic-assistant-common';
import type { Conversation } from '../../..';
interface Props {
    selectedConversation: Conversation | undefined;
    onUsersUpdate: (users: User[]) => void;
}
export declare const ShareUserSelect: React.NamedExoticComponent<Props>;
export {};
