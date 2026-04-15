import React from 'react';
import type { KnowledgeBaseConfig } from '../../types';
interface Props {
    knowledgeBase: KnowledgeBaseConfig;
    setUpdatedKnowledgeBaseSettings: React.Dispatch<React.SetStateAction<KnowledgeBaseConfig>>;
    hasBorder?: boolean;
}
/**
 * Replaces the AlertsSettings component used in the existing settings modal. Once the modal is
 * fully removed we can delete that component in favor of this one.
 */
export declare const AlertsSettingsManagement: React.FC<Props>;
export {};
