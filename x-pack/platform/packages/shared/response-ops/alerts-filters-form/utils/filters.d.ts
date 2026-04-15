import type { AlertsFilter, AlertsFiltersExpression, AlertsFiltersExpressionItem, AlertsFiltersExpressionOperator } from '../types';
export declare const isFilter: (item?: AlertsFiltersExpressionItem) => item is {
    filter: AlertsFilter;
};
export declare const isOperator: (item?: AlertsFiltersExpressionItem) => item is {
    operator: AlertsFiltersExpressionOperator;
};
export declare const isEmptyExpression: (expression: AlertsFiltersExpression) => boolean;
export declare const alertsFiltersToEsQuery: (expression: AlertsFiltersExpression) => import("@kbn/utility-types").JsonObject;
