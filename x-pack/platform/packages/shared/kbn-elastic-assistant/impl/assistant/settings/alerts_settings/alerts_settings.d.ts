import React from 'react';
import type { KnowledgeBaseConfig } from '../../types';
export declare const MIN_LATEST_ALERTS = 50;
export declare const MAX_LATEST_ALERTS = 500;
export declare const TICK_INTERVAL = 50;
export declare const RANGE_CONTAINER_WIDTH = 600;
interface Props {
    knowledgeBase: KnowledgeBaseConfig;
    setUpdatedKnowledgeBaseSettings: React.Dispatch<React.SetStateAction<KnowledgeBaseConfig>>;
}
export declare const AlertsSettings: React.MemoExoticComponent<({ knowledgeBase, setUpdatedKnowledgeBaseSettings }: Props) => React.JSX.Element>;
export {};
