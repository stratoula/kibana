/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Read alerts migration status API endpoint
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';
import { isValidDateMath } from '@kbn/zod-helpers';

import { NonEmptyString } from '../../../model/primitives.gen';

export type AlertVersion = z.infer<typeof AlertVersion>;
export const AlertVersion = z.object({
  version: z.number().int(),
  count: z.number().int(),
});

export type MigrationStatus = z.infer<typeof MigrationStatus>;
export const MigrationStatus = z.object({
  id: NonEmptyString,
  status: z.enum(['success', 'failure', 'pending']),
  version: z.number().int(),
  updated: z.string().datetime(),
});

export type IndexMigrationStatus = z.infer<typeof IndexMigrationStatus>;
export const IndexMigrationStatus = z.object({
  index: NonEmptyString,
  version: z.number().int(),
  signal_versions: z.array(AlertVersion),
  migrations: z.array(MigrationStatus),
  is_outdated: z.boolean(),
});

export type ReadAlertsMigrationStatusRequestQuery = z.infer<
  typeof ReadAlertsMigrationStatusRequestQuery
>;
export const ReadAlertsMigrationStatusRequestQuery = z.object({
  /**
   * Maximum age of qualifying detection alerts
   */
  from: z.string().superRefine(isValidDateMath),
});
export type ReadAlertsMigrationStatusRequestQueryInput = z.input<
  typeof ReadAlertsMigrationStatusRequestQuery
>;

export type ReadAlertsMigrationStatusResponse = z.infer<typeof ReadAlertsMigrationStatusResponse>;
export const ReadAlertsMigrationStatusResponse = z.object({
  indices: z.array(IndexMigrationStatus),
});
