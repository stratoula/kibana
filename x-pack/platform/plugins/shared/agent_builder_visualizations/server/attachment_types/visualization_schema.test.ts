/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { CUSTOM_CONTENT_MAX_TEMPLATE_SCHEMA_LENGTH } from '@kbn/custom-content-common';
import { MAX_VEGA_SPEC_LENGTH, visualizationAttachmentDataSchema } from './visualization_schema';

describe('visualizationAttachmentDataSchema', () => {
  it('accepts a Lens attachment with an explicit renderer', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'lens',
      query: 'count by host',
      visualization: { title: 'Hosts' },
      chart_type: 'xy',
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(true);
  });

  it('accepts a legacy Lens attachment without a renderer (backwards compatible)', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      query: 'count by host',
      visualization: { title: 'Hosts' },
      chart_type: 'xy',
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(true);
  });

  it('accepts a Vega attachment carrying a spec', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'vega',
      query: 'faceted bars by host',
      visualization: { spec: '{"$schema":"https://vega.github.io/schema/vega-lite/v6.json"}' },
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(true);
  });

  it('rejects a Vega attachment that is missing its spec', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'vega',
      query: 'faceted bars by host',
      visualization: {},
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(false);
  });

  it('rejects a Lens attachment that is missing its visualization config', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'lens',
      query: 'count by host',
      chart_type: 'xy',
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(false);
  });

  it('rejects an unbounded query string', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'lens',
      query: 'a'.repeat(2049),
      visualization: { title: 'Hosts' },
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(false);
  });

  it('rejects a Vega attachment whose spec exceeds the maximum length', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'vega',
      query: 'faceted bars by host',
      visualization: { spec: 'x'.repeat(MAX_VEGA_SPEC_LENGTH + 1) },
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(false);
  });

  it('accepts a Vega attachment whose spec is at the maximum length', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'vega',
      query: 'faceted bars by host',
      visualization: { spec: 'x'.repeat(MAX_VEGA_SPEC_LENGTH) },
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(true);
  });

  it('accepts a custom_content attachment carrying a template', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'custom_content',
      query: 'a status board by host',
      visualization: { template: '<div>{{ row["host"].value }}</div>' },
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(true);
  });

  it('accepts a static custom_content attachment with an empty esql', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'custom_content',
      query: 'a welcome card',
      visualization: { template: '<div>Welcome</div>' },
      esql: '',
    });

    expect(result.success).toBe(true);
  });

  // Dashboard panels push an empty draft attachment before the agent generates the template.
  it('accepts a custom_content attachment with an empty template', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'custom_content',
      query: 'Custom content dashboard panel panel-1',
      visualization: { template: '' },
      esql: '',
    });

    expect(result.success).toBe(true);
  });

  // Agent-written updates commonly nest esql inside the renderer payload; the
  // schema hoists it so a hand-written edit doesn't hard-fail the round.
  it('hoists a misplaced visualization.esql to the top level', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'custom_content',
      query: 'a status board by host',
      visualization: {
        template: '<div>{{ row["host"].value }}</div>',
        esql: 'FROM logs | STATS count() BY host',
      },
    });

    expect(result.success).toBe(true);
    expect(result.data).toEqual({
      renderer: 'custom_content',
      query: 'a status board by host',
      visualization: { template: '<div>{{ row["host"].value }}</div>' },
      esql: 'FROM logs | STATS count() BY host',
    });
  });

  it('defaults a missing esql to an empty string', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'custom_content',
      query: 'a welcome card',
      visualization: { template: '<div>Welcome</div>' },
    });

    expect(result.success).toBe(true);
    expect(result.data?.esql).toBe('');
  });

  it('keeps the top-level esql when both placements are present', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'custom_content',
      query: 'a status board by host',
      visualization: { template: '<div></div>', esql: 'FROM nested' },
      esql: 'FROM top_level',
    });

    expect(result.success).toBe(true);
    expect(result.data?.esql).toBe('FROM top_level');
  });

  it('rejects a custom_content attachment that is missing its template', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'custom_content',
      query: 'a status board by host',
      visualization: {},
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(false);
  });

  it('rejects a custom_content attachment whose template exceeds the maximum length', () => {
    const result = visualizationAttachmentDataSchema.safeParse({
      renderer: 'custom_content',
      query: 'a status board by host',
      visualization: { template: 'x'.repeat(CUSTOM_CONTENT_MAX_TEMPLATE_SCHEMA_LENGTH + 1) },
      esql: 'FROM logs | STATS count() BY host',
    });

    expect(result.success).toBe(false);
  });
});
