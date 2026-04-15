import type { ApmFields, ApmUserAgentFields } from './apm_fields';
import { Entity } from '../entity';
import { RumSpan } from './rum_span';
import { RumTransaction } from './rum_transaction';
export declare class Browser extends Entity<ApmFields> {
    transaction({ transactionName, transactionType, }: {
        transactionName: string;
        transactionType?: string;
    }): RumTransaction;
    span({ spanName, spanType, spanSubtype, }: {
        spanName: string;
        spanType: string;
        spanSubtype: string;
    }): RumSpan;
}
export declare function browser({ serviceName, environment, userAgent, }: {
    serviceName: string;
    environment: string;
    userAgent: ApmUserAgentFields;
}): Browser;
