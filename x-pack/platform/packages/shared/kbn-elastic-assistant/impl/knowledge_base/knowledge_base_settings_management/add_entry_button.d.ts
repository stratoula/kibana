import React from 'react';
interface Props {
    isDocumentAvailable?: boolean;
    isIndexAvailable?: boolean;
    onDocumentClicked?: () => void;
    onIndexClicked?: () => void;
}
export declare const AddEntryButton: React.FC<Props>;
export {};
