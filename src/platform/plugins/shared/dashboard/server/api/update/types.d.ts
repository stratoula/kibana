import type { TypeOf } from '@kbn/config-schema';
import type { getUpdateRequestBodySchema, getUpdateResponseBodySchema } from './schemas';
export type DashboardUpdateRequestBody = TypeOf<ReturnType<typeof getUpdateRequestBodySchema>>;
/** The response body type for updating a dashboard. */
export type DashboardUpdateResponseBody = TypeOf<ReturnType<typeof getUpdateResponseBodySchema>>;
