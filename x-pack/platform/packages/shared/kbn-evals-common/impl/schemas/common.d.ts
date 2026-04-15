import type { TypeOf, ZodType } from '@kbn/zod/v4';
import type { RouteValidationFunction } from '@kbn/core/server';
export declare const buildRouteValidationWithZod: <T extends ZodType>(schema: T) => RouteValidationFunction<TypeOf<T>>;
