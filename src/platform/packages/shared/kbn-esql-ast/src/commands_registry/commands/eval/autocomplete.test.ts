/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */
import { mockContext } from '../../../__tests__/tests_mocks';
import { Location } from '../../types';
import { autocomplete } from './autocomplete';
import {
  expectSuggestions,
  getFieldNamesByType,
  getFunctionSignaturesByReturnType,
  getLiteralsByType,
} from '../../../__tests__/autocomplete';
import { ICommandCallbacks } from '../../types';
import { ESQL_COMMON_NUMERIC_TYPES } from '../../../definitions/types';
import { timeUnitsToSuggest } from '../../../definitions/constants';

const roundParameterTypes = ['double', 'integer', 'long', 'unsigned_long'] as const;

const evalExpectSuggestions = (
  query: string,
  expectedSuggestions: string[],
  mockCallbacks?: ICommandCallbacks,
  context = mockContext
) => {
  return expectSuggestions(
    query,
    expectedSuggestions,
    context,
    'eval',
    mockCallbacks,
    autocomplete
  );
};

describe('EVAL Autocomplete', () => {
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
  });
  test('empty expression', async () => {
    await evalExpectSuggestions(
      'from a | eval ',
      [
        ' = ',
        ...getFieldNamesByType('any'),
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
      ],
      mockCallbacks
    );

    await evalExpectSuggestions(
      'from a | eval col0 = /',
      [
        ...getFieldNamesByType('any'),
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
      ],
      mockCallbacks
    );

    await evalExpectSuggestions(
      'from a | eval col0 = 1, ',
      [
        ' = ',
        ...getFieldNamesByType('any'),
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
      ],
      mockCallbacks
    );

    await evalExpectSuggestions(
      'from a | eval col0 = 1, col1 = /',
      [
        ...getFieldNamesByType('any'),
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
      ],
      mockCallbacks
    );

    // Re-enable with https://github.com/elastic/kibana/issues/210639
    // await evalExpectSuggestions('from a | eval a=doubleField, /', [
    //   'col0 = ',
    //   ...getFieldNamesByType('any'),
    //   'a',
    //   ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
    // ]);
  });
  it('should suggest user defined columns', async () => {
    (mockCallbacks.getByType as jest.Mock).mockResolvedValue([
      {
        label: 'avg(doubleField)',
        text: 'avg(doubleField)',
      },
    ]);
    await evalExpectSuggestions(
      'from b | stats avg(doubleField) by keywordField | eval ',
      [
        ' = ',
        'avg(doubleField)',
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
      ],
      mockCallbacks
    );
  });

  it('after column', async () => {
    await evalExpectSuggestions(
      'from a | eval doubleField ',
      [
        ...getFunctionSignaturesByReturnType(
          Location.EVAL,
          'any',
          { operators: true, skipAssign: true },
          ['double']
        ),
      ],
      mockCallbacks
    );
  });

  test('after column after assignment', async () => {
    await evalExpectSuggestions(
      'from a | eval col = doubleField ',
      [
        ', ',
        '| ',
        ...getFunctionSignaturesByReturnType(
          Location.EVAL,
          'any',
          { operators: true, skipAssign: true, agg: false, scalar: false },
          ['double']
        ),
      ],
      mockCallbacks
    );
  });

  test('after NOT', async () => {
    const expectedFields = getFieldNamesByType('boolean');
    (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
      expectedFields.map((name) => ({ label: name, text: name }))
    );
    await evalExpectSuggestions(
      'from index | EVAL keywordField not ',
      ['LIKE $0', 'RLIKE $0', 'IN $0'],
      mockCallbacks
    );

    await evalExpectSuggestions(
      'from index | EVAL not ',
      [
        ...getFieldNamesByType('boolean'),
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'boolean', { scalar: true }),
      ],
      mockCallbacks
    );
  });

  test('with lists', async () => {
    const expectedFields = getFieldNamesByType('any');
    (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
      expectedFields.map((name) => ({ label: name, text: name }))
    );
    await evalExpectSuggestions('from index | EVAL doubleField in ', ['( $0 )'], mockCallbacks);
    await evalExpectSuggestions(
      'from index | EVAL doubleField not in /',
      ['( $0 )'],
      mockCallbacks
    );
  });

  test('after assignment', async () => {
    await evalExpectSuggestions(
      'from a | eval a=/',
      [
        ...getFieldNamesByType('any'),
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
      ],
      mockCallbacks
    );
    await evalExpectSuggestions(
      'from a | eval a=abs(doubleField), b= /',
      [
        ...getFieldNamesByType('any'),
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
      ],
      mockCallbacks
    );
  });

  test('in and around functions', async () => {
    await evalExpectSuggestions(
      'from a | eval a=round(doubleField) ',
      [
        ', ',
        '| ',
        ...getFunctionSignaturesByReturnType(
          Location.EVAL,
          'any',
          { operators: true, skipAssign: true },
          ['double', 'long']
        ),
        'IN $0',
        'IS NOT NULL',
        'IS NULL',
        'NOT IN $0',
      ],
      mockCallbacks
    );
    // const expectedFields = getFieldNamesByType(['integer', 'long']);
    // (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
    //   expectedFields.map((name) => ({ label: name, text: name }))
    // );
    // await evalExpectSuggestions(
    //   'from a | eval a=round(doubleField, ',
    //   [
    //     ...getFieldNamesByType(['integer', 'long']),
    //     ...getFunctionSignaturesByReturnType(
    //       Location.EVAL,
    //       ['integer', 'long'],
    //       { scalar: true },
    //       undefined,
    //       ['round']
    //     ),
    //   ],
    //   mockCallbacks
    // );
    // await evalExpectSuggestions(
    //   'from a | eval round(doubleField, /',
    //   [
    //     ...getFieldNamesByType(['integer', 'long']),
    //     ...getFunctionSignaturesByReturnType(
    //       Location.EVAL,
    //       ['integer', 'long'],
    //       { scalar: true },
    //       undefined,
    //       ['round']
    //     ),
    //   ],
    //   mockCallbacks
    // );
    const expectedFields = getFieldNamesByType('any');
    (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
      expectedFields.map((name) => ({ label: name, text: name }))
    );
    await evalExpectSuggestions(
      'from a | eval a=round(doubleField), ',
      [
        ' = ',
        ...getFieldNamesByType('any'),
        // Re-enable with https://github.com/elastic/kibana/issues/210639
        // 'a',
        ...getFunctionSignaturesByReturnType(Location.EVAL, 'any', { scalar: true }),
      ],
      mockCallbacks
    );
    const expectedFields2 = getFieldNamesByType(ESQL_COMMON_NUMERIC_TYPES);
    (mockCallbacks.getByType as jest.Mock).mockResolvedValue(
      expectedFields2.map((name) => ({ label: name, text: name }))
    );
    await evalExpectSuggestions(
      'from a | eval a=round(doubleField) + ',
      [
        ...getFieldNamesByType(ESQL_COMMON_NUMERIC_TYPES),
        ...getFunctionSignaturesByReturnType(Location.EVAL, ESQL_COMMON_NUMERIC_TYPES, {
          scalar: true,
        }),
      ],
      mockCallbacks
    );

    await evalExpectSuggestions(
      'from a | eval a=`any#Char$Field`+ ',
      [
        ...getFieldNamesByType(ESQL_COMMON_NUMERIC_TYPES),
        ...getFunctionSignaturesByReturnType(Location.EVAL, ESQL_COMMON_NUMERIC_TYPES, {
          scalar: true,
        }),
      ],
      mockCallbacks
    );

    await evalExpectSuggestions(
      'from a | eval a=round(doubleField), b=round(/)',
      [
        ...getFieldNamesByType(roundParameterTypes),
        ...getFunctionSignaturesByReturnType(
          Location.EVAL,
          roundParameterTypes,
          { scalar: true },
          undefined,
          ['round']
        ),
      ],
      mockCallbacks
    );
    // test that comma is correctly added to the suggestions if minParams is not reached yet
    await evalExpectSuggestions('from a | eval a=concat( /', [
      ...getFieldNamesByType(['text', 'keyword']).map((v) => `${v}, `),
      ...getFunctionSignaturesByReturnType(
        Location.EVAL,
        ['text', 'keyword'],
        { scalar: true },
        undefined,
        ['concat']
      ),
    ]);
    await evalExpectSuggestions(
      'from a | eval a=concat(textField, /',
      [
        ...getFieldNamesByType(['text', 'keyword']),
        ...getFunctionSignaturesByReturnType(
          Location.EVAL,
          ['text', 'keyword'],
          { scalar: true },
          undefined,
          ['concat']
        ),
      ],
      mockCallbacks
    );
    // test that the arg type is correct after minParams
    await evalExpectSuggestions(
      'from a | eval a=cidr_match(ipField, textField, /',
      [],
      mockCallbacks
    );
    // test that comma is correctly added to the suggestions if minParams is not reached yet
    await evalExpectSuggestions('from a | eval a=cidr_match(/', [
      ...getFieldNamesByType('ip').map((v) => `${v}, `),
      ...getFunctionSignaturesByReturnType(Location.EVAL, 'ip', { scalar: true }, undefined, [
        'cidr_match',
      ]),
    ]);
    await evalExpectSuggestions(
      'from a | eval a=cidr_match(ipField, /',
      [
        ...getFieldNamesByType(['text', 'keyword']),
        ...getFunctionSignaturesByReturnType(
          Location.EVAL,
          ['text', 'keyword'],
          { scalar: true },
          undefined,
          ['cidr_match']
        ),
      ],
      mockCallbacks
    );
  });

  test('deep function nesting', async () => {
    for (const nesting of [1, 2, 3, 4]) {
      await evalExpectSuggestions(
        `from a | eval a=${Array(nesting).fill('round(/').join('')}`,
        [
          ...getFieldNamesByType(roundParameterTypes),
          ...getFunctionSignaturesByReturnType(
            Location.EVAL,
            roundParameterTypes,
            { scalar: true },
            undefined,
            ['round']
          ),
        ],
        mockCallbacks
      );
    }
  });

  test('discards query after cursor', async () => {
    const absParameterTypes = ['double', 'integer', 'long', 'unsigned_long'] as const;

    // Smoke testing for suggestions in previous position than the end of the statement
    await evalExpectSuggestions('from a | eval col0 = abs(doubleField) / | eval abs(col0)', [
      ...getFunctionSignaturesByReturnType(
        Location.EVAL,
        'any',
        { operators: true, skipAssign: true },
        ['double']
      ),
      ', ',
      '| ',
    ]);
    await evalExpectSuggestions('from a | eval col0 = abs(b/) | eval abs(col0)', [
      ...getFieldNamesByType(absParameterTypes),
      ...getFunctionSignaturesByReturnType(
        Location.EVAL,
        absParameterTypes,
        { scalar: true },
        undefined,
        ['abs']
      ),
    ]);
  });

  test('date math', async () => {
    const dateSuggestions = timeUnitsToSuggest.map(({ name }) => name);
    // Eval bucket is not a valid expression
    await evalExpectSuggestions('from a | eval col0 = bucket(@timestamp, ', [], mockCallbacks);

    await evalExpectSuggestions(
      'from a | eval col0 = 1 ',
      [
        ', ',
        '| ',
        ...getFunctionSignaturesByReturnType(
          Location.EVAL,
          'any',
          { operators: true, skipAssign: true },
          ['integer']
        ),
      ],
      mockCallbacks
    );
    await evalExpectSuggestions('from a | eval a = 1 year /', [', ', '| ', '+ $0', '- $0']);
    await evalExpectSuggestions(
      'from a | eval col0=date_trunc(/)',
      [
        ...getLiteralsByType('time_duration').map((t) => `${t}, `),
        ...getFunctionSignaturesByReturnType(Location.EVAL, ['time_duration', 'date_period'], {
          scalar: true,
        }),
      ],
      mockCallbacks
    );
    await evalExpectSuggestions(
      'from a | eval col0=date_trunc(2 /)',
      [...dateSuggestions.map((t) => `${t}, `), ','],
      mockCallbacks
    );
  });
});
