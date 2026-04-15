import React from 'react';
import type { QueryOperator } from '@kbn/esql-composer';
export declare const DiscoverEsqlLink: ({ indexPattern, whereClause, tabLabel, dataTestSubj, children, }: {
    indexPattern?: string;
    whereClause?: QueryOperator;
    tabLabel: string;
    dataTestSubj: string;
    children: React.ReactNode;
}) => React.JSX.Element;
