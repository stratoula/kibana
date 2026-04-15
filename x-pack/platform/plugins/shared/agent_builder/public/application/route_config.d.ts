import React from 'react';
export type SidebarView = 'conversation' | 'manage';
export interface FeatureFlags {
    experimental: boolean;
}
export interface RouteDefinition {
    path: string;
    viewId: string;
    element: React.ReactNode;
    sidebarView: SidebarView;
    isExperimental?: boolean;
    navLabel?: string;
    navIcon?: string;
}
export declare const agentRoutes: RouteDefinition[];
export declare const manageRoutes: RouteDefinition[];
export declare const allRoutes: RouteDefinition[];
export declare const getSidebarViewForRoute: (pathname: string) => SidebarView;
export declare const getViewIdForPathname: (pathname: string, enabledRoutes: RouteDefinition[]) => string | undefined;
export declare const getAgentIdFromPath: (pathname: string) => string | undefined;
export declare const getConversationIdFromPath: (pathname: string) => string | undefined;
export interface SidebarNavItem {
    label: string;
    path: string;
    icon?: string;
}
export declare const getEnabledRoutes: (flags: FeatureFlags) => RouteDefinition[];
export declare const getAgentSettingsNavItems: (agentId: string, flags: FeatureFlags) => SidebarNavItem[];
export declare const getManageNavItems: (flags: FeatureFlags) => SidebarNavItem[];
