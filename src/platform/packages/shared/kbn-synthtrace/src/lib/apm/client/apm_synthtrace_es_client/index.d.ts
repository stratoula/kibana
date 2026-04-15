import type { Client, estypes } from '@elastic/elasticsearch';
import type { ApmFields, ApmOtelFields, ApmSynthtracePipelines } from '@kbn/synthtrace-client';
import type { ValuesType } from 'utility-types';
import type { Readable } from 'stream';
import type { PipelineOptions } from '../../../../cli/utils/clients_manager';
import type { SynthtraceEsClient, SynthtraceEsClientOptions } from '../../../shared/base_client';
import { SynthtraceEsClientBase } from '../../../shared/base_client';
import type { Logger } from '../../../utils/create_logger';
import type { PackageManagement } from '../../../shared/types';
export declare enum ComponentTemplateName {
    LogsApp = "logs-apm.app@custom",
    LogsError = "logs-apm.error@custom",
    MetricsApp = "metrics-apm.app@custom",
    MetricsInternal = "metrics-apm.internal@custom",
    TracesApm = "traces-apm@custom",
    TracesApmRum = "traces-apm.rum@custom",
    TracesApmSampled = "traces-apm.sampled@custom"
}
interface ApmPipelineOptions extends PipelineOptions {
    versionOverride?: string;
}
export interface ApmSynthtraceEsClientOptions extends Omit<SynthtraceEsClientOptions, 'pipeline'> {
    version?: string;
}
export interface ApmSynthtraceEsClient extends SynthtraceEsClient<ApmFields | ApmOtelFields>, PackageManagement {
    updateComponentTemplate(name: ComponentTemplateName, modify: (template: ValuesType<estypes.ClusterGetComponentTemplateResponse['component_templates']>['component_template']['template']) => estypes.ClusterPutComponentTemplateRequest['template']): Promise<void>;
    resolvePipelineType(pipeline: ApmSynthtracePipelines, options?: ApmPipelineOptions): (base: Readable) => NodeJS.WritableStream;
}
export declare class ApmSynthtraceEsClientImpl extends SynthtraceEsClientBase<ApmFields | ApmOtelFields> implements ApmSynthtraceEsClient {
    private readonly options;
    private version;
    constructor(options: {
        client: Client;
        logger: Logger;
    } & ApmSynthtraceEsClientOptions & PipelineOptions);
    initializePackage(opts?: {
        version?: string;
        skipInstallation?: boolean;
    }): Promise<string>;
    uninstallPackage(): Promise<void>;
    updateComponentTemplate(name: ComponentTemplateName, modify: (template: ValuesType<estypes.ClusterGetComponentTemplateResponse['component_templates']>['component_template']['template']) => estypes.ClusterPutComponentTemplateRequest['template']): Promise<void>;
    resolvePipelineType(pipeline: ApmSynthtracePipelines, options?: ApmPipelineOptions): ((base: Readable) => NodeJS.WritableStream) | ((base: Readable) => import("stream").Duplex);
}
export {};
