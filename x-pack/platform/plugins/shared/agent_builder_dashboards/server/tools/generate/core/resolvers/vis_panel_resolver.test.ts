/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  buildCustomContentConfig,
  buildLensConfig,
  buildVegaConfig,
} from '@kbn/agent-builder-visualizations-server';
import { SupportedChartType } from '@kbn/agent-builder-common/tools/tool_result';
import { VEGA_VIS_TYPE } from '@kbn/agent-builder-visualizations-common';
import { CUSTOM_CONTENT_EMBEDDABLE_TYPE } from '@kbn/custom-content-common';
import type { ModelProvider, ToolEventEmitter } from '@kbn/agent-builder-server';
import type { IScopedClusterClient } from '@kbn/core-elasticsearch-server';
import type { Logger } from '@kbn/logging';
import { LENS_EMBEDDABLE_TYPE } from '@kbn/lens-common';
import { createVisPanelResolver } from './vis_panel_resolver';

jest.mock('@kbn/agent-builder-visualizations-server', () => ({
  buildLensConfig: jest.fn(),
  buildVegaConfig: jest.fn(),
  buildCustomContentConfig: jest.fn(),
}));

const mockedBuildLensConfig = jest.mocked(buildLensConfig);
const mockedBuildVegaConfig = jest.mocked(buildVegaConfig);
const mockedBuildCustomContentConfig = jest.mocked(buildCustomContentConfig);

const createMockLogger = (): Logger =>
  ({
    debug: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
  } as unknown as Logger);

describe('createVisPanelResolver', () => {
  const logger = createMockLogger();
  const modelProvider = {} as ModelProvider;
  const events = {} as ToolEventEmitter;
  const esClient = {} as IScopedClusterClient;
  const createBuildLensConfigResult = (
    validatedConfig: Record<string, unknown>
  ): Awaited<ReturnType<typeof buildLensConfig>> =>
    ({
      validatedConfig,
      selectedChartType: 'metric',
      authoringNote: 'Created a titleless metric showing total requests.',
      esqlQuery: 'FROM logs-* | STATS count = COUNT(*)',
    } as Awaited<ReturnType<typeof buildLensConfig>>);

  beforeEach(() => {
    mockedBuildLensConfig.mockReset();
    mockedBuildVegaConfig.mockReset();
    mockedBuildCustomContentConfig.mockReset();
  });

  it('creates Lens panel content for create requests', async () => {
    mockedBuildLensConfig.mockResolvedValue(createBuildLensConfigResult({ type: 'metric' }));

    const resolveVisPanel = createVisPanelResolver({
      logger,
      modelProvider,
      events,
      esClient,
    });

    const result = await resolveVisPanel({
      type: 'vis',
      operationType: 'add_panels',
      identifier: 'show total requests',
      nlQuery: 'show total requests',
      index: 'logs-*',
      chartType: SupportedChartType.Metric,
    });

    expect(result).toEqual({
      type: 'success',
      panelContent: {
        type: LENS_EMBEDDABLE_TYPE,
        config: { type: 'metric' },
      },
      authoringNote: 'Created a titleless metric showing total requests.',
    });
    expect(mockedBuildLensConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        includeTimeRange: false,
      })
    );
  });

  it('creates panel content when the authoring note is missing', async () => {
    mockedBuildLensConfig.mockResolvedValue({
      validatedConfig: {
        type: 'metric',
        metrics: [{ column: 'count', type: 'primary' }],
        data_source: { type: 'esql', query: 'FROM logs-* | STATS count = COUNT(*)' },
        ignore_global_filters: false,
        sampling: 100,
      },
      selectedChartType: SupportedChartType.Metric,
      esqlQuery: 'FROM logs-* | STATS count = COUNT(*)',
    });
    const resolveVisPanel = createVisPanelResolver({
      logger,
      modelProvider,
      events,
      esClient,
    });

    await expect(
      resolveVisPanel({
        type: 'vis',
        operationType: 'add_panels',
        identifier: 'show total requests',
        nlQuery: 'show total requests',
        index: 'logs-*',
      })
    ).resolves.toEqual({
      type: 'success',
      panelContent: {
        type: LENS_EMBEDDABLE_TYPE,
        config: expect.objectContaining({ type: 'metric' }),
      },
    });
  });

  it('passes the existing Lens config when editing a Lens panel', async () => {
    mockedBuildLensConfig.mockResolvedValue(createBuildLensConfigResult({ type: 'line' }));

    const resolveVisPanel = createVisPanelResolver({
      logger,
      modelProvider,
      events,
      esClient,
    });

    await resolveVisPanel({
      type: 'vis',
      operationType: 'edit_panels',
      identifier: 'panel-1',
      nlQuery: 'change the title',
      existingPanel: {
        id: 'panel-1',
        type: LENS_EMBEDDABLE_TYPE,
        config: { type: 'xy' },
        grid: { w: 24, h: 12, x: 0, y: 0 },
      },
    });

    expect(mockedBuildLensConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        existingConfig: JSON.stringify({ type: 'xy' }),
        parsedExistingConfig: { type: 'xy' },
      })
    );
  });

  it('creates a Vega panel in the attachment API shape (config.spec) when renderer is "vega"', async () => {
    const spec = '{"$schema":"https://vega.github.io/schema/vega-lite/v6.json"}';
    mockedBuildVegaConfig.mockResolvedValue({
      spec,
      title: 'Requests by host',
      authoringNote: 'Created a bar chart of requests by host with a concise title.',
      esqlQuery: 'FROM logs-*',
    });

    const resolveVisPanel = createVisPanelResolver({ logger, modelProvider, events, esClient });

    const result = await resolveVisPanel({
      type: 'vis',
      operationType: 'add_panels',
      identifier: 'a small multiples chart',
      nlQuery: 'a small multiples chart',
      index: 'logs-*',
      renderer: 'vega',
    });

    expect(result).toEqual({
      type: 'success',
      panelContent: {
        type: VEGA_VIS_TYPE,
        config: { spec, title: 'Requests by host' },
      },
      authoringNote: 'Created a bar chart of requests by host with a concise title.',
    });
    expect(mockedBuildVegaConfig).toHaveBeenCalledWith(
      expect.objectContaining({ nlQuery: 'a small multiples chart', existingSpec: undefined })
    );
    expect(mockedBuildLensConfig).not.toHaveBeenCalled();
  });

  it('defaults to Lens when renderer is omitted on a create request', async () => {
    mockedBuildLensConfig.mockResolvedValue(createBuildLensConfigResult({ type: 'metric' }));

    const resolveVisPanel = createVisPanelResolver({ logger, modelProvider, events, esClient });

    const result = await resolveVisPanel({
      type: 'vis',
      operationType: 'add_panels',
      identifier: 'total requests',
      nlQuery: 'total requests',
      chartType: SupportedChartType.Metric,
    });

    expect(result.type).toBe('success');
    expect(mockedBuildVegaConfig).not.toHaveBeenCalled();
    expect(mockedBuildLensConfig).toHaveBeenCalled();
  });

  it('keeps the Vega renderer and reuses the embedded spec when editing a vega panel', async () => {
    const existingSpec = '{"$schema":"vega-lite","mark":"bar"}';
    const nextSpec = '{"$schema":"vega-lite","mark":"line"}';
    mockedBuildVegaConfig.mockResolvedValue({
      spec: nextSpec,
      authoringNote: 'Changed the panel to a line chart.',
      esqlQuery: 'FROM logs-*',
    });

    const resolveVisPanel = createVisPanelResolver({ logger, modelProvider, events, esClient });

    const result = await resolveVisPanel({
      type: 'vis',
      operationType: 'edit_panels',
      identifier: 'panel-1',
      nlQuery: 'make it a line chart',
      // A stale "lens" request must be ignored: edits keep the existing renderer.
      renderer: 'lens',
      existingPanel: {
        id: 'panel-1',
        type: VEGA_VIS_TYPE,
        config: { spec: existingSpec },
        grid: { w: 24, h: 12, x: 0, y: 0 },
      },
    });

    expect(result).toEqual({
      type: 'success',
      panelContent: {
        type: VEGA_VIS_TYPE,
        config: { spec: nextSpec },
      },
      authoringNote: 'Changed the panel to a line chart.',
    });
    expect(mockedBuildVegaConfig).toHaveBeenCalledWith(expect.objectContaining({ existingSpec }));
    expect(mockedBuildLensConfig).not.toHaveBeenCalled();
  });

  it('creates a custom_content panel (config.template) when renderer is "custom_content"', async () => {
    mockedBuildCustomContentConfig.mockResolvedValue({
      template: '<div>{{ row["host"].value }}</div>',
      esqlQuery: 'FROM logs-* | STATS count = COUNT(*) BY host',
    });

    const resolveVisPanel = createVisPanelResolver({ logger, modelProvider, events, esClient });

    const result = await resolveVisPanel({
      type: 'vis',
      operationType: 'add_panels',
      identifier: 'a status board',
      nlQuery: 'a status board',
      index: 'logs-*',
      renderer: 'custom_content',
    });

    expect(result).toEqual({
      type: 'success',
      panelContent: {
        type: CUSTOM_CONTENT_EMBEDDABLE_TYPE,
        config: {
          template: '<div>{{ row["host"].value }}</div>',
          esqlQuery: 'FROM logs-* | STATS count = COUNT(*) BY host',
        },
      },
    });
    expect(mockedBuildCustomContentConfig).toHaveBeenCalledWith(
      expect.objectContaining({ nlQuery: 'a status board', contentMode: 'data' })
    );
    expect(mockedBuildLensConfig).not.toHaveBeenCalled();
    expect(mockedBuildVegaConfig).not.toHaveBeenCalled();
  });

  it('omits esqlQuery from the panel config for static custom content', async () => {
    mockedBuildCustomContentConfig.mockResolvedValue({
      template: '<div>Welcome</div>',
      esqlQuery: undefined,
    });

    const resolveVisPanel = createVisPanelResolver({ logger, modelProvider, events, esClient });

    const result = await resolveVisPanel({
      type: 'vis',
      operationType: 'add_panels',
      identifier: 'a welcome card',
      nlQuery: 'a welcome card',
      renderer: 'custom_content',
      contentMode: 'static',
    });

    expect(result).toEqual({
      type: 'success',
      panelContent: {
        type: CUSTOM_CONTENT_EMBEDDABLE_TYPE,
        config: { template: '<div>Welcome</div>' },
      },
    });
    expect(mockedBuildCustomContentConfig).toHaveBeenCalledWith(
      expect.objectContaining({ contentMode: 'static' })
    );
  });

  it('keeps the custom_content renderer and reuses existing state when editing', async () => {
    mockedBuildCustomContentConfig.mockResolvedValue({
      template: '<div>Updated</div>',
      esqlQuery: 'FROM logs-*',
    });

    const resolveVisPanel = createVisPanelResolver({ logger, modelProvider, events, esClient });

    const result = await resolveVisPanel({
      type: 'vis',
      operationType: 'edit_panels',
      identifier: 'panel-1',
      nlQuery: 'make the badges red',
      // A stale "lens" request must be ignored: edits keep the existing renderer.
      renderer: 'lens',
      existingPanel: {
        id: 'panel-1',
        type: CUSTOM_CONTENT_EMBEDDABLE_TYPE,
        config: { template: '<div>Old</div>', esqlQuery: 'FROM logs-*' },
        grid: { w: 24, h: 12, x: 0, y: 0 },
      },
    });

    expect(result).toEqual({
      type: 'success',
      panelContent: {
        type: CUSTOM_CONTENT_EMBEDDABLE_TYPE,
        config: { template: '<div>Updated</div>', esqlQuery: 'FROM logs-*' },
      },
    });
    expect(mockedBuildCustomContentConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        existingTemplate: '<div>Old</div>',
        existingEsql: 'FROM logs-*',
        contentMode: 'data',
      })
    );
    expect(mockedBuildLensConfig).not.toHaveBeenCalled();
  });

  it('defaults to static mode when editing a custom_content panel that has no query', async () => {
    mockedBuildCustomContentConfig.mockResolvedValue({
      template: '<div>Updated static</div>',
      esqlQuery: undefined,
    });

    const resolveVisPanel = createVisPanelResolver({ logger, modelProvider, events, esClient });

    await resolveVisPanel({
      type: 'vis',
      operationType: 'edit_panels',
      identifier: 'panel-1',
      nlQuery: 'change the wording',
      existingPanel: {
        id: 'panel-1',
        type: CUSTOM_CONTENT_EMBEDDABLE_TYPE,
        config: { template: '<div>Static</div>' },
        grid: { w: 24, h: 12, x: 0, y: 0 },
      },
    });

    expect(mockedBuildCustomContentConfig).toHaveBeenCalledWith(
      expect.objectContaining({ contentMode: 'static' })
    );
  });

  it('returns a failure when editing a non-Lens panel', async () => {
    const resolveVisPanel = createVisPanelResolver({
      logger,
      modelProvider,
      events,
      esClient,
    });

    const result = await resolveVisPanel({
      type: 'vis',
      operationType: 'edit_panels',
      identifier: 'panel-1',
      nlQuery: 'refine this analysis',
      existingPanel: {
        id: 'panel-1',
        type: 'aiOpsLogRateAnalysis',
        config: { seriesType: 'log_rate' },
        grid: { w: 24, h: 12, x: 0, y: 0 },
      },
    });

    expect(result).toEqual({
      type: 'failure',
      failure: {
        type: 'edit_panels',
        identifier: 'panel-1',
        error:
          'Panel "panel-1" with type "aiOpsLogRateAnalysis" is not supported for inline visualization editing.',
      },
    });
    expect(mockedBuildLensConfig).not.toHaveBeenCalled();
    expect(mockedBuildVegaConfig).not.toHaveBeenCalled();
  });
});
