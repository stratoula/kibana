/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

/**
 * This file contains a mechanism for injecting test functions into the
 * validation tests. This allows us to use our own fixtures without relying
 * on the generated definitions provided by Elasticsearch.
 */
import {
  ESQLUserDefinedColumn,
  ESQLFieldWithMetadata,
  ICommandCallbacks,
  ISuggestionItem,
} from '../commands_registry/types';
import { Parser } from '../parser';
import type { ESQLCommand } from '../types';
import { FieldType } from '../definitions/types';
import { mockContext } from './tests_mocks';

export const expectSuggestions = async (
  query: string,
  expectedSuggestions: string[],
  context = mockContext,
  commandName: string,
  mockCallbacks: ICommandCallbacks = {},
  autocomplete: (
    arg0: string,
    arg1: ESQLCommand,
    arg2: ICommandCallbacks,
    arg3: {
      userDefinedColumns: Map<string, ESQLUserDefinedColumn[]>;
      fields: Map<string, ESQLFieldWithMetadata>;
    }
  ) => Promise<ISuggestionItem[]>
) => {
  const { root } = Parser.parse(query);
  const command = root.commands.find((cmd) => cmd.name === commandName.toLowerCase());
  if (!command) {
    throw new Error(`${commandName.toUpperCase()} command not found in the parsed query`);
  }
  const result = await autocomplete(query, command, mockCallbacks, context);

  const suggestions: string[] = [];
  result.forEach((suggestion) => {
    suggestions.push(suggestion.text);
  });
  expect(suggestions.sort()).toEqual(expectedSuggestions.sort());
};

export function getFieldNamesByType(
  _requestedType: Readonly<FieldType | 'any' | Array<FieldType | 'any'>>
) {
  const fieldsMap = mockContext.fields;
  const userDefinedColumnsMap = mockContext.userDefinedColumns;
  const fields = Array.from(fieldsMap.values());
  const userDefinedColumns = Array.from(userDefinedColumnsMap.values()).flat();
  const requestedType = Array.isArray(_requestedType) ? _requestedType : [_requestedType];
  return [...fields, ...userDefinedColumns]
    .filter(
      ({ type }) =>
        (requestedType.includes('any') || requestedType.includes(type)) && type !== 'unsupported'
    )
    .map(({ name }) => name);
}
