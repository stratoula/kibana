/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { last } from 'lodash';
import moment from 'moment';
import { Datatable } from '@kbn/expressions-plugin/common';
import { type AggregateQuery, isOfAggregateQueryType } from '@kbn/es-query';
import { DataViewField } from '@kbn/data-views-plugin/public';
import { buildRangeFilter, DataViewFieldBase, RangeFilterParams } from '@kbn/es-query';
import { getIndexPatterns, getSearchService } from '../../services';
import { AggConfigSerialized } from '../../../common/search/aggs';
import { mapAndFlattenFilters } from '../../query';

interface RangeSelectDataContext {
  table: Datatable;
  column: number;
  range: number[];
  timeFieldName?: string;
  query?: AggregateQuery;
}

const getParameters = async (event: RangeSelectDataContext) => {
  const column: Record<string, any> = event.table.columns[event.column];
  // Handling of the ES|QL datatable
  if (isOfAggregateQueryType(event.query)) {
    const field = new DataViewField({
      name: column.name,
      type: column?.meta?.type ?? 'unknown',
      esTypes: column?.meta?.esType ? ([column.meta.esType] as string[]) : undefined,
      searchable: true,
      aggregatable: false,
    });

    return {
      field,
      indexPattern: undefined,
    };
  } else if ('sourceParams' in column.meta) {
    const { indexPatternId, ...aggConfigs } = column.meta.sourceParams;
    const indexPattern = await getIndexPatterns().get(indexPatternId);
    const aggConfigsInstance = getSearchService().aggs.createAggConfigs(indexPattern, [
      aggConfigs as AggConfigSerialized,
    ]);
    const aggConfig = aggConfigsInstance.aggs[0];
    const field: DataViewFieldBase = aggConfig.params.field;
    return {
      field,
      indexPattern,
    };
  } else {
    return {
      field: undefined,
      indexPattern: undefined,
    };
  }
};

export async function createFiltersFromRangeSelectAction(event: RangeSelectDataContext) {
  const column: Record<string, any> = event.table.columns[event.column];

  if (!column || !column.meta) {
    return [];
  }

  const params = await getParameters(event);

  if (!params.field || event.range.length <= 1) {
    return [];
  }

  const min = event.range[0];
  const max = last(event.range);

  if (min === max) {
    return [];
  }

  const isDate = params.field.type === 'date';

  const range: RangeFilterParams = {
    gte: isDate ? moment(min).toISOString() : min,
    lt: isDate ? moment(max).toISOString() : max,
  };

  if (isDate) {
    range.format = 'strict_date_optional_time';
  }
  return mapAndFlattenFilters([buildRangeFilter(params.field, range, params.indexPattern)]);
}
