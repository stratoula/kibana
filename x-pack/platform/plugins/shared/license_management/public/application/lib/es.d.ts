import type { HttpSetup } from '@kbn/core/public';
export declare function putLicense(http: HttpSetup, license: string, acknowledge: boolean): Promise<unknown>;
export declare function startBasic(http: HttpSetup, acknowledge: boolean): Promise<unknown>;
export declare function startTrial(http: HttpSetup): Promise<unknown>;
export declare function canStartTrial(http: HttpSetup): Promise<unknown>;
export declare function getPermissions(http: HttpSetup): Promise<unknown>;
