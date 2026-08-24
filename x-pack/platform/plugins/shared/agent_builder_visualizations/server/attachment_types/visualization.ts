/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { platformCoreTools } from '@kbn/agent-builder-common';
import {
  VISUALIZATION_ATTACHMENT_TYPE,
  type VisualizationAttachmentData,
} from '@kbn/agent-builder-visualizations-common';
import type {
  AttachmentResolveContext,
  AttachmentTypeDefinition,
} from '@kbn/agent-builder-server/attachments';
import type { LensAttributes } from '@kbn/lens-embeddable-utils';
import { isSavedObjectErrorResult } from '@kbn/core/server';
import {
  withLensReferences,
  toLensApiConfig,
  toSupportedChartType,
  extractEsqlFromLens,
} from '../lens_reference';
import { visualizationAttachmentDataSchema } from './visualization_schema';

/**
 * Creates the definition for the unified `visualization` attachment type.
 *
 * This type supports both:
 * - **By-value**: consumer provides content (`data`) directly.
 * - **By-reference**: consumer provides `origin` (a saved object ID string) →
 *   `resolve()` snapshots the content once at add time.
 *
 * After creation, all attachments behave identically — the agent doesn't know
 * whether something was originally by-reference.
 */
export const createVisualizationAttachmentType = (): AttachmentTypeDefinition<
  typeof VISUALIZATION_ATTACHMENT_TYPE,
  VisualizationAttachmentData
> => {
  return {
    id: VISUALIZATION_ATTACHMENT_TYPE,

    validate: (input) => {
      const parseResult = visualizationAttachmentDataSchema.safeParse(input);
      if (parseResult.success) {
        return { valid: true, data: parseResult.data };
      }
      return { valid: false, error: parseResult.error.message };
    },

    resolve: async (
      origin: string,
      context: AttachmentResolveContext
    ): Promise<VisualizationAttachmentData | undefined> => {
      if (!context.savedObjectsClient) return undefined;

      try {
        const resolveResult = await context.savedObjectsClient.resolve('lens', origin);
        const savedObject = resolveResult.saved_object;

        if (isSavedObjectErrorResult(savedObject)) {
          return undefined;
        }

        const lensAttributes = withLensReferences(
          savedObject.attributes as LensAttributes,
          savedObject.references
        );

        const lensApiConfig = toLensApiConfig(lensAttributes);

        return {
          renderer: 'lens',
          query: origin,
          visualization: lensApiConfig as unknown as Record<string, unknown>,
          chart_type: toSupportedChartType(lensApiConfig.type),
          esql: extractEsqlFromLens(lensAttributes),
        };
      } catch {
        return undefined;
      }
    },

    format: (attachment) => ({
      getRepresentation: () => {
        const { data } = attachment;
        const kindLine =
          data.renderer === 'vega'
            ? 'Renderer: Vega'
            : data.renderer === 'custom_content'
            ? 'Renderer: Custom content (sandboxed HTML)'
            : data.chart_type
            ? `Chart type: ${data.chart_type}`
            : 'Renderer: Lens';
        const lines = [
          'Visualization attachment',
          `Query: ${data.query}`,
          kindLine,
          data.esql ? `ES|QL: ${data.esql}` : 'ES|QL: (none — static content)',
        ];
        if (data.renderer === 'custom_content') {
          const template = (data.visualization as { template?: unknown }).template;
          lines.push(
            typeof template === 'string' && template.length > 0
              ? `Template:\n\`\`\`html\n${template}\n\`\`\``
              : 'Template: (empty — no template generated yet)'
          );
        }
        return {
          type: 'text',
          value: lines.join('\n'),
        };
      },
    }),

    isReadonly: false,

    getAgentDescription: () => {
      return 'A visualization attachment contains a shared visualization payload and a renderer discriminator (lens, vega, or custom_content). The data shape is: { renderer, query (natural-language description), esql (top-level string, a sibling of visualization — use "" for static content), visualization (renderer payload: a Lens config, { spec } for vega, or { template } for custom_content), time_range? ({ from, to }) }. To create or edit a visualization attachment, prefer the create_visualization tool (pass attachment_id to edit an existing one) instead of writing attachment data by hand. Rendering it inline displays the visualization as a dynamic, interactive chart component in the conversation UI. Visualization attachments can also be added to dashboard compositions through dashboard panel-ingestion operations.';
    },

    getTools: () => [platformCoreTools.createVisualization],
  };
};
