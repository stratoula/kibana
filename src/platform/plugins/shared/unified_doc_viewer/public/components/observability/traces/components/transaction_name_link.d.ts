import React from 'react';
interface TransactionNameLinkProps {
    serviceName?: string;
    transactionName: string;
    renderContent?: (name: string) => React.ReactNode;
}
export declare function TransactionNameLink({ transactionName, serviceName, renderContent, }: TransactionNameLinkProps): React.JSX.Element;
export {};
