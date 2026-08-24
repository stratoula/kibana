/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { CUSTOM_CONTENT_MAX_TEMPLATE_BYTES } from '@kbn/custom-content-common';
import type { ModelProvider } from '@kbn/agent-builder-server';
import { createCustomContentTemplateResolver } from './custom_content_resolver';

const mockChatComplete = jest.fn();

const modelProvider = {
  getDefaultModel: jest.fn().mockResolvedValue({
    inferenceClient: { chatComplete: mockChatComplete },
  }),
} as unknown as ModelProvider;

const sample = {
  columns: [
    { name: 'category', type: 'keyword' },
    { name: 'revenue', type: 'double' },
  ],
  rows: [
    ['shoes', 100],
    ['hats', 50],
  ],
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('createCustomContentTemplateResolver — system prompt selection', () => {
  const resolve = createCustomContentTemplateResolver({ modelProvider });

  it('uses the Liquid system prompt when a sample is provided', async () => {
    mockChatComplete.mockResolvedValue({ content: '<div>{{ row["revenue"].value }}</div>' });

    await resolve({ prompt: 'Show revenue by category', sample });

    const systemArg: string = mockChatComplete.mock.calls[0][0].system;
    expect(systemArg).toContain('Liquid template syntax');
    expect(systemArg).not.toContain('Output ONLY valid HTML');
  });

  it('uses the Liquid system prompt when hasQuery is true and no sample is provided', async () => {
    mockChatComplete.mockResolvedValue({ content: '<div>ok</div>' });

    await resolve({
      prompt: 'Change the colors',
      existingTemplate: '<div>{{ row["x"].value }}</div>',
      hasQuery: true,
    });

    const systemArg: string = mockChatComplete.mock.calls[0][0].system;
    expect(systemArg).toContain('Liquid template syntax');
    expect(systemArg).not.toContain('Output ONLY valid HTML');
  });

  it('uses the static system prompt when neither sample nor hasQuery is set', async () => {
    mockChatComplete.mockResolvedValue({ content: '<div>hello</div>' });

    await resolve({ prompt: 'Show a KPI card' });

    const systemArg: string = mockChatComplete.mock.calls[0][0].system;
    expect(systemArg).toContain('Output ONLY valid HTML');
    expect(systemArg).not.toContain('Liquid template syntax');
  });

  it('includes the sample schema and rows in the user message', async () => {
    mockChatComplete.mockResolvedValue({ content: '<div>ok</div>' });

    await resolve({ prompt: 'Show revenue by category', sample });

    const userContent: string = mockChatComplete.mock.calls[0][0].messages[0].content;
    expect(userContent).toContain('category (keyword)');
    expect(userContent).toContain('revenue (double)');
    expect(userContent).toContain('shoes | 100');
  });

  it('asks to preserve the existing template layout on edits', async () => {
    mockChatComplete.mockResolvedValue({ content: '<div>ok</div>' });

    await resolve({
      prompt: 'Make it red',
      sample,
      existingTemplate: '<div>{{ row["revenue"].value }}</div>',
    });

    const userContent: string = mockChatComplete.mock.calls[0][0].messages[0].content;
    expect(userContent).toContain('Current template:');
    expect(userContent).toContain('Preserve the overall layout');
  });
});

describe('createCustomContentTemplateResolver — output validation', () => {
  const resolve = createCustomContentTemplateResolver({ modelProvider });

  it('returns the template when the LLM output is valid HTML', async () => {
    mockChatComplete.mockResolvedValue({ content: '<div>hello</div>' });

    const result = await resolve({ prompt: 'Show a KPI' });

    expect(result).toBe('<div>hello</div>');
  });

  it('throws when the LLM output contains a <script> tag', async () => {
    mockChatComplete.mockResolvedValue({
      content: '<html><body><script>alert(1)</script></body></html>',
    });

    await expect(resolve({ prompt: 'Show a KPI' })).rejects.toThrow(
      'Generated template was rejected: contains a <script> tag.'
    );
  });

  it('throws when the LLM output exceeds the byte limit', async () => {
    const oversized = 'a'.repeat(CUSTOM_CONTENT_MAX_TEMPLATE_BYTES + 1);
    mockChatComplete.mockResolvedValue({ content: oversized });

    await expect(resolve({ prompt: 'Show a KPI' })).rejects.toThrow(
      `Generated template was rejected: exceeds the ${CUSTOM_CONTENT_MAX_TEMPLATE_BYTES}-byte limit.`
    );
  });

  it('detects <SCRIPT> tags case-insensitively', async () => {
    mockChatComplete.mockResolvedValue({
      content: '<SCRIPT type="text/javascript">doEvil()</SCRIPT>',
    });

    await expect(resolve({ prompt: 'Show a KPI' })).rejects.toThrow(
      'Generated template was rejected: contains a <script> tag.'
    );
  });

  it('strips markdown code fences before storing the template', async () => {
    mockChatComplete.mockResolvedValue({
      content: '```html\n<div>hello</div>\n```',
    });

    const result = await resolve({ prompt: 'Show a KPI' });

    expect(result).toBe('<div>hello</div>');
    expect(result).not.toContain('```');
  });
});
