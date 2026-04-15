import type { EmbeddableFactory } from '@kbn/embeddable-plugin/public';
import type { LensApi, LensSerializedAPIConfig } from '@kbn/lens-common-2';
import type { LensEmbeddableStartServices } from './types';
export declare const createLensEmbeddableFactory: (services: LensEmbeddableStartServices) => EmbeddableFactory<LensSerializedAPIConfig, LensApi>;
