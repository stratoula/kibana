import React from 'react';
import type { CardsNavigationComponentProps, AppId, AppDefinition } from './types';
type AggregatedCardNavDefinitions = NonNullable<CardsNavigationComponentProps['extendedCardNavigationDefinitions']> | Record<AppId, AppDefinition>;
export declare const getAppIdsByCategory: (category: string, appDefinitions: AggregatedCardNavDefinitions) => ("ingest_pipelines" | "pipelines" | "index_management" | "transform" | "jobsListLink" | "objects" | "tags" | "filesManagement" | "dataViews" | "reporting" | "triggersActionsConnectors" | "triggersActions" | "maintenanceWindows" | "settings" | "roles" | "api_keys" | "data_quality" | "spaces" | "data_usage" | "content_connectors")[];
export declare const CardsNavigation: ({ sections, appBasePath, onCardClick, hideLinksTo, extendedCardNavigationDefinitions, }: CardsNavigationComponentProps) => React.JSX.Element;
export {};
