export const WARNING_THRESHOLD_IN_DAYS: 25;
export const licenseManagement: import("redux").Reducer<import("redux").CombinedState<{
    license: {};
    uploadStatus: {};
    uploadErrorMessage: string;
    trialStatus: {};
    startBasicStatus: {};
    permissions: {};
}>, import("redux-actions").Action<{}> | import("redux-actions").Action<string>>;
export function getPermission(state: any): any;
export function isPermissionsLoading(state: any): any;
export function getPermissionsError(state: any): any;
export function getLicense(state: any): any;
export function getLicenseType(state: any): any;
export function getExpirationMillis(state: any): any;
export function getExpirationDate(state: any): moment.Moment | null;
export function getExpirationDateFormatted(state: any): string | null;
export function isExpired(state: any): boolean;
export function isImminentExpiration(state: any): boolean | null;
export function shouldShowRevertToBasicLicense(state: any): boolean;
export function uploadNeedsAcknowledgement(state: any): boolean;
export function isApplying(state: any): boolean;
export function uploadMessages(state: any): any;
export function isInvalid(state: any): boolean;
export function getUploadErrorMessage(state: any): any;
export function shouldShowStartTrial(state: any): any;
export function shouldShowRequestTrialExtension(state: any): boolean;
export function startTrialError(state: any): any;
export function startBasicLicenseNeedsAcknowledgement(state: any): boolean;
export function getStartBasicMessages(state: any): any;
export const getLicenseState: ((state: any) => {
    type: string;
    isExpired: boolean;
    expirationDate: string | null;
    status: string;
}) & import("reselect").OutputSelectorFields<(args_0: any, args_1: string | null, args_2: boolean) => {
    type: string;
    isExpired: boolean;
    expirationDate: string | null;
    status: string;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
import moment from 'moment-timezone';
