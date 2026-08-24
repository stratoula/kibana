/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { AttachmentInput } from '@kbn/agent-builder-common/attachments';
import {
  VISUALIZATION_ATTACHMENT_TYPE,
  type VisualizationAttachmentData,
} from '@kbn/agent-builder-visualizations-common';

/**
 * Deterministic per-panel attachment id. Attachments are merged by `id` and anything without one is
 * appended, so a stable id lets a re-pushed panel snapshot replace the previous one instead of
 * accumulating duplicates — and lets the embeddable match agent edits back to its own panel.
 */
export const getCustomContentAttachmentId = (embeddableId: string) =>
  `${VISUALIZATION_ATTACHMENT_TYPE}-${embeddableId}`;

/**
 * Builds the unified visualization attachment (custom_content renderer) representing a dashboard
 * panel in chat. The agent edits it via the create_visualization tool using the attachment id.
 */
export const buildCustomContentVisualizationAttachment = (
  template: string,
  esqlQuery: string | undefined,
  embeddableId: string,
  panelTitle?: string
): AttachmentInput<typeof VISUALIZATION_ATTACHMENT_TYPE, VisualizationAttachmentData> => ({
  id: getCustomContentAttachmentId(embeddableId),
  type: VISUALIZATION_ATTACHMENT_TYPE,
  data: {
    renderer: 'custom_content',
    // Per-panel unique query: byte-identical new attachments are deduped by
    // content hash, so two empty drafts from different panels must differ.
    query: `Custom content dashboard panel ${embeddableId}`,
    visualization: { template, ...(panelTitle ? { title: panelTitle } : {}) },
    esql: esqlQuery ?? '',
  },
});
