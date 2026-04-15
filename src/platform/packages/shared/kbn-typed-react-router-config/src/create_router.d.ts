import type { RouteMap, Router } from './types';
export declare function createRouter<TRoutes extends RouteMap>(routes: TRoutes): Router<TRoutes>;
