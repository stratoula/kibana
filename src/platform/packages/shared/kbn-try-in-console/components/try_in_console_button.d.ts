import type { SyntheticEvent } from 'react';
import React from 'react';
import type { EuiButtonColor } from '@elastic/eui';
import type { ApplicationStart } from '@kbn/core-application-browser';
import type { SharePluginStart } from '@kbn/share-plugin/public';
import type { ConsolePluginStart } from '@kbn/console-plugin/public';
import type { EuiButtonPropsForButton } from '@elastic/eui/src/components/button/button';
export interface TryInConsoleButtonProps {
    request?: string;
    application?: ApplicationStart;
    consolePlugin?: ConsolePluginStart;
    sharePlugin?: SharePluginStart;
    content?: string | React.ReactElement;
    color?: EuiButtonColor;
    showIcon?: boolean;
    iconType?: string;
    type?: 'link' | 'button' | 'emptyButton' | 'contextMenuItem';
    telemetryId?: string;
    onClick?: (e: SyntheticEvent<Element>) => void;
    disabled?: boolean;
    'data-test-subj'?: string;
    buttonProps?: EuiButtonPropsForButton;
}
export declare const TryInConsoleButton: ({ request, application, consolePlugin, sharePlugin, content, color, showIcon, iconType, type, telemetryId, onClick: onClickProp, disabled, "data-test-subj": dataTestSubj, buttonProps, }: TryInConsoleButtonProps) => React.JSX.Element | null;
