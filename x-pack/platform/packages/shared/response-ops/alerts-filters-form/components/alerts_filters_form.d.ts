import React from 'react';
import type { HttpStart } from '@kbn/core-http-browser';
import type { NotificationsStart } from '@kbn/core-notifications-browser';
import type { AlertsFiltersExpression, AlertsFiltersExpressionErrors } from '../types';
export interface AlertsFiltersFormProps {
    /**
     * Restricts the queries used by filters to these rule types
     */
    ruleTypeIds: string[];
    /**
     * The current filters expression
     */
    value?: AlertsFiltersExpression;
    /**
     * Validation errors
     */
    errors?: AlertsFiltersExpressionErrors;
    /**
     * Callback for changes is the filters expression
     */
    onChange: (newValue: AlertsFiltersExpression) => void;
    /**
     * Disables all the filters
     */
    isDisabled?: boolean;
    /**
     * Restricts the total number of filters, preventing the user from creating more
     */
    maxFilters?: number;
    /**
     * Service dependencies
     */
    services: {
        http: HttpStart;
        notifications: NotificationsStart;
    };
}
/**
 * A form to build boolean expressions of filters for alerts searches
 */
export declare const AlertsFiltersForm: ({ ruleTypeIds, value, errors, onChange, isDisabled, maxFilters, services, }: AlertsFiltersFormProps) => React.JSX.Element;
