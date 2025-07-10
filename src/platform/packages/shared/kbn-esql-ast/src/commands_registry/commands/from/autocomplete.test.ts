/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */
import { mockContext, integrations } from '../../../__tests__/tests_mocks';
import { autocomplete } from './autocomplete';
import { expectSuggestions, getFieldNamesByType } from '../../../__tests__/autocomplete';
import { ICommandCallbacks } from '../../types';
import { synth } from '../../../..';

const fromExpectSuggestions = (
  query: string,
  expectedSuggestions: string[],
  mockCallbacks?: ICommandCallbacks,
  context = mockContext
) => {
  return expectSuggestions(
    query,
    expectedSuggestions,
    context,
    'from',
    mockCallbacks,
    autocomplete
  );
};

describe('FROM Autocomplete', () => {
  let mockCallbacks: ICommandCallbacks;
  beforeEach(() => {
    jest.clearAllMocks();

    // Reset mocks before each test to ensure isolation
    mockCallbacks = {
      getByType: jest.fn(),
    };

    const expectedFields = getFieldNamesByType('any');
    (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
      expectedFields.map((name) => ({ label: name, text: name }))
    );
    mockCallbacks.getColumnsForQuery = jest
      .fn()
      .mockResolvedValue(Array.from(mockContext.fields.values()));
  });

  describe('... <sources> ...', () => {
    const visibleSources =
      mockContext.sources?.map(({ name }) => name).filter((name) => !name.startsWith('.')) || [];
    test('suggests visible indices on space', async () => {
      await fromExpectSuggestions('from /', visibleSources, mockCallbacks);
      await fromExpectSuggestions('from /index', visibleSources, mockCallbacks);
    });

    test("doesn't create suggestions after an open quote", async () => {
      await fromExpectSuggestions('FROM " /"', []);
      await fromExpectSuggestions('FROM "/"', []);
    });

    test('does create suggestions after a closed quote', async () => {
      await fromExpectSuggestions('FROM "lolz", /', visibleSources, mockCallbacks);
    });

    test('doesnt suggest sources twice', async () => {
      await fromExpectSuggestions(
        'from index, /',
        visibleSources.filter((i) => i !== 'index'),
        mockCallbacks
      );
    });

    test('suggests comma or pipe after complete index name', async () => {
      const suggestions = await autocomplete(
        'from index ',
        synth.cmd`from index `,
        mockCallbacks,
        mockContext
      );
      expect(suggestions.map(({ label }) => label)).toContain('|');
      expect(suggestions.map(({ label }) => label)).toContain(',');

      const suggestions2 = await autocomplete(
        'from index, "my-index[quoted]" ',
        synth.cmd`from index, "my-index[quoted]" `,
        mockCallbacks,
        mockContext
      );
      expect(suggestions2.map(({ label }) => label)).toContain(',');
      expect(suggestions2.map(({ label }) => label)).toContain('|');
    });

    test('can suggest integration data sources', async () => {
      const indexes =
        mockContext.sources?.map(({ name }) => name).filter((name) => !name.startsWith('.')) || [];
      const sources = indexes.map((name) => ({
        name,
        type: 'Index',
        hidden: false,
      }));
      const integrationSources = integrations.map((name) => ({
        name,
        type: 'Integration',
        hidden: false,
      }));
      const dataSources = sources.concat(integrationSources);
      const expectedSuggestions = dataSources.map(({ name }) => name).sort();
      const mockContextWithSources = {
        ...mockContext,
        sources: dataSources,
      };

      await fromExpectSuggestions(
        'from /',
        expectedSuggestions,
        mockCallbacks,
        mockContextWithSources
      );
      await fromExpectSuggestions(
        'FROM /',
        expectedSuggestions,
        mockCallbacks,
        mockContextWithSources
      );
      await fromExpectSuggestions(
        'FROM a,/',
        expectedSuggestions.filter((i) => i !== 'a'),
        mockCallbacks,
        mockContextWithSources
      );
      await fromExpectSuggestions(
        'from a, /',
        expectedSuggestions.filter((i) => i !== 'a'),
        mockCallbacks,
        mockContextWithSources
      );
      await fromExpectSuggestions(
        'from *,/',
        expectedSuggestions,
        mockCallbacks,
        mockContextWithSources
      );
    });
  });
});
