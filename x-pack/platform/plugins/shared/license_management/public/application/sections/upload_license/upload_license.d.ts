export class UploadLicense extends React.PureComponent<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        isOptingInToTelemetry: boolean;
    };
    componentDidMount(): void;
    onOptInChange: (isOptingInToTelemetry: any) => void;
    send: (acknowledge: any) => void;
    cancel: () => void;
    acknowledgeModal(): React.JSX.Element | null;
    errorMessage(): any[] | null;
    handleFile: ([file]: [any]) => void;
    file: any;
    submit: (event: any) => void;
    render(): React.JSX.Element;
}
import React from 'react';
