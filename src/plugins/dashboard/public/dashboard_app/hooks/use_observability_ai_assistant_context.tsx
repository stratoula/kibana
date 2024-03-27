/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { ObservabilityAIAssistantPublicStart } from '@kbn/observability-ai-assistant-plugin/public';
import { useEffect } from 'react';
import type { Embeddable } from '@kbn/embeddable-plugin/public';
import type { ESQLSearchReponse } from '@kbn/es-types';
import { esFieldTypeToKibanaFieldType } from '@kbn/field-types';
import type { ISearchStart } from '@kbn/data-plugin/public';
import { ESQL_SEARCH_STRATEGY } from '@kbn/data-plugin/common';
import {
  LensConfigBuilder,
  type LensConfig,
  type LensMetricConfig,
  type LensPieConfig,
  type LensGaugeConfig,
  type LensXYConfig,
  type LensHeatmapConfig,
  type LensMosaicConfig,
  type LensRegionMapConfig,
  type LensTableConfig,
  type LensTagCloudConfig,
  type LensTreeMapConfig,
  LensDataset,
} from '@kbn/lens-embeddable-utils/config_builder';
import { lastValueFrom } from 'rxjs';
import type { DataViewsPublicPluginStart } from '@kbn/data-views-plugin/public';
import { LensEmbeddableInput } from '@kbn/lens-plugin/public';
import type { AwaitingDashboardAPI } from '../../dashboard_container';

const chartTypes = [
  'xy',
  'pie',
  'heatmap',
  'metric',
  'gauge',
  'donut',
  'mosaic',
  'regionmap',
  'table',
  'tagcloud',
  'treemap',
] as const;

async function getColumns({
  esqlQuery,
  search,
  signal,
}: {
  esqlQuery: string;
  search: ISearchStart;
  signal: AbortSignal;
}): Promise<
  Array<{
    columnId: string;
    fieldName: string;
    meta: {
      type: string;
    };
    inMetricDimension: boolean;
  }>
> {
  const response = await lastValueFrom(
    search.search(
      {
        params: {
          query: `${esqlQuery} | LIMIT 0`,
        },
      },
      {
        abortSignal: signal,
        strategy: ESQL_SEARCH_STRATEGY,
      }
    )
  );

  const columns =
    (response.rawResponse as unknown as ESQLSearchReponse).columns?.map(({ name, type }) => {
      const kibanaType = esFieldTypeToKibanaFieldType(type);
      const column = {
        columnId: name,
        fieldName: name,
        meta: { type: kibanaType },
        inMetricDimension: kibanaType === 'number',
      };

      return column;
    }) ?? [];

  return columns;
}

export function useObservabilityAIAssistantContext({
  observabilityAIAssistant,
  dashboardAPI,
  search,
  dataViews,
}: {
  observabilityAIAssistant: ObservabilityAIAssistantPublicStart | undefined;
  dashboardAPI: AwaitingDashboardAPI;
  search: ISearchStart;
  dataViews: DataViewsPublicPluginStart;
}) {
  useEffect(() => {
    if (!observabilityAIAssistant) {
      return;
    }

    const {
      service: { setScreenContext },
      createScreenContextAction,
    } = observabilityAIAssistant;

    return setScreenContext({
      screenDescription:
        'The user is looking at the dashboard app. Here they can add visualizations to a dashboard and save them',
      actions: dashboardAPI
        ? [
            createScreenContextAction(
              {
                name: 'add_to_dashboard',
                description:
                  'Add an ES|QL visualization to the current dashboard. Pick a single chart type, and based on the chart type, the corresponding key for `layers`. E.g., when you select type:metric, fill in only layers.metric.',
                parameters: {
                  type: 'object',
                  properties: {
                    esql: {
                      type: 'object',
                      properties: {
                        query: {
                          type: 'string',
                          description:
                            'The ES|QL query for this visualization. Use the "query" function to generate ES|QL first and then add it here.',
                        },
                      },
                      required: ['query'],
                    },
                    type: {
                      type: 'string',
                      description: 'The type of chart',
                      enum: chartTypes,
                    },
                    layers: {
                      type: 'object',
                      properties: {
                        xy: {
                          type: 'object',
                          properties: {
                            xAxis: {
                              type: 'string',
                            },
                            yAxis: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                              enum: ['line', 'bar', 'area'],
                            },
                          },
                        },
                        donut: {
                          type: 'object',
                          properties: {
                            breakdown: {
                              type: 'string',
                            },
                          },
                        },
                        metric: {
                          type: 'object',
                        },
                        gauge: {
                          type: 'object',
                        },
                        pie: {
                          type: 'object',
                          properties: {
                            breakdown: {
                              type: 'string',
                            },
                          },
                        },
                        heatmap: {
                          type: 'object',
                          properties: {
                            xAxis: {
                              type: 'string',
                            },
                            breakdown: {
                              type: 'string',
                            },
                          },
                          required: ['xAxis'],
                        },
                        mosaic: {
                          type: 'object',
                          properties: {
                            breakdown: {
                              type: 'string',
                            },
                          },
                          required: ['breakdown'],
                        },
                        regionmap: {
                          type: 'object',
                          properties: {
                            breakdown: {
                              type: 'string',
                            },
                          },
                          required: ['breakdown'],
                        },
                        table: {
                          type: 'object',
                        },
                        tagcloud: {
                          type: 'object',
                          properties: {
                            breakdown: {
                              type: 'string',
                            },
                          },
                          required: ['breakdown'],
                        },
                        treemap: {
                          type: 'object',
                          properties: {
                            breakdown: {
                              type: 'string',
                            },
                          },
                        },
                      },
                    },
                    title: {
                      type: 'string',
                      description: 'An optional title for the visualization.',
                    },
                  },
                  required: ['esql', 'type'],
                } as const,
              },
              async ({ args, signal }) => {
                const {
                  title = '',
                  type: chartType = 'xy',
                  layers,
                  esql: { query },
                } = args;

                const [columns] = await Promise.all([
                  getColumns({
                    search,
                    esqlQuery: query,
                    signal,
                  }),
                ]);

                const configBuilder = new LensConfigBuilder(dataViews);

                let config: LensConfig;

                const firstMetricColumn = columns.find(
                  (column) => column.inMetricDimension
                )?.columnId;

                const dataset: LensDataset = {
                  esql: query,
                };

                switch (chartType) {
                  default:
                  case 'xy':
                    const xyConfig: LensXYConfig = {
                      chartType: 'xy',
                      layers: [
                        {
                          seriesType: layers?.xy?.type || 'line',
                          type: 'series',
                          xAxis: layers?.xy?.xAxis || '@timestamp',
                          yAxis: [
                            {
                              value: layers?.xy?.yAxis || firstMetricColumn!,
                            },
                          ],
                        },
                      ],
                      dataset,
                      title,
                    };
                    config = xyConfig;
                    break;

                  case 'donut':
                    const donutConfig: LensPieConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      breakdown: [layers?.donut?.breakdown!],
                      dataset,
                    };
                    config = donutConfig;
                    break;

                  case 'pie':
                    const pieConfig: LensPieConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      breakdown: [layers?.pie?.breakdown!],
                      dataset,
                    };
                    config = pieConfig;
                    break;

                  case 'metric':
                    const metricConfig: LensMetricConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      dataset,
                    };
                    config = metricConfig;
                    break;

                  case 'gauge':
                    const gaugeConfig: LensGaugeConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      dataset,
                    };
                    config = gaugeConfig;

                    break;

                  case 'heatmap':
                    const heatmapConfig: LensHeatmapConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      breakdown: layers?.heatmap?.breakdown,
                      xAxis: layers?.heatmap?.xAxis || '@timestamp',
                      dataset,
                    };
                    config = heatmapConfig;
                    break;

                  case 'mosaic':
                    const mosaicConfig: LensMosaicConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      breakdown: [layers?.mosaic?.breakdown || '@timestamp'],
                      dataset,
                    };
                    config = mosaicConfig;
                    break;

                  case 'regionmap':
                    const regionMapConfig: LensRegionMapConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      breakdown: layers?.regionmap?.breakdown!,
                      dataset,
                    };
                    config = regionMapConfig;
                    break;

                  case 'table':
                    const tableConfig: LensTableConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      dataset,
                    };
                    config = tableConfig;
                    break;

                  case 'tagcloud':
                    const tagCloudConfig: LensTagCloudConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      breakdown: layers?.tagcloud?.breakdown!,
                      dataset,
                    };
                    config = tagCloudConfig;
                    break;

                  case 'treemap':
                    const treeMapConfig: LensTreeMapConfig = {
                      chartType,
                      title,
                      value: firstMetricColumn!,
                      breakdown: [layers?.treemap?.breakdown || '@timestamp'],
                      dataset,
                    };
                    config = treeMapConfig;
                    break;
                }

                const embeddableInput = (await configBuilder.build(config, {
                  embeddable: true,
                })) as LensEmbeddableInput;

                return dashboardAPI
                  .addNewPanel<Embeddable>({
                    panelType: 'lens',
                    initialState: embeddableInput,
                  })
                  .then(() => {
                    return {
                      content: 'Visualization successfully added to dashboard',
                    };
                  })
                  .catch((error) => {
                    return {
                      content: {
                        error,
                      },
                    };
                  });
              }
            ),
          ]
        : [],
    });
  }, [observabilityAIAssistant, dashboardAPI, search, dataViews]);
}
