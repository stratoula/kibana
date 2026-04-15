import React from 'react';
interface ServiceNameLinkProps {
    serviceName: string;
    agentName?: string;
    formattedServiceName: React.ReactNode;
    'data-test-subj': string;
}
export declare function ServiceNameLink({ serviceName, agentName, formattedServiceName, 'data-test-subj': dataTestSubj, }: ServiceNameLinkProps): React.JSX.Element;
export {};
