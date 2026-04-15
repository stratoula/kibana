import React from 'react';
interface Props {
    allowed: number;
    titleSize?: 'xs' | 's' | 'xxxs' | 'xxs' | 'm' | 'l' | undefined;
    gap?: string;
    total: number;
    inline?: boolean;
}
export declare const AllowedStat: React.NamedExoticComponent<Props>;
export {};
