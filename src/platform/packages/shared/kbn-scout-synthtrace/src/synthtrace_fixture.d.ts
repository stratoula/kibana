import type { ApmFields, InfraDocument, LogDocument } from '@kbn/synthtrace-client';
import type { SynthtraceEsClient } from '@kbn/synthtrace/src/lib/shared/base_client';
export interface SynthtraceFixture {
    apmSynthtraceEsClient: Pick<SynthtraceEsClient<ApmFields>, 'index' | 'clean'>;
    infraSynthtraceEsClient: Pick<SynthtraceEsClient<InfraDocument>, 'index' | 'clean'>;
    logsSynthtraceEsClient: Pick<SynthtraceEsClient<LogDocument>, 'index' | 'clean'>;
}
export declare const synthtraceFixture: import("playwright/test").TestType<import("playwright/test").PlaywrightTestArgs & import("playwright/test").PlaywrightTestOptions, import("playwright/test").PlaywrightWorkerArgs & import("playwright/test").PlaywrightWorkerOptions & import("@kbn/scout/src/playwright/fixtures/scope/worker").CoreWorkerFixtures & SynthtraceFixture>;
