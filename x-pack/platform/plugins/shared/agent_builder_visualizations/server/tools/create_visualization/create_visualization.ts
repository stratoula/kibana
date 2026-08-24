/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { z } from '@kbn/zod/v4';
import { platformCoreTools, ToolType } from '@kbn/agent-builder-common';
import type { BuiltinToolDefinition } from '@kbn/agent-builder-server';
import { getToolResultId } from '@kbn/agent-builder-server';
import { getLatestVersion, ATTACHMENT_REF_ACTOR } from '@kbn/agent-builder-common/attachments';
import {
  VISUALIZATION_ATTACHMENT_TYPE,
  type VisualizationAttachmentData,
  type VisualizationRenderer,
} from '@kbn/agent-builder-visualizations-common';
import { ToolResultType, SupportedChartType } from '@kbn/agent-builder-common/tools/tool_result';
import {
  buildLensConfig,
  buildVegaConfig,
  buildCustomContentConfig,
  type VisualizationConfig,
} from '@kbn/agent-builder-visualizations-server';

/**
 * Pull the prior Lens config out of an existing attachment, when it is a Lens
 * visualization. Returns null for other renderers or unparseable data.
 */
const getExistingLensConfig = (
  data: VisualizationAttachmentData | undefined
): VisualizationConfig | null => {
  if (!data || (data.renderer && data.renderer !== 'lens')) {
    return null;
  }
  const candidate = data.visualization;
  return candidate && typeof candidate === 'object' ? (candidate as VisualizationConfig) : null;
};

const getExistingVegaSpec = (data: VisualizationAttachmentData | undefined): string | undefined => {
  if (!data || data.renderer !== 'vega') {
    return undefined;
  }
  const candidate = data.visualization?.spec;
  return typeof candidate === 'string' ? candidate : undefined;
};

const getExistingCustomContentTemplate = (
  data: VisualizationAttachmentData | undefined
): string | undefined => {
  if (!data || data.renderer !== 'custom_content') {
    return undefined;
  }
  const candidate = data.visualization?.template;
  // An empty string is a draft pushed by an empty dashboard panel — treat it
  // as "no existing template" so generation starts fresh.
  return typeof candidate === 'string' && candidate.length > 0 ? candidate : undefined;
};

const createVisualizationSchema = z
  .object({
    query: z
      .string()
      .max(2048)
      .describe('A natural language query describing the desired visualization.'),
    index: z
      .string()
      .max(1024)
      .optional()
      .describe(
        '(strongly recommended) Index, alias, or datastream to target, grounded against the actual cluster. If omitted, the tool auto-discovers an index from the query, which FAILS when the referenced fields do not exist in any index. Prefer discovering the index (and verifying the fields exist) first, then pass it here — especially for multi-panel requests, where every call should reuse the same grounded index.'
      ),
    attachment_id: z
      .string()
      .max(256)
      .optional()
      .describe(
        '(optional) ID of an existing visualization attachment to update. The attachment must exist. Omit renderer when updating because the existing visualization determines it.'
      ),
    renderer: z
      .enum(['lens', 'vega', 'custom_content'])
      .optional()
      .describe(
        '(optional, new visualizations only) Which engine renders the visualization. Use "lens" (the default when omitted) for standard charts. Use "vega" for custom Vega-Lite visualizations — small multiples/faceting, layered or combination charts, scatter/bubble plots with an encoded size dimension, custom encodings, or when the user explicitly asks for Vega/Vega-Lite. Use "custom_content" ONLY as a last resort for non-chart HTML layouts (KPI cards, status boards, formatted lists) that neither Lens nor Vega can express. Omit this field when updating an existing attachment; edits keep the existing renderer.'
      ),
    contentMode: z
      .enum(['data', 'static'])
      .optional()
      .describe(
        '(custom_content only) "data" (the default) binds the content to an ES|QL query whose results fill the template at render time. "static" produces purely presentational HTML with no query — use it ONLY when the user explicitly asks for content without data (e.g. a legend, instructions, a divider).'
      ),
    chartType: z
      .nativeEnum(SupportedChartType)
      .optional()
      .describe(
        'Required when creating a new Lens visualization. For a new Vega visualization it is an optional styling hint; omit it when no Lens chart type represents the requested form. Not used by custom_content. On updates it is optional because the existing visualization provides the current form.'
      ),
    esql: z
      .string()
      .max(4096)
      .optional()
      .describe(
        '(optional) An ES|QL query. If not provided, the tool will automatically generate the query. Only pass ES|QL queries from reliable sources (other tool calls or the user) and NEVER invent queries directly.'
      ),
  })
  .check((ctx) => {
    if (ctx.value.attachment_id && ctx.value.renderer) {
      ctx.issues.push({
        code: 'custom',
        message: 'renderer must be omitted when updating an existing visualization attachment.',
        input: ctx.value,
      });
    }

    const isNewLensVisualization =
      !ctx.value.attachment_id && (!ctx.value.renderer || ctx.value.renderer === 'lens');

    if (isNewLensVisualization && !ctx.value.chartType) {
      ctx.issues.push({
        code: 'custom',
        message: 'chartType is required when creating a new Lens visualization.',
        input: ctx.value,
      });
    }

    if (ctx.value.contentMode && ctx.value.renderer && ctx.value.renderer !== 'custom_content') {
      ctx.issues.push({
        code: 'custom',
        message: 'contentMode only applies to the custom_content renderer.',
        input: ctx.value,
      });
    }
  });

export const createVisualizationTool = (): BuiltinToolDefinition<
  typeof createVisualizationSchema
> => {
  return {
    id: platformCoreTools.createVisualization,
    type: ToolType.builtin,
    description: `Create or update a visualization from a natural language description. Supports standard Lens charts, custom Vega-Lite visualizations (the Vega-Lite grammar only — NOT full Vega), and — as a last resort — sandboxed HTML custom content. Prefer this tool over telling the user a chart cannot be built whenever the request fits Lens or Vega-Lite; you do not author Vega specs or HTML by hand or ask the user to paste anything. If a request genuinely needs full Vega (custom signals/interactivity, imperative transforms, or bespoke rendering), it is not supported yet — be honest with the user and offer alternatives instead of producing a broken chart.

You choose how to render the request via the "renderer" parameter — always pick the FIRST renderer in this ladder that can express the request:
- "lens" (the default when omitted) for a standard Lens chart; new Lens visualizations require "chartType" (${Object.values(
      SupportedChartType
    ).join(', ')}).
- "vega" for a custom Vega-Lite specification when no Lens chart type can express the request, e.g. small multiples / faceting, layered or combination charts (bars plus an overlaid line), scatter / bubble plots with an encoded size dimension, or custom tooltips/encodings. "chartType" is optional for Vega and acts only as a styling hint.
- "custom_content" ONLY when the request is not a chart at all: bespoke HTML layouts such as KPI cards, status boards, badge/pill lists, or formatted text driven by query results. It renders an LLM-generated HTML template in a sandboxed iframe (no JavaScript). NEVER use it for anything Lens or Vega can render — a data table, metric, or gauge belongs to Lens. By default the content is data-driven (an ES|QL query fills the template at render time); pass contentMode: "static" only when the user explicitly asks for content without data.

When updating via "attachment_id", omit "renderer" because the existing visualization determines it. "chartType" is optional on updates.

This tool will:
1. If attachment_id is provided, read the existing visualization from that attachment (edits keep the same renderer)
2. Generate an ES|QL query if not provided
3. Generate and validate the visualization (Lens config, Vega-Lite spec, or HTML template) for the chosen renderer
4. Store the result as an attachment (creating new or updating existing) for future modifications

Ground first: make sure the target index exists and every field you reference is real before calling this tool. If you omit "index" the tool auto-discovers one, but that fails when the referenced fields are invented or absent from the cluster (do NOT assume APM/metrics schemas are present). For multi-panel requests, resolve the index once up front and pass the same "index" to every call rather than firing several index-less calls in parallel.`,
    schema: createVisualizationSchema,
    tags: [],
    annotations: {
      title: 'Create Kibana Visualization',
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: false,
    },
    handler: async (
      {
        query: nlQuery,
        index,
        renderer: requestedRenderer,
        contentMode,
        chartType,
        esql,
        attachment_id: attachmentId,
      },
      { esClient, modelProvider, logger, events, attachments }
    ) => {
      try {
        // Step 1: Read any existing attachment so edits reuse its renderer + config.
        let existingData: VisualizationAttachmentData | undefined;
        if (attachmentId) {
          const existingAttachmentRecord = attachments.getAttachmentRecord(attachmentId);
          if (!existingAttachmentRecord) {
            throw new Error(`Visualization attachment "${attachmentId}" not found.`);
          }

          const latestVersion = getLatestVersion(existingAttachmentRecord);
          if (!latestVersion?.data) {
            throw new Error(
              `Visualization attachment "${attachmentId}" has no readable visualization data.`
            );
          }

          existingData = latestVersion.data as VisualizationAttachmentData;
          logger.debug(`Loaded existing visualization from attachment ${attachmentId}`);
        }

        // Step 2: Resolve the renderer from the caller's choice. Edits keep the
        // existing attachment's renderer; otherwise honor the explicit `renderer`
        // param and default to Lens (the common case) when it is omitted.
        let renderer: VisualizationRenderer;
        if (existingData) {
          renderer = existingData.renderer ?? 'lens';
        } else {
          renderer = requestedRenderer ?? 'lens';
        }

        // Step 3: Generate the spec/config for the chosen renderer and assemble
        // the unified attachment data. `chart_type` is narrowed to
        // SupportedChartType so the same object also satisfies the tool result.
        let visualizationData: VisualizationAttachmentData & { chart_type?: SupportedChartType };

        if (renderer === 'vega') {
          const existingSpec = getExistingVegaSpec(existingData);
          const { spec, title, esqlQuery } = await buildVegaConfig({
            nlQuery,
            index,
            esql,
            existingSpec,
            chartType,
            modelProvider,
            logger,
            events,
            esClient,
          });
          visualizationData = {
            renderer: 'vega',
            query: nlQuery,
            visualization: { spec, ...(title ? { title } : {}) },
            esql: esqlQuery,
          };
        } else if (renderer === 'custom_content') {
          const existingTemplate = getExistingCustomContentTemplate(existingData);
          const existingEsql = existingData?.esql || undefined;
          const existingTitle = existingData?.visualization?.title;
          const { template, esqlQuery } = await buildCustomContentConfig({
            nlQuery,
            index,
            esql,
            // Edits keep the existing panel's mode unless explicitly overridden,
            // so a prompt-only edit of static content never grows a query. An
            // empty draft (no template yet) still defaults to data mode.
            contentMode:
              contentMode ?? (existingData && existingTemplate && !existingEsql ? 'static' : 'data'),
            existingTemplate,
            existingEsql,
            modelProvider,
            logger,
            events,
            esClient,
          });
          visualizationData = {
            renderer: 'custom_content',
            query: nlQuery,
            visualization: {
              template,
              ...(typeof existingTitle === 'string' && existingTitle
                ? { title: existingTitle }
                : {}),
            },
            esql: esqlQuery ?? '',
          };
        } else {
          const parsedExistingConfig = getExistingLensConfig(existingData);
          const existingConfig = parsedExistingConfig
            ? JSON.stringify(parsedExistingConfig)
            : undefined;
          const { selectedChartType, validatedConfig, esqlQuery, timeRange } =
            await buildLensConfig({
              nlQuery,
              index,
              chartType,
              esql,
              existingConfig,
              parsedExistingConfig,
              modelProvider,
              logger,
              events,
              esClient,
            });
          visualizationData = {
            renderer: 'lens',
            query: nlQuery,
            visualization: validatedConfig,
            chart_type: selectedChartType,
            esql: esqlQuery,
            ...(timeRange && { time_range: timeRange }),
          };
        }

        // Step 4: Persist as an attachment so the agent can render it inline
        // (via <render_attachment>) and update it later by id.
        const description = `Visualization: ${nlQuery.slice(0, 50)}${
          nlQuery.length > 50 ? '...' : ''
        }`;
        let resultAttachmentId: string;
        let resultVersion: number | undefined;
        try {
          if (attachmentId) {
            const updated = await attachments.update(
              attachmentId,
              {
                data: visualizationData,
                description,
              },
              // The agent authored this change; clients (e.g. dashboard panels)
              // filter round attachment refs on the agent actor.
              ATTACHMENT_REF_ACTOR.agent
            );
            resultAttachmentId = attachmentId;
            resultVersion = updated?.current_version;
            logger.debug(
              `Updated visualization attachment ${attachmentId} to version ${resultVersion ?? 1}`
            );
          } else {
            const newAttachment = await attachments.add(
              {
                type: VISUALIZATION_ATTACHMENT_TYPE,
                data: visualizationData,
                description,
              },
              ATTACHMENT_REF_ACTOR.agent
            );
            resultAttachmentId = newAttachment.id;
            resultVersion = newAttachment.current_version;
            logger.debug(`Created new visualization attachment ${newAttachment.id}`);
          }
        } catch (attachmentError) {
          // Persistence failure is surfaced rather than swallowed: without an
          // attachment the agent cannot render the visualization inline or
          // update it later, so returning a "success" result would mislead it.
          const message =
            attachmentError instanceof Error ? attachmentError.message : String(attachmentError);
          logger.error(`Failed to persist visualization attachment: ${message}`);
          return {
            results: [
              {
                type: ToolResultType.error,
                data: {
                  message: `Failed to save visualization: ${message}`,
                  metadata: { nlQuery, esql, renderer, chartType },
                },
              },
            ],
          };
        }

        // Build the tool result from the attachment data, minus the echoed
        // natural-language `query` (the model already has it; the result type
        // does not carry it).
        const { query: _query, ...visualizationResult } = visualizationData;

        return {
          results: [
            {
              type: ToolResultType.visualization,
              tool_result_id: getToolResultId(),
              data: {
                ...visualizationResult,
                attachment_id: resultAttachmentId,
                ...(resultVersion !== undefined && { version: resultVersion }),
              },
            },
          ],
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        logger.error(`Error in create_visualization tool: ${message}`);
        // Index auto-discovery only runs (and can only fail) when no `index` was
        // passed; that failure almost always means the referenced fields are not
        // grounded. Surface a concise, actionable next step at the top instead of
        // the deeply-nested "Failed to…: Failed to…: Could not discover…" chain.
        const isIndexDiscoveryFailure = !index && /suitable index/i.test(message);
        const userMessage = isIndexDiscoveryFailure
          ? `Could not find an index matching the requested fields. Discover the target index and verify the referenced fields exist (e.g. list indices and inspect the mapping), then retry create_visualization with an explicit "index". Details: ${message}`
          : `Failed to ${attachmentId ? 'update' : 'create'} visualization: ${message}`;
        return {
          results: [
            {
              type: ToolResultType.error,
              data: {
                message: userMessage,
                metadata: { nlQuery, esql, renderer: requestedRenderer, chartType },
              },
            },
          ],
        };
      }
    },
  };
};
