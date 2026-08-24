/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { z } from '@kbn/zod/v4';
import { MAX_VEGA_SPEC_LENGTH } from '@kbn/agent-builder-visualizations-common';
import { CUSTOM_CONTENT_MAX_TEMPLATE_SCHEMA_LENGTH } from '@kbn/custom-content-common';

export { MAX_VEGA_SPEC_LENGTH };

/**
 * Agent-written attachment updates commonly misplace `esql` inside the
 * renderer-specific `visualization` payload instead of the canonical top-level
 * field. Hoist it (and default a fully missing `esql` to an empty string) so a
 * hand-written edit doesn't hard-fail the whole round.
 */
const hoistMisplacedEsql = (value: unknown): unknown => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return value;
  }
  const data = value as { esql?: unknown; visualization?: unknown };
  if (typeof data.esql === 'string') {
    return value;
  }
  if (
    typeof data.visualization === 'object' &&
    data.visualization !== null &&
    typeof (data.visualization as { esql?: unknown }).esql === 'string'
  ) {
    const { esql, ...visualization } = data.visualization as { esql: string };
    return { ...data, esql, visualization };
  }
  return { ...data, esql: '' };
};

/**
 * Runtime validation for visualization attachment data. The matching type
 * contract (`VisualizationAttachmentData`) lives in
 * `@kbn/agent-builder-visualizations-common` because it is shared across the
 * browser and server; this schema is server-only (attachment validation).
 */
const visualizationAttachmentDataObjectSchema = z
  .object({
    // Optional for backwards compatibility: attachments created before the Vega
    // renderer existed have no `renderer` field and are implicitly Lens.
    renderer: z.enum(['lens', 'vega', 'custom_content']).optional(),
    query: z.string().max(2048),
    visualization: z.record(z.string().max(1024), z.unknown()),
    chart_type: z.string().max(256).optional(),
    esql: z.string().max(4096),
    time_range: z
      .object({
        from: z.string().max(256),
        to: z.string().max(256),
      })
      .optional(),
  })
  .check((ctx) => {
    if (ctx.value.renderer === 'vega') {
      const spec = (ctx.value.visualization as { spec?: unknown }).spec;
      if (typeof spec !== 'string' || spec.length === 0) {
        ctx.issues.push({
          code: 'custom',
          message: 'Vega visualizations must provide visualization.spec',
          input: ctx.value,
        });
      } else if (spec.length > MAX_VEGA_SPEC_LENGTH) {
        ctx.issues.push({
          code: 'custom',
          message: `Vega visualization.spec must be at most ${MAX_VEGA_SPEC_LENGTH} characters`,
          input: ctx.value,
        });
      }
    }

    if (ctx.value.renderer === 'custom_content') {
      const template = (ctx.value.visualization as { template?: unknown }).template;
      // An empty string is allowed: dashboard panels push an empty draft
      // attachment before the agent generates the template.
      if (typeof template !== 'string') {
        ctx.issues.push({
          code: 'custom',
          message: 'Custom content visualizations must provide visualization.template',
          input: ctx.value,
        });
      } else if (template.length > CUSTOM_CONTENT_MAX_TEMPLATE_SCHEMA_LENGTH) {
        ctx.issues.push({
          code: 'custom',
          message: `Custom content visualization.template must be at most ${CUSTOM_CONTENT_MAX_TEMPLATE_SCHEMA_LENGTH} characters`,
          input: ctx.value,
        });
      }
    }
  });

export const visualizationAttachmentDataSchema = z.preprocess(
  hoistMisplacedEsql,
  visualizationAttachmentDataObjectSchema
);
