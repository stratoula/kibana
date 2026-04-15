import React from 'react';
interface Props {
    anonymized: number;
    titleSize?: 'xs' | 's' | 'xxxs' | 'xxs' | 'm' | 'l' | undefined;
    gap?: string;
    isDataAnonymizable: boolean;
    inline?: boolean;
}
export declare const AnonymizedStat: React.NamedExoticComponent<Props>;
export {};
