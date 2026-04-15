import type { LensEmbeddableInput } from '@kbn/lens-common';
import type { LensAttributes, LensConfig, LensConfigOptions, DataViewsCommon } from './types';
import type { LensApiState } from './schema';
/**
 * A minimal type to extend for type lookup
 */
type ChartTypeLike = Pick<LensAttributes, 'visualizationType'> | Pick<LensConfig, 'chartType'> | Pick<LensApiState, 'type'> | {
    visualizationType: null | undefined;
} | undefined;
export declare class LensConfigBuilder {
    private charts;
    private apiConvertersByChart;
    private dataViewsAPI;
    private enableAPITransforms;
    constructor(dataViewsAPI?: DataViewsCommon, enableAPITransforms?: boolean);
    get isEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    isSupported(chartType?: string | null): boolean;
    getType<C extends ChartTypeLike>(config: C): string | undefined | null;
    /**
     * Build a Lens configuration based on the provided API configuration
     * @param config ConfigBuilder API configuration
     * @param options
     * @returns Lens internal configuration
     */
    build(config: LensConfig, options?: LensConfigOptions): Promise<LensAttributes | LensEmbeddableInput>;
    fromAPIFormat(config: LensApiState): LensAttributes;
    toAPIFormat(config: LensAttributes): LensApiState;
}
export {};
