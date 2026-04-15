import React from 'react';
import type { MetaDataProps } from './result_types';
interface Props {
    metaData: MetaDataProps;
    title: string;
    rightSideActions?: React.ReactNode;
    showScore?: boolean;
    onTitleClick?: () => void;
}
export declare const RichResultHeader: React.FC<Props>;
export {};
