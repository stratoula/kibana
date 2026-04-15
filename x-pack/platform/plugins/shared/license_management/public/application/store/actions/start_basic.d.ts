export const startBasicLicenseStatus: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export const cancelStartBasicLicense: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export function startBasicLicense(currentLicenseType: any, ack: any): (dispatch: any, getState: any, { licensing, toasts, http }: {
    licensing: any;
    toasts: any;
    http: any;
}) => Promise<any>;
