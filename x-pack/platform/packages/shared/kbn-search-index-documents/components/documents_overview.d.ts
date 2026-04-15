import React from 'react';
interface DocumentsProps {
    accessControlSwitch?: React.ReactNode;
    dataTelemetryIdPrefix: string;
    documentComponent: React.ReactNode;
    searchQueryCallback: (searchQuery: string) => void;
}
export declare const DocumentsOverview: React.FC<DocumentsProps>;
export {};
