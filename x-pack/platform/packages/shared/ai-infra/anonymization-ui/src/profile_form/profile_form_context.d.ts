import React from 'react';
import type { UseTargetIdFieldResult } from './hooks/use_target_id_field';
import type { ProfileFormProps } from './profile_form_props';
export interface ProfileFormContextValue extends ProfileFormProps {
    targetIdField: UseTargetIdFieldResult;
    includeHiddenAndSystemIndices: boolean;
    onIncludeHiddenAndSystemIndicesChange: (value: boolean) => void;
    submitAttemptCount: number;
}
export declare const ProfileFormContextProvider: ({ value, children, }: {
    value: ProfileFormContextValue;
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const useProfileFormContext: () => ProfileFormContextValue;
