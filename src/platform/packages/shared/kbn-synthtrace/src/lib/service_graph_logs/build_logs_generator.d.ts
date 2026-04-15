import type { LogsGeneratorConfig, LogsManifest, ServiceGraph } from './types';
import { spreadDocs } from './utils/tick';
export type { FailuresOrFn, ChannelSpike, ChannelEntry, ChannelVolume, NoiseVolumeConfig, NoiseConfig, LogsGeneratorConfig, } from './types';
/** Builds a deterministic log tick generator and a ground-truth manifest. */
export declare function buildLogsGenerator<TServiceGraph extends ServiceGraph = ServiceGraph>(config: LogsGeneratorConfig<TServiceGraph>): {
    generator: (timestamp: number, index: number) => ReturnType<typeof spreadDocs>;
    manifest: LogsManifest;
};
