import type { PropsWithChildren } from 'react';
import React from 'react';
import type { AlertsFiltersFormContextValue } from '../types';
export declare const AlertsFiltersFormContext: React.Context<AlertsFiltersFormContextValue | undefined>;
export declare const AlertsFiltersFormContextProvider: ({ children, value, }: PropsWithChildren<{
    value: AlertsFiltersFormContextValue;
}>) => React.JSX.Element;
export declare const useAlertsFiltersFormContext: () => AlertsFiltersFormContextValue;
