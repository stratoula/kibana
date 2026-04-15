import type { IRouter, KibanaRequest, Logger } from '@kbn/core/server';
import type { InferenceConnector } from '@kbn/inference-common';
import type { ResolvedInferenceEndpoints } from '../types';
export declare const defineInferenceConnectorsRoute: ({ logger, router, getForFeature, getConnectorList, }: {
    logger: Logger;
    router: IRouter;
    getForFeature: (featureId: string, request: KibanaRequest) => Promise<ResolvedInferenceEndpoints>;
    getConnectorList: (request: KibanaRequest) => Promise<InferenceConnector[]>;
}) => void;
