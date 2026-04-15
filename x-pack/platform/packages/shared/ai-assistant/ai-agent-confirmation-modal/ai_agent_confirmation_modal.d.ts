import React from 'react';
import type { DocLinks } from '@kbn/doc-links';
export interface AIAgentConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    docLinks: DocLinks;
}
export declare const AIAgentConfirmationModal: React.FC<AIAgentConfirmationModalProps>;
