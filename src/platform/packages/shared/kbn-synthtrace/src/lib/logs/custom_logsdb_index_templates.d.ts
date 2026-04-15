import type { IndicesPutIndexTemplateRequest } from '@elastic/elasticsearch/lib/api/types';
export declare enum IndexTemplateName {
    LogsDb = "logsdb",
    Synht2 = "synth.2",
    SomeFailureStore = "synth.fs",
    NoFailureStore = "synth.no-fs"
}
export declare const indexTemplates: {
    [key in IndexTemplateName]: IndicesPutIndexTemplateRequest;
};
