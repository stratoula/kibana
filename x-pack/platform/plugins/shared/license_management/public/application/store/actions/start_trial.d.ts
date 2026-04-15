export const trialStatusLoaded: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export function loadTrialStatus(): (dispatch: any, getState: any, { http }: {
    http: any;
}) => Promise<void>;
export function startLicenseTrial(): (dispatch: any, getState: any, { licensing, toasts, http }: {
    licensing: any;
    toasts: any;
    http: any;
}) => Promise<any>;
