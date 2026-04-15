export declare enum ApmSynthtracePipelineSchema {
    Default = "default",// classic APM
    Otel = "otel",// OTel native through APM server
    ApmToOtel = "apmToOtel"
}
export type ApmSynthtracePipelines = ApmSynthtracePipelineSchema.Default | ApmSynthtracePipelineSchema.Otel | ApmSynthtracePipelineSchema.ApmToOtel;
