import { type LensConfigBuilder } from '@kbn/lens-embeddable-utils';
import type { EmbeddableSetup, GetDrilldownsSchemaFnType } from '@kbn/embeddable-plugin/server';
export declare function registerLensEmbeddableTransforms(embeddableSetup: EmbeddableSetup, builder: LensConfigBuilder): void;
export declare const getLensByValuePanelSchema: (getDrilldownsSchema: GetDrilldownsSchemaFnType) => import("@kbn/config-schema").Type<import("@kbn/lens-embeddable-utils").LensApiSchemaType & Readonly<{
    title?: string | undefined;
    description?: string | undefined;
    references?: Readonly<{
        id: string;
        type: string;
        name: string;
    }>[] | undefined;
    drilldowns?: import("@kbn/embeddable-plugin/server").DrilldownState[] | undefined;
    hide_title?: boolean | undefined;
    hide_border?: boolean | undefined;
    time_range?: Readonly<{
        mode?: "absolute" | "relative" | undefined;
    } & {
        from: string;
        to: string;
    }> | undefined;
} & {}>>;
export declare const getLensPanelSchema: (getDrilldownsSchema: GetDrilldownsSchemaFnType) => import("@kbn/config-schema").Type<(import("@kbn/lens-embeddable-utils").LensApiSchemaType & Readonly<{
    title?: string | undefined;
    description?: string | undefined;
    references?: Readonly<{
        id: string;
        type: string;
        name: string;
    }>[] | undefined;
    drilldowns?: import("@kbn/embeddable-plugin/server").DrilldownState[] | undefined;
    hide_title?: boolean | undefined;
    hide_border?: boolean | undefined;
    time_range?: Readonly<{
        mode?: "absolute" | "relative" | undefined;
    } & {
        from: string;
        to: string;
    }> | undefined;
} & {}>) | Readonly<{
    title?: string | undefined;
    description?: string | undefined;
    references?: Readonly<{
        id: string;
        type: string;
        name: string;
    }>[] | undefined;
    drilldowns?: import("@kbn/embeddable-plugin/server").DrilldownState[] | undefined;
    hide_title?: boolean | undefined;
    hide_border?: boolean | undefined;
    time_range?: Readonly<{
        mode?: "absolute" | "relative" | undefined;
    } & {
        from: string;
        to: string;
    }> | undefined;
} & {
    ref_id: string;
}>>;
