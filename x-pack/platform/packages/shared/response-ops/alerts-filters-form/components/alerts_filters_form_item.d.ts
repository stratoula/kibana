import React from 'react';
import type { AlertsFiltersType } from '../types';
export interface AlertsFiltersFormItemProps<T> {
    type?: AlertsFiltersType;
    onTypeChange: (newFilterType: AlertsFiltersType) => void;
    value?: T;
    onValueChange: (newFilterValue: T) => void;
    isDisabled?: boolean;
    errors?: {
        type?: string;
        value?: string;
    };
}
export declare const AlertsFiltersFormItem: <T>({ type, onTypeChange, value, onValueChange, isDisabled, errors, }: AlertsFiltersFormItemProps<T>) => React.JSX.Element;
