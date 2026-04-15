import React from 'react';
export interface FlyoutNavigationProps {
    isExpanded: boolean;
    isLoading: boolean;
    setIsExpanded?: (value: boolean) => void;
    children: React.ReactNode;
    onConversationCreate?: () => Promise<void>;
    isAssistantEnabled: boolean;
}
/**
 * Navigation menu on the right panel only, with expand/collapse button and option to
 * pass in a list of actions to be displayed on top.
 */
export declare const FlyoutNavigation: React.NamedExoticComponent<FlyoutNavigationProps>;
