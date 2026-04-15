import type { TypeOf } from '@kbn/config-schema';
import type { getCreateRequestBodySchema, getCreateResponseBodySchema } from './schemas';
/** The request body type for creating a dashboard. */
export type DashboardCreateRequestBody = TypeOf<ReturnType<typeof getCreateRequestBodySchema>>;
/** The response body type for creating a dashboard. */
export type DashboardCreateResponseBody = TypeOf<ReturnType<typeof getCreateResponseBodySchema>>;
