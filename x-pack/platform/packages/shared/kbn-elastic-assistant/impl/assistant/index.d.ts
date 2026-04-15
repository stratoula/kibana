import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import type { LastConversation } from './use_space_aware_context';
export declare const CONVERSATION_SIDE_PANEL_WIDTH = 220;
export interface Props {
    chatHistoryVisible?: boolean;
    lastConversation?: LastConversation;
    onCloseFlyout?: () => void;
    promptContextId?: string;
    setChatHistoryVisible?: Dispatch<SetStateAction<boolean>>;
    shouldRefocusPrompt?: boolean;
}
export declare const Assistant: React.NamedExoticComponent<Props>;
