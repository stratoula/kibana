import type { AlertsFilterMetadata, AlertsFiltersType } from './types';
export declare const alertsFiltersMetadata: Record<AlertsFiltersType, AlertsFilterMetadata<any>>;
export declare const getFilterMetadata: <T>(type: AlertsFilterMetadata<T>["id"]) => AlertsFilterMetadata<T>;
