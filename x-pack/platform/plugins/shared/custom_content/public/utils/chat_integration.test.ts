/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { VISUALIZATION_ATTACHMENT_TYPE } from '@kbn/agent-builder-visualizations-common';
import {
  buildCustomContentVisualizationAttachment,
  getCustomContentAttachmentId,
} from './chat_integration';

describe('buildCustomContentVisualizationAttachment', () => {
  it('carries the panel state as a custom_content visualization attachment', () => {
    const attachment = buildCustomContentVisualizationAttachment(
      '<div>hi</div>',
      'FROM logs',
      'panel-1',
      'My panel'
    );

    expect(attachment.type).toBe(VISUALIZATION_ATTACHMENT_TYPE);
    expect(attachment.data).toEqual({
      renderer: 'custom_content',
      query: 'Custom content dashboard panel panel-1',
      visualization: { template: '<div>hi</div>', title: 'My panel' },
      esql: 'FROM logs',
    });
  });

  it('omits the title and defaults esql to an empty string', () => {
    const attachment = buildCustomContentVisualizationAttachment('', undefined, 'panel-1');

    expect(attachment.data).toEqual({
      renderer: 'custom_content',
      query: 'Custom content dashboard panel panel-1',
      visualization: { template: '' },
      esql: '',
    });
  });

  // Without a stable id each push appends a new attachment instead of replacing the panel's
  // previous snapshot, and the embeddable could no longer match agent edits back to itself.
  it('derives a stable id from the embeddable id so re-pushes replace rather than accumulate', () => {
    const first = buildCustomContentVisualizationAttachment(
      '<div>v1</div>',
      'FROM logs',
      'panel-1'
    );
    const second = buildCustomContentVisualizationAttachment(
      '<div>v2</div>',
      'FROM metrics',
      'panel-1'
    );

    expect(first.id).toBe(getCustomContentAttachmentId('panel-1'));
    expect(first.id).toBe(`${VISUALIZATION_ATTACHMENT_TYPE}-panel-1`);
    expect(second.id).toBe(first.id);
  });

  // New byte-identical attachments are deduped by content hash, so two empty drafts from
  // different panels must differ in their data, not just their ids.
  it('gives different panels different ids and per-panel unique queries', () => {
    const a = buildCustomContentVisualizationAttachment('', undefined, 'panel-1');
    const b = buildCustomContentVisualizationAttachment('', undefined, 'panel-2');

    expect(a.id).not.toBe(b.id);
    expect(a.data?.query).toBeDefined();
    expect(a.data?.query).not.toBe(b.data?.query);
  });
});
