import type { AttachmentUIV2 } from '../../containers/types';
import type { SupportedUserActionTypes } from './types';
export declare const isUserActionTypeSupported: (type: string) => type is SupportedUserActionTypes;
export declare const getManualAlertIdsWithNoRuleId: (comments: AttachmentUIV2[]) => string[];
