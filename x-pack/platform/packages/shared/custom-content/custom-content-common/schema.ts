/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { z } from '@kbn/zod/v4';
import {
  CUSTOM_CONTENT_MAX_ESQL_QUERY_LENGTH,
  CUSTOM_CONTENT_MAX_TEMPLATE_SCHEMA_LENGTH,
} from './constants';

/**
 * Persisted content of a custom content panel. No `prompt`: on an edit the prompt is a delta
 * ("remove the background color"), not a description, so the template is the source of truth.
 */
export const customContentStateSchema = z.object({
  esqlQuery: z.string().max(CUSTOM_CONTENT_MAX_ESQL_QUERY_LENGTH).optional(),
  template: z.string().max(CUSTOM_CONTENT_MAX_TEMPLATE_SCHEMA_LENGTH).optional(),
});

export type CustomContentState = z.output<typeof customContentStateSchema>;
