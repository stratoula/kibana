import type { Fields } from '../../entity';
import { Entity } from '../../entity';
import { Serializable } from '../../serializable';
export interface AWSRdsDocument extends Fields {
    'aws.rds.db_instance.arn': string;
    'aws.rds.db_instance.identifier': string;
    'metricset.name'?: string;
    'event.dataset'?: string;
}
export interface AWSRdsMetricsDocument extends AWSRdsDocument {
    'aws.rds.cpu.total.pct'?: number;
    'aws.rds.database_connections'?: number;
    'aws.rds.latency.dml'?: number;
    'aws.rds.latency.read'?: number;
    'aws.rds.latency.write'?: number;
    'aws.rds.latency.insert'?: number;
    'aws.rds.latency.update'?: number;
    'aws.rds.latency.commit'?: number;
    'aws.rds.queries'?: number;
}
declare class AWSRdsMetrics extends Serializable<AWSRdsMetricsDocument> {
}
export declare class AWSRds extends Entity<AWSRdsDocument> {
    metrics(metricsFields: AWSRdsMetricsDocument): AWSRdsMetrics;
}
export declare function awsRds(arn: string, name: string): AWSRds;
export {};
