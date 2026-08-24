/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { ModelProvider, ToolEventEmitter } from '@kbn/agent-builder-server';
import type { IScopedClusterClient } from '@kbn/core-elasticsearch-server';
import type { Logger } from '@kbn/logging';
import { executeEsql } from '@kbn/agent-builder-genai-utils';
import { buildTimeRangeParams } from '@kbn/agent-builder-genai-utils/tools/utils/esql';
import { createCustomContentTemplateResolver } from '@kbn/custom-content-server';
import type { CustomContentSample } from '@kbn/custom-content-server';
import { generateVisualizationEsql } from '../shared/generate_visualization_esql';

/**
 * Whether the content is backed by an ES|QL query ('data', the default) or is
 * purely presentational HTML with no query ('static').
 */
export type CustomContentMode = 'data' | 'static';

/** Rows shown to the template author so it can reference real column values. */
const SAMPLE_ROW_COUNT = 3;

/**
 * Default range used only to bind `?_tstart`/`?_tend` when sampling the query
 * server-side. The live dashboard range is applied by Kibana at render time.
 */
const DEFAULT_SAMPLE_TIME_RANGE = { from: 'now-24h', to: 'now' } as const;

/**
 * The Liquid template can only iterate the rows it is given — appended to the
 * shared ES|QL instructions so grouping/sorting happens in the query.
 */
const customContentEsqlAdditionalInstructions = `The query results feed an HTML template that can only loop over the returned rows — it cannot aggregate, group, or sort them. Any grouping or aggregation the content needs must happen in the query itself (STATS ... BY ...), and rows should come back already sorted and limited to what the panel will display.`;

export interface BuildCustomContentConfigParams {
  /** Natural-language instruction describing the content to create or change. */
  nlQuery: string;
  /** Index/data-view to ground ES|QL generation against. */
  index?: string;
  /** Caller-provided ES|QL query to use as-is (skips generation). */
  esql?: string;
  /** Defaults to 'data'; 'static' skips ES|QL entirely. */
  contentMode?: CustomContentMode;
  /** Existing template to refine; omitted when creating from scratch. */
  existingTemplate?: string;
  /** ES|QL query backing the existing template, used to seed a query-changing edit. */
  existingEsql?: string;
  modelProvider: ModelProvider;
  logger: Logger;
  events: ToolEventEmitter;
  esClient: IScopedClusterClient;
}

export interface BuildCustomContentConfigResult {
  /** Render-ready Liquid HTML template. */
  template: string;
  /** ES|QL query backing the template; absent for static content. */
  esqlQuery?: string;
}

/**
 * Orchestrate custom-content template generation: resolve the backing ES|QL
 * query through the shared visualization pipeline (grounded index, validation,
 * time-picker params), sample its results, and author the Liquid template from
 * the real schema. Query generation or sampling failures throw — static
 * content is never a silent fallback; it must be requested via `contentMode`.
 */
export const buildCustomContentConfig = async ({
  nlQuery,
  index,
  esql,
  contentMode = 'data',
  existingTemplate,
  existingEsql,
  modelProvider,
  logger,
  events,
  esClient,
}: BuildCustomContentConfigParams): Promise<BuildCustomContentConfigResult> => {
  const resolveTemplate = createCustomContentTemplateResolver({ modelProvider });

  if (contentMode === 'static') {
    const template = await resolveTemplate({ prompt: nlQuery, existingTemplate });
    return { template };
  }

  let query = esql;
  if (!query) {
    const generated = await generateVisualizationEsql({
      nlQuery,
      index,
      existingQueries: existingEsql ? [existingEsql] : [],
      modelProvider,
      events,
      logger,
      esClient,
      timeRange: DEFAULT_SAMPLE_TIME_RANGE,
      extraInstructions: customContentEsqlAdditionalInstructions,
    });
    if (!generated.query) {
      throw new Error(
        `Failed to generate an ES|QL query for the custom content panel: ${
          generated.error ?? 'Unknown error'
        }`
      );
    }
    query = generated.query;
  }

  // Sample the query so the template is authored against the real result
  // schema. A failure here means the query is unusable — surface it instead of
  // generating a template against unknown columns.
  let sample: CustomContentSample;
  try {
    const { columns, values } = await executeEsql({
      query,
      limit: SAMPLE_ROW_COUNT,
      params: buildTimeRangeParams(DEFAULT_SAMPLE_TIME_RANGE),
      esClient: esClient.asCurrentUser,
    });
    sample = { columns, rows: values };
  } catch (err) {
    throw new Error(
      `The ES|QL query backing the custom content panel failed to execute: ${
        err instanceof Error ? err.message : String(err)
      }`
    );
  }

  const template = await resolveTemplate({ prompt: nlQuery, sample, existingTemplate });

  return { template, esqlQuery: query };
};
