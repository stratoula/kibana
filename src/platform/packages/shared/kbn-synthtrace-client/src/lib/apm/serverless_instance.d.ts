import { Entity } from '../entity';
import type { ApmFields } from './apm_fields';
import type { FaasTriggerType } from './serverless';
import { Serverless } from './serverless';
export declare class ServerlessInstance extends Entity<ApmFields> {
    invocation(params?: {
        transactionName?: string;
        faasTriggerType?: FaasTriggerType;
    }): Serverless;
}
