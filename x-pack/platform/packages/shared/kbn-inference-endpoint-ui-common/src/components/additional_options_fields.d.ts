import React from 'react';
import type { Config } from '../types/types';
import type { TaskTypeOption } from '../utils/helpers';
interface AdditionalOptionsFieldsProps {
    config: Config;
    onTaskTypeOptionsSelect: (taskType: string, provider?: string) => void;
    selectedTaskType?: string;
    taskTypeOptions: TaskTypeOption[];
    isEdit?: boolean;
    allowContextWindowLength?: boolean;
    allowTemperature?: boolean;
}
export declare const AdditionalOptionsFields: React.FC<AdditionalOptionsFieldsProps>;
export {};
