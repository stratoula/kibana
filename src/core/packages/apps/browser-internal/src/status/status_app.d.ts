import React, { Component } from 'react';
import type { InternalHttpSetup } from '@kbn/core-http-browser-internal';
import type { NotificationsSetup } from '@kbn/core-notifications-browser';
import { type ProcessedServerResponse } from './lib';
interface StatusAppProps {
    http: InternalHttpSetup;
    notifications: NotificationsSetup;
}
interface StatusAppState {
    loading: boolean;
    fetchError: boolean;
    data: ProcessedServerResponse | null;
}
export declare class StatusApp extends Component<StatusAppProps, StatusAppState> {
    constructor(props: StatusAppProps);
    componentDidMount(): Promise<void>;
    render(): React.JSX.Element;
}
export {};
