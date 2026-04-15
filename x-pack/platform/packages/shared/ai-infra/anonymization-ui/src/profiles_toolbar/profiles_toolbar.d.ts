import React from 'react';
import { type TargetType } from '../common/target_types';
interface ProfilesToolbarProps {
    modeLabel: string;
    isManageMode: boolean;
    activeSpaceId: string;
    targetType: '' | TargetType;
    targetIdFilter: string;
    onTargetTypeChange: (value: '' | TargetType) => void;
    onTargetIdFilterChange: (value: string) => void;
    onCreateProfile: () => void;
}
export declare const ProfilesToolbar: ({ modeLabel, isManageMode, activeSpaceId, targetType, targetIdFilter, onTargetTypeChange, onTargetIdFilterChange, onCreateProfile, }: ProfilesToolbarProps) => React.JSX.Element;
export {};
