/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * and the Server Side Public License, v 1; you may not use this file except in
 * compliance with, at your election, the Elastic License or the Server Side
 * Public License, v 1.
 */

import { LayerValue, SeriesIdentifier } from '@elastic/charts';
import { Datatable } from '../../../expressions/public';
import { DataPublicPluginStart } from '../../../data/public';
import { ClickTriggerEvent } from '../../../charts/public';
import { ValueClickContext } from '../../../embeddable/public';
import { BucketColumns } from '../types';

export const canFilter = async (
  event: ClickTriggerEvent | null,
  actions: DataPublicPluginStart['actions']
): Promise<boolean> => {
  if (!event) {
    return false;
  }
  const filters = await actions.createFiltersFromValueClickAction(event.data);
  return Boolean(filters.length);
};

export const getFilterClickData = (
  clickedLayers: LayerValue[],
  bucketColumns: Array<Partial<BucketColumns>>,
  visData: Datatable
): ValueClickContext['data']['data'] => {
  const data: ValueClickContext['data']['data'] = [];
  const matchingIndex = visData.rows.findIndex((row) =>
    clickedLayers.every((layer, index) => {
      const columnId = bucketColumns[index].id;
      if (!columnId) return;
      return row[columnId] === layer.groupByRollup;
    })
  );

  data.push(
    ...clickedLayers.map((clickedLayer, index) => ({
      column: visData.columns.findIndex((col) => col.id === bucketColumns[index].id),
      row: matchingIndex,
      value: clickedLayer.groupByRollup,
      table: visData,
    }))
  );

  return data;
};

export const getFilterEventData = (
  visData: Datatable,
  series: SeriesIdentifier
): ValueClickContext['data']['data'] => {
  return visData.columns.reduce<ValueClickContext['data']['data']>((acc, { id }, column) => {
    const value = series.key;
    const row = visData.rows.findIndex((r) => r[id] === value);
    if (row > -1) {
      acc.push({
        table: visData,
        column,
        row,
        value,
      });
    }

    return acc;
  }, []);
};
