/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { SupportedChartType } from '@kbn/agent-builder-common/tools/tool_result';
import { addPanelsItemSchema, addSectionPanelItemSchema, editPanelItemSchema } from '.';

const lensRequest = {
  source: 'request' as const,
  type: 'vis' as const,
  query: 'show total requests',
  grid: { x: 0, y: 0, w: 12, h: 5 },
};

describe('panel item schemas', () => {
  it.each([
    ['add_panels', addPanelsItemSchema],
    ['add_section', addSectionPanelItemSchema],
  ])('routes a Lens request without renderer through the %s schema', (_, schema) => {
    expect(
      schema.safeParse({
        ...lensRequest,
        chartType: SupportedChartType.Metric,
      }).success
    ).toBe(true);
  });

  it.each([
    ['add_panels', addPanelsItemSchema],
    ['add_section', addSectionPanelItemSchema],
  ])('requires chartType for a Lens request through the %s schema', (_, schema) => {
    expect(schema.safeParse(lensRequest).success).toBe(false);
  });
});

const customContentRequest = {
  source: 'request' as const,
  type: 'vis' as const,
  renderer: 'custom_content' as const,
  query: 'Show a KPI card for total errors',
  grid: { x: 0, y: 0, w: 6, h: 4 },
};

describe('custom_content renderer schemas', () => {
  it.each([
    ['add_panels', addPanelsItemSchema],
    ['add_section', addSectionPanelItemSchema],
  ])('accepts a custom_content request without chartType through %s', (_, schema) => {
    expect(schema.safeParse(customContentRequest).success).toBe(true);
  });

  it.each([
    ['add_panels', addPanelsItemSchema],
    ['add_section', addSectionPanelItemSchema],
  ])('accepts a static custom_content request through %s', (_, schema) => {
    expect(
      schema.safeParse({
        ...customContentRequest,
        contentMode: 'static' as const,
      }).success
    ).toBe(true);
  });

  it.each([
    ['add_panels', addPanelsItemSchema],
    ['add_section', addSectionPanelItemSchema],
  ])('accepts a by-value custom_content vis config through %s', (_, schema) => {
    expect(
      schema.safeParse({
        source: 'config' as const,
        type: 'vis' as const,
        grid: { x: 0, y: 0, w: 6, h: 4 },
        config: {
          template: '<div>{{ row["service.name"].value }}</div>',
          esqlQuery: 'FROM logs-* | STATS count = COUNT(*) BY service.name',
        },
      }).success
    ).toBe(true);
  });

  it.each([
    ['add_panels', addPanelsItemSchema],
    ['add_section', addSectionPanelItemSchema],
  ])('rejects a by-value custom_content config with an empty template through %s', (_, schema) => {
    expect(
      schema.safeParse({
        source: 'config' as const,
        type: 'vis' as const,
        grid: { x: 0, y: 0, w: 6, h: 4 },
        config: { template: '' },
      }).success
    ).toBe(false);
  });

  it('accepts a custom_content edit as a request-source vis edit', () => {
    expect(
      editPanelItemSchema.safeParse({
        source: 'request' as const,
        type: 'vis' as const,
        panelId: 'panel-123',
        query: 'Update the KPI card to show error rate instead',
      }).success
    ).toBe(true);
  });
});
