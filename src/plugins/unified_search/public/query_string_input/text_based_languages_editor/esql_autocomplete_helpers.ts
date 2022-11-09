/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { uniq, startsWith } from 'lodash';
import { monaco } from '@kbn/monaco';
import { parse, TinymathAST, TinymathFunction, TinymathLocation } from '@kbn/tinymath';
export enum SUGGESTION_TYPE {
  FIELD = 'field',
  COMMANDS = 'commands',
  FUNCTIONS = 'functions',
}

export interface ESQLSuggestions {
  list: string[];
  type: SUGGESTION_TYPE;
  range?: monaco.IRange;
}

export const MARKER = 'ESQL_MARKER';

export const esqlSupportedAll = [
  'from',
  'stats',
  'eval',
  'sort',
  'limit',
  'where',
  'round',
  'avg',
  'max',
  'min',
  'sum',
];

export const esqlSupportedFunctions = ['round', 'avg', 'max', 'min', 'sum'];

function inLocation(cursorPosition: number, location: TinymathLocation) {
  return cursorPosition >= location.min && cursorPosition < location.max;
}

function nonNullable<T>(v: T): v is NonNullable<T> {
  return v != null;
}

export function getInfoAtZeroIndexedPosition(
  ast: TinymathAST,
  zeroIndexedPosition: number,
  parent?: TinymathFunction
): undefined | { ast: TinymathAST; parent?: TinymathFunction } {
  if (typeof ast === 'number') {
    return;
  }
  // +, -, *, and / do not have location any more
  if (ast.location && !inLocation(zeroIndexedPosition, ast.location)) {
    return;
  }
  if (ast.type === 'function') {
    const [match] = ast.args
      .map((arg) => getInfoAtZeroIndexedPosition(arg, zeroIndexedPosition, ast))
      .filter(nonNullable);
    if (match) {
      return match;
    } else if (ast.location) {
      return { ast };
    } else {
      // None of the arguments match, but we don't know the position so it's not a match
      return;
    }
  }
  return {
    ast,
    parent,
  };
}

export function getSuggestion(
  suggestion: string,
  type: SUGGESTION_TYPE,
  triggerChar: string | undefined,
  range?: monaco.IRange
): monaco.languages.CompletionItem {
  let kind: monaco.languages.CompletionItemKind = monaco.languages.CompletionItemKind.Method;
  const label: string = suggestion;
  let insertText: string | undefined;
  let insertTextRules: monaco.languages.CompletionItem['insertTextRules'];
  const detail: string = '';
  let command: monaco.languages.CompletionItem['command'];
  const sortText: string = '';
  const filterText: string = label;

  switch (type) {
    // case SUGGESTION_TYPE.FIELD:
    //   kind = monaco.languages.CompletionItemKind.Value;
    //   // Look for unsafe characters
    //   if (unquotedStringRegex.test(label)) {
    //     insertText = `'${label.replaceAll(`'`, "\\'")}'`;
    //   }
    //   break;
    case SUGGESTION_TYPE.FUNCTIONS:
      insertText = `${label}($0)`;
      insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
      kind = monaco.languages.CompletionItemKind.Method;
      break;
  }

  return {
    detail,
    kind,
    label,
    insertText: insertText ?? label,
    insertTextRules,
    command,
    additionalTextEdits: [],
    // @ts-expect-error Monaco says this type is required, but provides a default value
    range,
    sortText,
    filterText,
  };
}

export async function suggest({
  expression,
  zeroIndexedOffset,
  context,
}: {
  expression: string;
  zeroIndexedOffset: number;
  context: monaco.languages.CompletionContext;
}): Promise<ESQLSuggestions> {
  const text =
    expression.substr(0, zeroIndexedOffset) + MARKER + expression.substr(zeroIndexedOffset);

  try {
    // this should use the esql parser instead of the tiny math
    const ast = parse(text);
    const tokenInfo = getInfoAtZeroIndexedPosition(ast, zeroIndexedOffset);
    const tokenAst = tokenInfo?.ast;

    if (
      typeof tokenAst === 'object' &&
      Boolean(tokenAst.type === 'variable' || tokenAst.type === 'function')
    ) {
      const nameWithMarker = tokenAst.type === 'function' ? tokenAst.name : tokenAst.value;
      return getFunctionSuggestions(nameWithMarker.split(MARKER)[0]);
    }
  } catch (e) {
    // Fail silently
  }
  return { list: [], type: SUGGESTION_TYPE.FIELD };
}

export function getFunctionSuggestions(prefix: string) {
  return {
    list: uniq(esqlSupportedFunctions.filter((func) => startsWith(func, prefix))),
    type: SUGGESTION_TYPE.FUNCTIONS,
  };
}
