import React from 'react';
import type { Conversation } from '../../..';
interface Props {
    currentConversation: Conversation | undefined;
    handleOnConversationSelected: ({ cId }: {
        cId: string;
    }) => Promise<void>;
}
export declare const WelcomeSetup: React.FC<Props>;
export {};
