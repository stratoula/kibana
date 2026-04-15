import React from 'react';
import type { ProfileFormProps } from './profile_form_props';
interface ProfileFormProviderProps extends ProfileFormProps {
    children: React.ReactNode;
}
export declare const ProfileFormProvider: ({ children, ...props }: ProfileFormProviderProps) => React.JSX.Element;
export {};
