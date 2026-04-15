import { Entity } from '../entity';
import type { ApmFields } from './apm_fields';
import { ServerlessInstance } from './serverless_instance';
export declare class ServerlessFunction extends Entity<ApmFields> {
    instance({ instanceName, ...apmFields }: {
        instanceName: string;
    } & ApmFields): ServerlessInstance;
}
export declare function serverlessFunction({ functionName, serviceName, environment, agentName, architecture, serverlessType, }: {
    functionName: string;
    environment: string;
    agentName: string;
    serviceName?: string;
    architecture?: string;
    serverlessType?: 'aws.lambda' | 'azure.functions';
}): ServerlessFunction;
