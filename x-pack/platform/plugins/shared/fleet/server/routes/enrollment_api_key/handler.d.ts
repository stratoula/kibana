import { type RequestHandler } from '@kbn/core/server';
import type { TypeOf } from '@kbn/config-schema';
import type { GetEnrollmentAPIKeysRequestSchema, PostEnrollmentAPIKeyRequestSchema, DeleteEnrollmentAPIKeyRequestSchema, GetOneEnrollmentAPIKeyRequestSchema } from '../../types';
export declare const getEnrollmentApiKeysHandler: RequestHandler<undefined, TypeOf<typeof GetEnrollmentAPIKeysRequestSchema.query>>;
export declare const postEnrollmentApiKeyHandler: RequestHandler<undefined, undefined, TypeOf<typeof PostEnrollmentAPIKeyRequestSchema.body>>;
export declare const deleteEnrollmentApiKeyHandler: RequestHandler<TypeOf<typeof DeleteEnrollmentAPIKeyRequestSchema.params>>;
export declare const getOneEnrollmentApiKeyHandler: RequestHandler<TypeOf<typeof GetOneEnrollmentAPIKeyRequestSchema.params>>;
