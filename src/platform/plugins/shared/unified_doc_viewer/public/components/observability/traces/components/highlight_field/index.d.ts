import type { EuiTextProps } from '@elastic/eui';
import React from 'react';
import type { FieldConfigValue } from '../../../../content_framework';
interface Props {
    value?: FieldConfigValue;
    formattedValue?: string;
    children?: (props: {
        content: React.ReactNode;
    }) => React.ReactNode | React.ReactNode;
    textSize?: EuiTextProps['size'];
    as?: keyof JSX.IntrinsicElements;
}
export declare function HighlightField({ value, formattedValue, children, textSize, as }: Props): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
export {};
