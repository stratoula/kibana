import type { RequestHandlerContext } from '@kbn/core/server';
import type { DashboardUpdateRequestBody, DashboardUpdateResponseBody } from './types';
import type { getDashboardStateSchema } from '../dashboard_state_schemas';
export declare function update(requestCtx: RequestHandlerContext, dashboardStateSchema: ReturnType<typeof getDashboardStateSchema>, id: string, updateBody: DashboardUpdateRequestBody, isDashboardAppRequest?: boolean): Promise<DashboardUpdateResponseBody>;
