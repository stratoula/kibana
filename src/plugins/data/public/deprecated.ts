/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/*
 * Filters:
 */

import {
  getPhraseFilterField,
  getPhraseFilterValue,
  isExistsFilter,
  isFilterPinned,
  isMatchAllFilter,
  isMissingFilter,
  isPhraseFilter,
  isPhrasesFilter,
  isQueryStringFilter,
  isRangeFilter,
  toggleFilterNegated,
  buildEmptyFilter,
  buildExistsFilter,
  buildPhraseFilter,
  buildPhrasesFilter,
  buildQueryFilter,
  buildRangeFilter,
  disableFilter,
  fromKueryExpression,
  toElasticsearchQuery,
  nodeTypes,
  buildEsQuery,
  buildQueryFromFilters,
  luceneStringToDsl,
  decorateQuery,
  FILTERS,
  isFilter,
  isFilters,
  KueryNode,
  RangeFilter,
  RangeFilterMeta,
  RangeFilterParams,
  ExistsFilter,
  PhrasesFilter,
  PhraseFilter,
  CustomFilter,
  MatchAllFilter,
  IFieldSubType,
  EsQueryConfig,
  FilterStateStore,
  compareFilters,
  COMPARE_ALL_OPTIONS,
  onlyDisabledFiltersChanged,
  getEsQueryConfig,
} from '../common';

import { FilterLabel, FilterItem } from './ui';

import {
  getDisplayValueFromFilter,
  generateFilters,
  extractTimeRange,
  changeTimeFilter as oldChangeTimeFilter,
  mapAndFlattenFilters as oldMapAndFlattenFilters,
  extractTimeFilter as oldExtractTimeFilter,
  convertRangeFilterToTimeRangeString as oldConvertRangeFilterToTimeRangeString,
} from './query';

/**
 * @deprecated  This import will be removed in v8.0.0.
 */
const changeTimeFilter = oldChangeTimeFilter;
/**
 * @deprecated  This import will be removed in v8.0.0.
 */
const mapAndFlattenFilters = oldMapAndFlattenFilters;
/**
 * @deprecated  This import will be removed in v8.0.0.
 */
const extractTimeFilter = oldExtractTimeFilter;
/**
 * @deprecated  This import will be removed in v8.0.0.
 */
const convertRangeFilterToTimeRangeString = oldConvertRangeFilterToTimeRangeString;

/**
 * Filter helpers namespace:
 * @deprecated Please import helpers from the package kbn/es-query directly. This import will be removed in v8.0.0.
 */
export const esFilters = {
  FilterLabel,
  FilterItem,

  FILTERS,
  FilterStateStore,

  buildEmptyFilter,
  buildPhrasesFilter,
  buildExistsFilter,
  buildPhraseFilter,
  buildQueryFilter,
  buildRangeFilter,

  isPhraseFilter,
  isExistsFilter,
  isPhrasesFilter,
  isRangeFilter,
  isMatchAllFilter,
  isMissingFilter,
  isQueryStringFilter,
  isFilterPinned,

  toggleFilterNegated,
  disableFilter,
  getPhraseFilterField,
  getPhraseFilterValue,
  getDisplayValueFromFilter,

  compareFilters,
  COMPARE_ALL_OPTIONS,
  generateFilters,
  onlyDisabledFiltersChanged,

  changeTimeFilter,
  convertRangeFilterToTimeRangeString,
  mapAndFlattenFilters,
  extractTimeFilter,
  extractTimeRange,
};

/**
 * Deprecated type exports
 */
export {
  KueryNode,
  RangeFilter,
  RangeFilterMeta,
  RangeFilterParams,
  ExistsFilter,
  PhrasesFilter,
  PhraseFilter,
  CustomFilter,
  MatchAllFilter,
  IFieldSubType,
  EsQueryConfig,
  isFilter,
  isFilters,
};

/**
 * @deprecated Please import helpers from the package kbn/es-query directly. This import will be removed in v8.0.0.
 */
export const esKuery = {
  nodeTypes,
  fromKueryExpression,
  toElasticsearchQuery,
};

/**
 * @deprecated Please import helpers from the package kbn/es-query directly. This import will be removed in v8.0.0.
 */
export const esQuery = {
  buildEsQuery,
  getEsQueryConfig,
  buildQueryFromFilters,
  luceneStringToDsl,
  decorateQuery,
};

export type { Filter, Query } from '../common';
