import React from 'react';
import type { TargetType } from '../types';
interface UseTargetIdHelpTextParams {
    targetType: TargetType;
    targetId: string;
    targetIdSearchValue: string;
    targetIdOptionsCount: number;
}
export declare const useTargetIdHelpText: ({ targetType, targetId, targetIdSearchValue, targetIdOptionsCount, }: UseTargetIdHelpTextParams) => React.ReactNode;
export {};
