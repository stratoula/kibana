/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Logger } from '@kbn/core/server';
import { ToolResultType, SupportedChartType } from '@kbn/agent-builder-common/tools/tool_result';
import { ATTACHMENT_REF_ACTOR } from '@kbn/agent-builder-common/attachments';
import { VISUALIZATION_ATTACHMENT_TYPE } from '@kbn/agent-builder-visualizations-common';
import {
  buildLensConfig,
  buildVegaConfig,
  buildCustomContentConfig,
} from '@kbn/agent-builder-visualizations-server';
import { createVisualizationTool } from './create_visualization';

jest.mock('@kbn/agent-builder-visualizations-server', () => ({
  buildLensConfig: jest.fn(),
  buildVegaConfig: jest.fn(),
  buildCustomContentConfig: jest.fn(),
}));

const mockBuildLens = buildLensConfig as jest.Mock;
const mockBuildVega = buildVegaConfig as jest.Mock;
const mockBuildCustomContent = buildCustomContentConfig as jest.Mock;

const createLogger = (): Logger =>
  ({
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  } as unknown as Logger);

interface MockAttachments {
  getAttachmentRecord: jest.Mock;
  add: jest.Mock;
  update: jest.Mock;
}

const createAttachments = (): MockAttachments => ({
  getAttachmentRecord: jest.fn().mockReturnValue(undefined),
  add: jest.fn().mockResolvedValue({ id: 'att-new', current_version: 1 }),
  update: jest.fn().mockResolvedValue({ current_version: 2 }),
});

const runHandler = async (
  params: Record<string, unknown>,
  overrides: { logger?: Logger; attachments?: MockAttachments } = {}
) => {
  const logger = overrides.logger ?? createLogger();
  const attachments = overrides.attachments ?? createAttachments();
  const tool = createVisualizationTool();
  const result = (await tool.handler(
    params as never,
    {
      esClient: {} as never,
      modelProvider: {} as never,
      logger,
      events: {} as never,
      attachments: attachments as never,
    } as never
  )) as { results: Array<{ type: string; data: any }> };
  return { result, logger, attachments };
};

describe('createVisualizationTool schema', () => {
  const schema = createVisualizationTool().schema;

  it('requires chartType for a new Lens visualization', () => {
    expect(
      schema.safeParse({
        query: 'errors over time',
        chartType: SupportedChartType.XY,
      }).success
    ).toBe(true);

    expect(schema.safeParse({ query: 'errors over time' }).success).toBe(false);
  });

  it('allows a new Vega visualization without chartType', () => {
    expect(schema.safeParse({ query: 'small multiples by host', renderer: 'vega' }).success).toBe(
      true
    );
  });

  it('allows a new custom_content visualization without chartType', () => {
    expect(
      schema.safeParse({ query: 'a KPI status board', renderer: 'custom_content' }).success
    ).toBe(true);
  });

  it('rejects contentMode for non-custom_content renderers', () => {
    expect(
      schema.safeParse({
        query: 'errors over time',
        renderer: 'lens',
        chartType: SupportedChartType.XY,
        contentMode: 'static',
      }).success
    ).toBe(false);
  });

  it('allows an attachment update without chartType', () => {
    expect(
      schema.safeParse({ query: 'use a clearer title', attachment_id: 'existing' }).success
    ).toBe(true);
  });

  it('rejects renderer when updating an existing attachment', () => {
    expect(
      schema.safeParse({
        query: 'use a clearer title',
        attachment_id: 'existing',
        renderer: 'lens',
      }).success
    ).toBe(false);
  });
});

describe('createVisualizationTool handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockBuildLens.mockResolvedValue({
      selectedChartType: SupportedChartType.XY,
      validatedConfig: { title: 'Errors over time' },
      esqlQuery: 'FROM logs | STATS count() BY @timestamp',
      timeRange: { from: 'now-15m', to: 'now' },
    });
    mockBuildVega.mockResolvedValue({
      spec: '{"$schema":"vega-lite"}',
      esqlQuery: 'FROM logs | STATS count() BY host',
    });
    mockBuildCustomContent.mockResolvedValue({
      template: '<div>{{ row["host"].value }}</div>',
      esqlQuery: 'FROM logs | STATS count() BY host',
    });
  });

  it('builds a Lens visualization by default and persists it', async () => {
    const { result, attachments } = await runHandler({
      query: 'errors over time',
      chartType: SupportedChartType.XY,
    });

    expect(mockBuildLens).toHaveBeenCalledTimes(1);
    expect(mockBuildVega).not.toHaveBeenCalled();
    // The agent actor is required so clients can attribute the edit to the agent.
    expect(attachments.add).toHaveBeenCalledWith(
      expect.objectContaining({ type: VISUALIZATION_ATTACHMENT_TYPE }),
      ATTACHMENT_REF_ACTOR.agent
    );

    expect(result.results).toHaveLength(1);
    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.visualization);
    expect(data.renderer).toBe('lens');
    expect(data.visualization).toEqual({ title: 'Errors over time' });
    expect(data.chart_type).toBe(SupportedChartType.XY);
    expect(data.esql).toBe('FROM logs | STATS count() BY @timestamp');
    expect(data.time_range).toEqual({ from: 'now-15m', to: 'now' });
    expect(data.attachment_id).toBe('att-new');
    expect(data.version).toBe(1);
    // The natural-language query is not echoed back in the result.
    expect(data.query).toBeUndefined();
  });

  it('builds a Vega visualization when the renderer is "vega"', async () => {
    const { result } = await runHandler({ query: 'flows by host', renderer: 'vega' });

    expect(mockBuildVega).toHaveBeenCalledTimes(1);
    expect(mockBuildLens).not.toHaveBeenCalled();

    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.visualization);
    expect(data.renderer).toBe('vega');
    expect(data.visualization).toEqual({ spec: '{"$schema":"vega-lite"}' });
    expect(data.esql).toBe('FROM logs | STATS count() BY host');
    expect(data.chart_type).toBeUndefined();
    expect(data.query).toBeUndefined();
  });

  it('builds custom content when the renderer is "custom_content"', async () => {
    const { result } = await runHandler({
      query: 'a status board by host',
      renderer: 'custom_content',
    });

    expect(mockBuildCustomContent).toHaveBeenCalledTimes(1);
    expect(mockBuildCustomContent).toHaveBeenCalledWith(
      expect.objectContaining({ nlQuery: 'a status board by host', contentMode: 'data' })
    );
    expect(mockBuildLens).not.toHaveBeenCalled();
    expect(mockBuildVega).not.toHaveBeenCalled();

    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.visualization);
    expect(data.renderer).toBe('custom_content');
    expect(data.visualization).toEqual({ template: '<div>{{ row["host"].value }}</div>' });
    expect(data.esql).toBe('FROM logs | STATS count() BY host');
    expect(data.chart_type).toBeUndefined();
  });

  it('stores an empty esql for static custom content', async () => {
    mockBuildCustomContent.mockResolvedValue({
      template: '<div>Welcome</div>',
      esqlQuery: undefined,
    });

    const { result } = await runHandler({
      query: 'a welcome card',
      renderer: 'custom_content',
      contentMode: 'static',
    });

    expect(mockBuildCustomContent).toHaveBeenCalledWith(
      expect.objectContaining({ contentMode: 'static' })
    );
    const [{ data }] = result.results;
    expect(data.esql).toBe('');
    expect(data.visualization).toEqual({ template: '<div>Welcome</div>' });
  });

  it('reuses the existing template when updating a custom_content attachment', async () => {
    const attachments = createAttachments();
    attachments.getAttachmentRecord.mockReturnValue({
      id: 'existing',
      type: VISUALIZATION_ATTACHMENT_TYPE,
      current_version: 1,
      versions: [
        {
          version: 1,
          data: {
            renderer: 'custom_content',
            query: 'old query',
            visualization: { template: '<div>Old</div>' },
            esql: 'FROM old',
          },
        },
      ],
    });

    const { result } = await runHandler(
      { query: 'make the badges red', attachment_id: 'existing' },
      { attachments }
    );

    expect(mockBuildCustomContent).toHaveBeenCalledTimes(1);
    expect(mockBuildCustomContent).toHaveBeenCalledWith(
      expect.objectContaining({
        existingTemplate: '<div>Old</div>',
        existingEsql: 'FROM old',
        contentMode: 'data',
      })
    );
    expect(mockBuildLens).not.toHaveBeenCalled();
    expect(attachments.update).toHaveBeenCalledWith(
      'existing',
      expect.objectContaining({
        data: expect.objectContaining({ renderer: 'custom_content' }),
      }),
      ATTACHMENT_REF_ACTOR.agent
    );

    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.visualization);
    expect(data.renderer).toBe('custom_content');
  });

  // Dashboard panels push an empty draft attachment before the agent generates anything;
  // an empty template must behave like a brand-new visualization (data mode, no edit baseline).
  it('treats an empty existing template as a new custom_content visualization', async () => {
    const attachments = createAttachments();
    attachments.getAttachmentRecord.mockReturnValue({
      id: 'existing',
      type: VISUALIZATION_ATTACHMENT_TYPE,
      current_version: 1,
      versions: [
        {
          version: 1,
          data: {
            renderer: 'custom_content',
            query: 'Custom content dashboard panel panel-1',
            visualization: { template: '' },
            esql: '',
          },
        },
      ],
    });

    await runHandler({ query: 'a status board by host', attachment_id: 'existing' }, { attachments });

    expect(mockBuildCustomContent).toHaveBeenCalledWith(
      expect.objectContaining({
        existingTemplate: undefined,
        contentMode: 'data',
      })
    );
  });

  it('preserves the panel title when updating a custom_content attachment', async () => {
    const attachments = createAttachments();
    attachments.getAttachmentRecord.mockReturnValue({
      id: 'existing',
      type: VISUALIZATION_ATTACHMENT_TYPE,
      current_version: 1,
      versions: [
        {
          version: 1,
          data: {
            renderer: 'custom_content',
            query: 'old query',
            visualization: { template: '<div>Old</div>', title: 'My panel' },
            esql: 'FROM old',
          },
        },
      ],
    });

    await runHandler({ query: 'make the badges red', attachment_id: 'existing' }, { attachments });

    expect(attachments.update).toHaveBeenCalledWith(
      'existing',
      expect.objectContaining({
        data: expect.objectContaining({
          visualization: expect.objectContaining({ title: 'My panel' }),
        }),
      }),
      ATTACHMENT_REF_ACTOR.agent
    );
  });

  it('keeps the existing renderer when updating by attachment id', async () => {
    const attachments = createAttachments();
    attachments.getAttachmentRecord.mockReturnValue({
      id: 'existing',
      type: VISUALIZATION_ATTACHMENT_TYPE,
      current_version: 1,
      versions: [
        {
          version: 1,
          data: {
            renderer: 'vega',
            query: 'old query',
            visualization: { spec: '{"old":true}' },
            esql: 'FROM old',
          },
        },
      ],
    });

    const { result } = await runHandler(
      { query: 'tweak it', attachment_id: 'existing' },
      { attachments }
    );

    expect(mockBuildVega).toHaveBeenCalledTimes(1);
    expect(mockBuildLens).not.toHaveBeenCalled();
    // The prior spec is reused as the edit baseline.
    expect(mockBuildVega).toHaveBeenCalledWith(
      expect.objectContaining({ existingSpec: '{"old":true}' })
    );
    expect(attachments.update).toHaveBeenCalledWith(
      'existing',
      expect.objectContaining({ data: expect.objectContaining({ renderer: 'vega' }) }),
      ATTACHMENT_REF_ACTOR.agent
    );
    expect(attachments.add).not.toHaveBeenCalled();

    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.visualization);
    expect(data.renderer).toBe('vega');
    expect(data.attachment_id).toBe('existing');
    expect(data.version).toBe(2);
  });

  it('returns an error when the attachment to update does not exist', async () => {
    const { result, attachments } = await runHandler({
      query: 'tweak it',
      attachment_id: 'missing',
    });

    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.error);
    expect(data.message).toContain('Visualization attachment "missing" not found');
    expect(mockBuildLens).not.toHaveBeenCalled();
    expect(mockBuildVega).not.toHaveBeenCalled();
    expect(attachments.add).not.toHaveBeenCalled();
    expect(attachments.update).not.toHaveBeenCalled();
  });

  it('surfaces an error result when persistence fails instead of silently succeeding', async () => {
    const attachments = createAttachments();
    attachments.add.mockRejectedValue(new Error('index_not_found'));

    const { result, logger } = await runHandler(
      { query: 'errors over time', chartType: SupportedChartType.XY },
      { attachments }
    );

    expect(result.results).toHaveLength(1);
    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.error);
    expect(data.message).toContain('index_not_found');
    expect(logger.error).toHaveBeenCalled();
  });

  it('returns an error result when spec generation throws', async () => {
    mockBuildLens.mockRejectedValue(new Error('esql_generation_failed'));

    const { result } = await runHandler({
      query: 'broken',
      chartType: SupportedChartType.Metric,
    });

    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.error);
    expect(data.message).toContain('esql_generation_failed');
  });

  it('gives an actionable hint when index auto-discovery fails and no index was passed', async () => {
    // The deeply-nested error surfaced when the referenced fields are ungrounded.
    mockBuildLens.mockRejectedValue(
      new Error(
        'Failed to generate a valid Vega specification. Last error: Could not resolve a valid ' +
          'ES|QL query for the visualization: Could not generate ESQL query: Could not discover a ' +
          'suitable index for the query. Please specify an index explicitly.'
      )
    );

    const { result } = await runHandler({
      query: 'cpu by host',
      chartType: SupportedChartType.XY,
    });

    const [{ type, data }] = result.results;
    expect(type).toBe(ToolResultType.error);
    expect(data.message).toContain('Could not find an index matching the requested fields');
    expect(data.message).toContain('retry create_visualization with an explicit "index"');
  });

  it('does not add the index hint when an explicit index was provided', async () => {
    mockBuildLens.mockRejectedValue(
      new Error('Could not discover a suitable index for the query.')
    );

    const { result } = await runHandler({
      query: 'cpu by host',
      index: 'metrics-*',
      chartType: SupportedChartType.XY,
    });

    const [{ data }] = result.results;
    expect(data.message).toContain('Failed to create visualization:');
    expect(data.message).not.toContain('Could not find an index matching');
  });
});
