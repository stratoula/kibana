/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import Fs from 'fs';
import { keyBy, mapValues, once, pick } from 'lodash';
import pLimit from 'p-limit';
import Path from 'path';
import { lastValueFrom, Observable } from 'rxjs';
import { promisify } from 'util';
import { esFieldTypeToKibanaFieldType } from '@kbn/field-types';
import type { ESQLSearchReponse } from '@kbn/es-types';
import type { FunctionRegistrationParameters } from '..';
import {
  ChatCompletionChunkEvent,
  StreamingChatResponseEventType,
} from '../../../common/conversation_complete';
import { FunctionVisibility, MessageRole } from '../../../common/types';
import { concatenateChatCompletionChunks } from '../../../common/utils/concatenate_chat_completion_chunks';
import { emitWithConcatenatedMessage } from '../../../common/utils/emit_with_concatenated_message';
import { correctCommonEsqlMistakes } from './correct_common_esql_mistakes';

enum ChartType {
  XY = 'XY',
  Bar = 'Bar',
  Line = 'Line',
  Donut = 'Donut',
  Heatmap = 'Heat map',
  Treemap = 'Treemap',
  Tagcloud = 'Tag cloud',
  Waffle = 'Waffle',
}

const readFile = promisify(Fs.readFile);
const readdir = promisify(Fs.readdir);

const loadSystemMessage = once(async () => {
  const data = await readFile(Path.join(__dirname, './system_message.txt'));
  return data.toString('utf-8');
});

const loadEsqlDocs = once(async () => {
  const dir = Path.join(__dirname, './esql_docs');
  const files = (await readdir(dir)).filter((file) => Path.extname(file) === '.txt');

  if (!files.length) {
    return {};
  }

  const limiter = pLimit(10);
  return keyBy(
    await Promise.all(
      files.map((file) =>
        limiter(async () => {
          const data = (await readFile(Path.join(dir, file))).toString('utf-8');
          const filename = Path.basename(file, '.txt');

          const keyword = filename
            .replace('esql-', '')
            .replace('agg-', '')
            .replaceAll('-', '_')
            .toUpperCase();

          return {
            keyword: keyword === 'STATS_BY' ? 'STATS' : keyword,
            data,
          };
        })
      )
    ),
    'keyword'
  );
});

export function registerEsqlFunction({
  client,
  registerFunction,
  resources,
}: FunctionRegistrationParameters) {
  registerFunction(
    {
      name: 'visualize_query',
      description:
        'Use this function to visualize charts for ES|QL queries. The visualisation is displayed to the user above your reply, DO NOT try to generate or display an image yourself.',
      descriptionForUser: 'Use this function to visualize charts for ES|QL queries.',
      parameters: {
        type: 'object',
        additionalProperties: true,
        properties: {
          query: {
            type: 'string',
          },
          chartType: {
            type: 'string',
          },
        },
        required: ['query'],
      } as const,
      contexts: ['core'],
    },
    async ({ arguments: { query }, connectorId, messages }, signal) => {
      // With limit 0 I get only the columns, it is much more performant
      const performantQuery = `${query} | limit 0`;
      const coreContext = await resources.context.core;

      const response = (await (
        await coreContext
      ).elasticsearch.client.asCurrentUser.transport.request({
        method: 'POST',
        path: '_query',
        body: {
          query: performantQuery,
        },
      })) as ESQLSearchReponse;
      const columns =
        response.columns?.map(({ name, type }) => ({
          id: name,
          name,
          meta: { type: esFieldTypeToKibanaFieldType(type) },
        })) ?? [];
      return { content: columns };
    }
  );

  registerFunction(
    {
      name: 'esql',
      contexts: ['core'],
      description: `This function answers ES|QL related questions including query generation and syntax/command questions.`,
      visibility: FunctionVisibility.System,
      parameters: {
        type: 'object',
        additionalProperties: false,
        properties: {
          switch: {
            type: 'boolean',
          },
        },
      } as const,
    },
    async ({ messages, connectorId }, signal) => {
      const [systemMessage, esqlDocs] = await Promise.all([loadSystemMessage(), loadEsqlDocs()]);

      const withEsqlSystemMessage = (message?: string) => [
        {
          '@timestamp': new Date().toISOString(),
          message: { role: MessageRole.System, content: `${systemMessage}\n${message ?? ''}` },
        },
        ...messages.slice(1),
      ];

      const source$ = (
        await client.chat({
          connectorId,
          messages: withEsqlSystemMessage(
            `Use the classify_esql function to classify the user's request
            and get more information about specific functions and commands
            you think are candidates for answering the question.
            
              
            Examples for functions and commands:
            Do you need to group data? Request \`STATS\`.
            Extract data? Request \`DISSECT\` AND \`GROK\`.
            Convert a column based on a set of conditionals? Request \`EVAL\` and \`CASE\`.

            Examples for determining whether the user wants to visualize a query:
            - "Show me the avg of x"
            - "Give me the results of y"
            - "Display the sum of z"
            - "I want to visualize ..."
            - "I want to display the avg of ..."
            - I want a chart ..."

            Examples for determining whether the user does not want to visualize a query:
            - "I want a query that ..."
            - "... Just show me the query"
            - "Create a query that ..."`
          ),
          signal,
          functions: [
            {
              name: 'classify_esql',
              description: `Use this function to determine:
              - what ES|QL functions and commands are candidates for answering the user's question
              - whether the user has requested a query, and if so, it they want it to be visualized, or just shown.
              `,
              parameters: {
                type: 'object',
                properties: {
                  commands: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                    description: 'A list of processing or source commands',
                  },
                  functions: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                    description: 'A list of functions.',
                  },
                  execute: {
                    type: 'boolean',
                    description:
                      'Whether the user wants to visualize a query (true) or just wants the query to be displayed (false)',
                  },
                  chartType: {
                    type: 'string',
                    enum: [
                      ChartType.XY,
                      ChartType.Bar,
                      ChartType.Line,
                      ChartType.Donut,
                      ChartType.Treemap,
                      ChartType.Heatmap,
                      ChartType.Tagcloud,
                      ChartType.Waffle,
                    ],
                  },
                },
                required: ['commands', 'functions', 'execute'],
              },
            },
          ],
          functionCall: 'classify_esql',
        })
      ).pipe(concatenateChatCompletionChunks());

      const response = await lastValueFrom(source$);

      const args = JSON.parse(response.message.function_call.arguments) as {
        commands: string[];
        functions: string[];
        execute: boolean;
        chartType?: ChartType;
      };

      const keywords = args.commands.concat(args.functions).concat('SYNTAX').concat('OVERVIEW');

      const messagesToInclude = mapValues(pick(esqlDocs, keywords), ({ data }) => data);

      const esqlResponse$: Observable<ChatCompletionChunkEvent> = await client.chat({
        messages: [
          ...withEsqlSystemMessage(
            `Format every ES|QL query as Markdown:
              \`\`\`esql
              <query>
              \`\`\`

              Prefer to use commands and functions for which you have requested documentation.

              DO NOT UNDER ANY CIRCUMSTANCES use commands or functions that are not a capability of ES|QL
              as mentioned in the system message and documentation.
              
              Directive: ONLY use aggregation functions in STATS commands, and use ONLY aggregation
              functions in stats commands, NOT in SORT or EVAL.
              Rationale: Only aggregation functions are supported in STATS commands, and aggregation
              functions are only supported in STATS commands. 
              Action: Create new columns using EVAL first and then aggregate over them in STATS commands.
              Do not use aggregation functions anywhere else, such as SORT or EVAL.
              Example:
              \`\`\`esql
              EVAL is_failure_as_number = CASE(event.outcome == "failure", 1, 0)
              | STATS total_failures = SUM(is_failure_as_number) BY my_grouping_name
              \`\`\`
              
              `
          ),
          {
            '@timestamp': new Date().toISOString(),
            message: {
              role: MessageRole.Assistant,
              content: '',
              function_call: {
                name: 'get_esql_info',
                arguments: JSON.stringify(args),
                trigger: MessageRole.Assistant as const,
              },
            },
          },
          {
            '@timestamp': new Date().toISOString(),
            message: {
              role: MessageRole.User,
              name: 'get_esql_info',
              content: JSON.stringify({
                documentation: messagesToInclude,
              }),
            },
          },
        ],
        connectorId,
        signal,
      });

      return esqlResponse$.pipe((source) => {
        return new Observable<ChatCompletionChunkEvent>((subscriber) => {
          let cachedContent: string = '';
          let id: string = '';

          function includesDivider() {
            const firstDividerIndex = cachedContent.indexOf('--');
            return firstDividerIndex !== -1;
          }

          source.subscribe({
            next: (message) => {
              id = message.id;
              if (includesDivider()) {
                subscriber.next(message);
              }
              cachedContent += message.message.content || '';
            },
            complete: () => {
              if (!includesDivider()) {
                subscriber.next({
                  id,
                  message: {
                    content: cachedContent,
                  },
                  type: StreamingChatResponseEventType.ChatCompletionChunk,
                });
              }

              const esqlQuery = cachedContent.match(/```esql([\s\S]*?)```/)?.[1];
              
              if (esqlQuery && args.execute) {
                subscriber.next({
                  id,
                  message: {
                    function_call: {
                      name: 'visualize_query',
                      arguments: JSON.stringify({
                         query: esqlQuery,
                         chartType: args.chartType,
                      }),
                    },
                  },
                  type: StreamingChatResponseEventType.ChatCompletionChunk,
                });
              }

              subscriber.complete();
            },
            error: (error) => {
              subscriber.error(error);
            },
          });
        }).pipe(
          emitWithConcatenatedMessage((msg) => {
            return {
              ...msg,
              message: {
                ...msg.message,
                content: correctCommonEsqlMistakes(msg.message.content, resources.logger),
              },
            };
          })
        );
      });
    }
  );
}
