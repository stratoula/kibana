import React from 'react';
interface DependencyNameLinkProps {
    dependencyName: string;
    spanType?: string;
    spanSubtype?: string;
    environment?: string;
    formattedDependencyName?: React.ReactNode;
}
export declare function DependencyNameLink({ dependencyName, spanType, spanSubtype, environment, formattedDependencyName, }: DependencyNameLinkProps): React.JSX.Element;
export {};
