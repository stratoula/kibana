import type { RequestHandlerContext } from '@kbn/core/server';
import type { DashboardReadResponseBody } from './types';
import type { getDashboardStateSchema } from '../dashboard_state_schemas';
export declare function read(requestCtx: RequestHandlerContext, dashboardStateSchema: ReturnType<typeof getDashboardStateSchema>, id: string, isDashboardAppRequest?: boolean): Promise<{
    body: DashboardReadResponseBody;
    resolveHeaders: Record<string, string>;
}>;
