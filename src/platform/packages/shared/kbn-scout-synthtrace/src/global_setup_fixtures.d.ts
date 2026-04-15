/**
 * Same worker fixtures as `@kbn/scout` `globalSetupHook`, plus synthtrace clients.
 * Use this (or `mergeTests(globalSetupHook, synthtraceFixture)`) when parallel global setup
 * needs `apmSynthtraceEsClient` / `logsSynthtraceEsClient` / etc.
 */
export declare const globalSetupHookWithSynthtrace: import("playwright/test").TestType<import("playwright/test").PlaywrightTestArgs & import("playwright/test").PlaywrightTestOptions, import("playwright/test").PlaywrightWorkerArgs & import("playwright/test").PlaywrightWorkerOptions & import("@kbn/scout/src/playwright/fixtures/scope/worker").CoreWorkerFixtures & {
    esArchiver: import("@kbn/scout/src/playwright").EsArchiverFixture;
} & import("./synthtrace_fixture").SynthtraceFixture & {
    apiServices: import("@kbn/scout").ApiServicesFixture;
}>;
