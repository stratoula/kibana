import React from 'react';
import type { EuiContextMenuItemProps } from '@elastic/eui';
type ListGroupAction = EuiContextMenuItemProps & {
    key: string;
};
interface ConversationSidePanelContextMenuProps {
    actions: ListGroupAction[];
}
export declare const ConversationSidePanelContextMenu: ({ actions, }: ConversationSidePanelContextMenuProps) => React.JSX.Element;
export {};
