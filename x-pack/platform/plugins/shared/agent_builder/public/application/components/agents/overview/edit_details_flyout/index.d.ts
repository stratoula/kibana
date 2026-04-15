import React from 'react';
import { type AgentDefinition } from '@kbn/agent-builder-common';
interface EditDetailsFlyoutProps {
    agent: AgentDefinition;
    onClose: () => void;
    isExperimentalFeaturesEnabled: boolean;
    canChangeVisibility: boolean;
    showWorkflowSection: boolean;
}
export declare const EditDetailsFlyout: React.FC<EditDetailsFlyoutProps>;
export {};
