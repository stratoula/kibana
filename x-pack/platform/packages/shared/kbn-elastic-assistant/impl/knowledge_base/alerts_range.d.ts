import React from 'react';
import type { KnowledgeBaseConfig } from '../assistant/types';
export type SingleRangeChangeEvent = React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>;
interface Props {
    compressed?: boolean;
    maxAlerts?: number;
    minAlerts?: number;
    onChange?: (e: SingleRangeChangeEvent) => void;
    knowledgeBase?: KnowledgeBaseConfig;
    setUpdatedKnowledgeBaseSettings?: React.Dispatch<React.SetStateAction<KnowledgeBaseConfig>>;
    step?: number;
    value: string | number;
}
export declare const AlertsRange: React.FC<Props>;
export {};
