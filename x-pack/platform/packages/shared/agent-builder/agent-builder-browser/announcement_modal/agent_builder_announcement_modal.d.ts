import React from 'react';
export interface AgentBuilderAnnouncementModalProps {
    onRevert: () => void;
    onContinue: () => void;
    /**
     * When false, the revert action is hidden and the body shows a short FYI plus a link to
     * documentation (no bullets or history callout), since the user cannot change Gen AI settings.
     */
    canRevertToAssistant?: boolean;
}
export declare const AgentBuilderAnnouncementModal: React.FC<AgentBuilderAnnouncementModalProps>;
