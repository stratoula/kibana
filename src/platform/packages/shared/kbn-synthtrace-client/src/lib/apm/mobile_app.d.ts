import { Entity } from '../entity';
import type { ApmFields } from './apm_fields';
import { MobileDevice } from './mobile_device';
type MobileAgentName = 'android/java' | 'iOS/swift';
export declare class MobileApp extends Entity<ApmFields> {
    mobileDevice({ deviceId, serviceVersion }: {
        deviceId?: string;
        serviceVersion?: string;
    }): MobileDevice;
}
export declare function mobileApp(name: string, environment: string, agentName: MobileAgentName): MobileApp;
export declare function mobileApp(options: {
    name: string;
    environment: string;
    agentName: MobileAgentName;
}): MobileApp;
export {};
