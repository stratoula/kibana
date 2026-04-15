export const permissionsLoading: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export const permissionsSuccess: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export const permissionsError: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export function loadPermissions(): (dispatch: any, getState: any, { http }: {
    http: any;
}) => Promise<void>;
