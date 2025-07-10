/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */
import { mockContext } from '../../../__tests__/tests_mocks';
import { autocomplete } from './autocomplete';
import {
  expectSuggestions,
  getFieldNamesByType,
  getFunctionSignaturesByReturnType,
} from '../../../__tests__/autocomplete';
import { ICommandCallbacks } from '../../types';
import { Location } from '../../types';
import { ESQL_NUMBER_TYPES, ESQL_STRING_TYPES } from '../../../definitions/types';
import { synth } from '../../../..';

const allEvalFns = getFunctionSignaturesByReturnType(Location.WHERE, 'any', {
  scalar: true,
});

const allEVALForStatsFunctions = getFunctionSignaturesByReturnType(
  Location.STATS,
  'any',
  {
    scalar: true,
    grouping: false,
  },
  undefined,
  undefined,
  'by'
);

const allAggFunctions = getFunctionSignaturesByReturnType(Location.STATS, 'any', {
  agg: true,
});

const allGroupingFunctions = getFunctionSignaturesByReturnType(
  Location.STATS,
  'any',
  {
    grouping: true,
  },
  undefined,
  undefined,
  'by'
);

export const EXPECTED_FOR_EMPTY_EXPRESSION = [
  ' = ',
  ...allAggFunctions,
  ...allGroupingFunctions,
  ...allEVALForStatsFunctions,
];

const EMPTY_WHERE_SUGGESTIONS = [...getFieldNamesByType('any'), ...allEvalFns];

const expectedFieldSuggestions = getFieldNamesByType('any');
const expectedFunctionSuggestions = getFunctionSignaturesByReturnType(Location.SORT, 'any', {
  scalar: true,
});

export const EXPECTED_FIELD_AND_FUNCTION_SUGGESTIONS = [
  ...expectedFieldSuggestions,
  ...expectedFunctionSuggestions,
];

const forkExpectSuggestions = (
  query: string,
  expectedSuggestions: string[],
  mockCallbacks?: ICommandCallbacks,
  context = mockContext
) => {
  return expectSuggestions(
    query,
    expectedSuggestions,
    context,
    'fork',
    mockCallbacks,
    autocomplete
  );
};

describe('FORK Autocomplete', () => {
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
  test('suggests new branch on empty command', async () => {
    await forkExpectSuggestions('FROM a | FORK ', ['($0)'], mockCallbacks);
    await forkExpectSuggestions('FROM a | fork ', ['($0)'], mockCallbacks);
  });

  test('suggests pipe and new branch after complete branch', async () => {
    await forkExpectSuggestions('FROM a | FORK (LIMIT 100) ', ['($0)'], mockCallbacks);
    await forkExpectSuggestions(
      'FROM a | FORK (LIMIT 100) (SORT keywordField ASC) ',
      ['($0)', '| '],
      mockCallbacks
    );
  });

  describe('(COMMAND ... | COMMAND ...)', () => {
    const FORK_SUBCOMMANDS = [
      'WHERE ',
      'SORT ',
      'LIMIT ',
      'DISSECT ',
      'STATS ',
      'EVAL ',
      'GROK ',
      'CHANGE_POINT ',
      'COMPLETION ',
      'MV_EXPAND ',
      'DROP ',
      'ENRICH ',
      'KEEP ',
      'RENAME ',
      'SAMPLE ',
      'LOOKUP JOIN ',
    ];

    test('suggests FORK sub commands in an open branch', async () => {
      await forkExpectSuggestions('FROM a | FORK (', FORK_SUBCOMMANDS, mockCallbacks);
      await forkExpectSuggestions('FROM a | FORK (WHERE 1) (', FORK_SUBCOMMANDS, mockCallbacks);
    });

    describe('delegation to subcommands', () => {
      test('where', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (WHERE ',
          EMPTY_WHERE_SUGGESTIONS,
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (WHERE key',
          EMPTY_WHERE_SUGGESTIONS,
          mockCallbacks
        );
      });

      test('limit', async () => {
        await forkExpectSuggestions('FROM a | FORK (LIMIT /)', ['10 ', '100 ', '1000 ']);
      });

      test('sort', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (SORT ',
          EXPECTED_FIELD_AND_FUNCTION_SUGGESTIONS,
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (SORT integerField )',
          ['ASC', 'DESC', ', ', '| ', 'NULLS FIRST', 'NULLS LAST'],
          mockCallbacks
        );
      });

      test('dissect', async () => {
        const expectedFields = getFieldNamesByType(ESQL_STRING_TYPES);
        (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
          expectedFields.map((name) => ({ label: name, text: name }))
        );
        await forkExpectSuggestions(
          'FROM a | FORK (DISSECT ',
          expectedFields.map((name) => `${name} `),
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (DISSECT keywordField ',
          ['"%{firstWord}" '],
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (DISSECT keywordField "" ',
          ['APPEND_SEPARATOR = ', '| '],
          mockCallbacks
        );
      });

      test('keep', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (KEEP ',
          getFieldNamesByType('any'),
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (KEEP integerField ',
          [',', '| '],
          mockCallbacks
        );
      });

      test('drop', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (DROP ',
          getFieldNamesByType('any'),
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (DROP integerField ',
          [',', '| '],
          mockCallbacks
        );
      });

      test('mv_expand', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (MV_EXPAND ',
          getFieldNamesByType('any'),
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (MV_EXPAND integerField ',
          ['| '],
          mockCallbacks
        );
      });

      test('sample', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (SAMPLE ',
          ['.001 ', '.01 ', '.1 '],
          mockCallbacks
        );
        await forkExpectSuggestions('FROM a | FORK (SAMPLE 0.01 ', ['| '], mockCallbacks);
      });

      test('rename', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (RENAME ',
          [' = ', ...getFieldNamesByType('any')],
          mockCallbacks
        );
        await forkExpectSuggestions('FROM a | FORK (RENAME textField ', ['AS '], mockCallbacks);
        await forkExpectSuggestions('FROM a | FORK (RENAME field ', ['= '], mockCallbacks);
      });

      test('change_point', async () => {
        const expectedFields = getFieldNamesByType(ESQL_NUMBER_TYPES);
        (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
          expectedFields.map((name) => ({ label: name, text: name }))
        );
        await forkExpectSuggestions(
          `FROM a | FORK (CHANGE_POINT `,
          getFieldNamesByType(ESQL_NUMBER_TYPES),
          mockCallbacks
        );
        await forkExpectSuggestions(
          `FROM a | FORK (CHANGE_POINT value `,
          ['ON ', 'AS ', '| '],
          mockCallbacks
        );
        const allFields = getFieldNamesByType('any');
        (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
          allFields.map((name) => ({ label: name, text: name }))
        );
        await forkExpectSuggestions(
          `FROM a | FORK (CHANGE_POINT value on `,
          getFieldNamesByType('any'),
          mockCallbacks
        );
      });

      test('lookup join after command name', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (LOOKUP JOIN ',
          [
            'join_index ',
            'join_index_with_alias ',
            'lookup_index ',
            'join_index_alias_1 $0',
            'join_index_alias_2 $0',
          ],
          mockCallbacks
        );
      });

      describe('stats', () => {
        it('suggests for empty expression', async () => {
          await forkExpectSuggestions(
            'FROM a | FORK (STATS ',
            EXPECTED_FOR_EMPTY_EXPRESSION,
            mockCallbacks
          );
          await forkExpectSuggestions(
            'FROM a | FORK (STATS AVG(integerField), ',
            EXPECTED_FOR_EMPTY_EXPRESSION,
            mockCallbacks
          );
        });

        it('supports STATS ... WHERE', async () => {
          await forkExpectSuggestions(
            'FROM a | FORK (STATS AVG(integerField) WHERE integerField )',
            [
              ...getFunctionSignaturesByReturnType(
                Location.STATS_WHERE,
                'any',
                { operators: true },
                ['integer']
              ),
            ],
            mockCallbacks
          );
        });
      });

      describe('eval', () => {
        it('suggests for empty expression', async () => {
          const emptyExpressionSuggestions = [
            ' = ',
            ...getFieldNamesByType('any'),
            ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
          ];
          await forkExpectSuggestions(
            'FROM a | FORK (EVAL ',
            emptyExpressionSuggestions,
            mockCallbacks
          );
          await forkExpectSuggestions(
            'FROM a | FORK (EVAL ACOS(integerField), ',
            emptyExpressionSuggestions,
            mockCallbacks
          );
        });
      });

      it('suggests pipe after complete subcommands', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (WHERE keywordField IS NOT NULL  ',
          ['| ', 'AND $0', 'OR $0'],
          mockCallbacks
        );
        await forkExpectSuggestions('FROM a | FORK (LIMIT 1234 ', ['| '], mockCallbacks);
      });

      it('suggests FORK subcommands after in-branch pipe', async () => {
        await forkExpectSuggestions(
          'FROM a | FORK (LIMIT 1234 | ',
          FORK_SUBCOMMANDS,
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (WHERE keywordField IS NULL | LIMIT 1234 | ',
          FORK_SUBCOMMANDS,
          mockCallbacks
        );
        await forkExpectSuggestions(
          'FROM a | FORK (SORT longField ASC NULLS LAST) (WHERE keywordField IS NULL | LIMIT 1234 | ',
          FORK_SUBCOMMANDS,
          mockCallbacks
        );
      });
    });

    describe('user-defined columns', () => {
      it('suggests user-defined columns from earlier in this branch', async () => {
        const suggestions = await autocomplete(
          'FROM a | FORK (EVAL col0 = 1 | EVAL var0 = 2 | WHERE /)',
          synth.cmd`FORK (EVAL col0 = 1 | EVAL var0 = 2 | WHERE `,
          mockCallbacks,
          mockContext
        );
        expect(suggestions.map(({ label }) => label)).toContain('col0');
        expect(suggestions.map(({ label }) => label)).toContain('var0');
      });

      it('does NOT suggest user-defined columns from another branch', async () => {
        const suggestions = await autocomplete(
          'FROM a | FORK (EVAL var1 = 1) (WHERE ',
          synth.cmd`FORK (EVAL var1 = 1) (WHERE `,
          mockCallbacks,
          mockContext
        );
        expect(suggestions.map(({ label }) => label)).not.toContain('var1');
      });

      it('suggests user-defined columns from all branches after FORK', async () => {
        const suggestions = await autocomplete(
          'FROM a | FORK (EVAL col0 = 1) (EVAL var0 = 2) | WHERE ',
          synth.cmd`FORK (EVAL col0 = 1) (EVAL var0 = 2) | WHERE `,
          mockCallbacks,
          mockContext
        );
        expect(suggestions.map(({ label }) => label)).not.toContain('col0');
        expect(suggestions.map(({ label }) => label)).not.toContain('var0');
      });
    });
  });
});
