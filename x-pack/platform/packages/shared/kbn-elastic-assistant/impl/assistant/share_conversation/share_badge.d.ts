import React from 'react';
import type { ConversationSharedState } from '@kbn/elastic-assistant-common';
interface ShareBadgeProps {
    conversationSharedState: ConversationSharedState;
    isConversationOwner: boolean;
    isDropdown?: boolean;
    label: string;
    onClick?: () => void;
}
export declare const ShareBadge: React.FC<ShareBadgeProps>;
export {};
