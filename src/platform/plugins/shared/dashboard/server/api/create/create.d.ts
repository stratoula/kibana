import type { RequestHandlerContext } from '@kbn/core/server';
import type { DashboardCreateRequestBody } from './types';
import type { DashboardCreateResponseBody } from './types';
import type { getDashboardStateSchema } from '../dashboard_state_schemas';
export declare function create(requestCtx: RequestHandlerContext, dashboardStateSchema: ReturnType<typeof getDashboardStateSchema>, createBody: DashboardCreateRequestBody, isDashboardAppRequest?: boolean): Promise<DashboardCreateResponseBody>;
