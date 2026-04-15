import type { LogDocument } from '@kbn/synthtrace-client';
import type { Scenario } from '../../cli/scenario';
import type { ServiceGraph, ServiceNamesOf, ServiceDependenciesOf, ChannelVolume, FailureMap, FailuresOrFn, NoiseConfig } from '../../lib/service_graph_logs/types';
/** Return value of `ScenarioDefinition.build`; drives log generation for one scenario run. */
export interface ScenarioBuildResult<TServiceGraph extends ServiceGraph = ServiceGraph> {
    /** Override the service graph; defaults to the mock app's graph. */
    serviceGraph?: TServiceGraph;
    /** Override the entry service; defaults to the mock app's `entryService`. */
    entryService?: ServiceNamesOf<TServiceGraph>;
    failures?: FailuresOrFn<ServiceNamesOf<TServiceGraph>, ServiceDependenciesOf<TServiceGraph>>;
    volume?: ChannelVolume<ServiceNamesOf<TServiceGraph> | ServiceDependenciesOf<TServiceGraph>>;
    noise?: NoiseConfig;
    /** Red-herring messages for technologies absent from the service graph. Fires every tick — not time-scoped. */
    ghostMentions?: NoiseConfig['ghostMentions'];
}
export interface PhaseVolumeEntry {
    /** 0 = silence, 1 = normal, N = N× burst. */
    scale: number;
}
/** Volume spike per service or infra dep key, scoped to the phase window. */
export type PhaseVolumeConfig<TName extends string = string> = Partial<Record<TName, PhaseVolumeEntry>>;
/** Failures, volume, and noise for a single time-bounded phase — all scoped to `[start, end)`. */
export interface PhaseConfig<TServiceGraph extends ServiceGraph = ServiceGraph> {
    failures?: FailureMap<ServiceNamesOf<TServiceGraph>, ServiceDependenciesOf<TServiceGraph>>;
    volume?: PhaseVolumeConfig<ServiceNamesOf<TServiceGraph> | ServiceDependenciesOf<TServiceGraph>>;
    /** 0 = silence, 1 = normal, N = N× burst. */
    noise?: {
        scale: number;
    };
}
/** Context injected into `ScenarioDefinition.build`. */
export interface PhaseContext<TServiceGraph extends ServiceGraph = ServiceGraph> {
    /** Converts a duration string offset from the incident start to an absolute timestamp. `'0m'` = incident start. */
    at: (offset: string) => number;
    /** Builds a result fragment with all config scoped to `[start, end)`. */
    phase: (start: string, end: string, config: PhaseConfig<TServiceGraph>) => ScenarioBuildResult<TServiceGraph>;
    /** Merges multiple phase fragments into one result. */
    phases: (list: Array<ScenarioBuildResult<TServiceGraph>>) => ScenarioBuildResult<TServiceGraph>;
}
/** A failure scenario with a `build` factory. */
export interface ScenarioDefinition<TServiceGraph extends ServiceGraph = ServiceGraph> {
    /** When set, the scenario loops every N minutes in `--live` mode. Omit for open-ended scenarios. */
    cycleDurationMinutes?: number;
    build(ctx: PhaseContext<TServiceGraph>): ScenarioBuildResult<TServiceGraph>;
}
/** Bundles a service topology, entry service, and failure scenario registry for a mock application. */
export interface MockAppDefinition<TServiceGraph extends ServiceGraph = ServiceGraph> {
    serviceGraph: TServiceGraph;
    entryService: ServiceNamesOf<TServiceGraph>;
    scenarios: Record<string, ScenarioDefinition<TServiceGraph>>;
}
export declare function parseOpts(raw: Record<string, unknown> | undefined): {
    seed: number;
    baselineMinutes: number;
    mockApp: string;
    scenario: string | undefined;
    baseRate: number;
};
/** Converts a duration string to milliseconds (`'30s'`, `'5m'`, `'1h'`, `'2d'`). */
export declare const duration: (s: string) => number;
/** Returns `(offset) => absoluteTimestamp` anchored to the incident start (`'0m'`). */
export declare const incidentAt: (from: number, baselineWindowMs: number) => (offset: string) => number;
/** Builds a `PhaseContext` anchored to a given `at` function. */
export declare const makePhaseContext: <TServiceGraph extends ServiceGraph = ServiceGraph>(atFn: (offset: string) => number) => PhaseContext<TServiceGraph>;
/** Identity helper; exists solely for TypeScript inference on `MockAppDefinition`. */
export declare const defineMockApp: <TServiceGraph extends ServiceGraph>(def: MockAppDefinition<TServiceGraph>) => MockAppDefinition<TServiceGraph>;
/**
 * Builds a synthtrace `Scenario` from a map of `MockAppDefinition` objects.
 * Select an app at runtime with `--scenarioOpts mockApp=<id>` (default: `"default"`).
 *
 * @example
 * export default createSigEventsScenario({ default: CLAIMS_APP, ecommerce: ECOMMERCE_APP });
 */
export declare function createSigEventsScenario<TServiceGraph extends ServiceGraph>(mockApps: Record<string, MockAppDefinition<TServiceGraph>>): Scenario<LogDocument>;
