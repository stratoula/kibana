import React from 'react';
import type { IconType } from '@elastic/eui';
interface BaseAction {
    icon: IconType;
    ariaLabel: string;
    dataTestSubj?: string;
    label?: string;
    id?: string;
}
export type Action = (BaseAction & {
    onClick: () => void;
    href?: string;
}) | (BaseAction & {
    href: string;
    onClick?: () => void;
});
export interface SectionActionsProps {
    actions: Action[];
}
export declare const SectionActions: ({ actions }: SectionActionsProps) => React.JSX.Element | null;
export {};
