/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { EuiButtonEmpty, EuiFlexGroup, EuiFlexItem, EuiPopover } from '@elastic/eui';
import { groupBy, isEqual } from 'lodash';
import { FormattedMessage, InjectedIntl, injectI18n } from '@kbn/i18n-react';
import {
  buildEmptyFilter,
  Filter,
  // enableFilter,
  // disableFilter,
  // pinFilter,
  // toggleFilterDisabled,
  toggleFilterNegated,
  // unpinFilter,
} from '@kbn/es-query';
import classNames from 'classnames';
import React, { useState, useRef } from 'react';

import { METRIC_TYPE } from '@kbn/analytics';
import { FilterEditor } from './filter_editor';
import { FILTER_EDITOR_WIDTH, FilterItem } from './filter_item';
// import { FilterOptions } from './filter_options';
import { useKibana } from '../../../../kibana_react/public';
import { IDataPluginServices, IIndexPattern } from '../..';
import type { SavedQuery } from '../../query';
import { SavedQueriesItem } from './saved_queries_item';
import { FilterExpressionItem } from './filter_expression_item';

import { UI_SETTINGS } from '../../../common';
import { SavedQueryMeta } from '../saved_query_form';
import { SavedQueryService } from '../..';

interface Props {
  filters: Filter[];
  multipleFilters: Filter[];
  onFiltersUpdated?: (filters: Filter[]) => void;
  className: string;
  indexPatterns: IIndexPattern[];
  intl: InjectedIntl;
  appName: string;
  timeRangeForSuggestionsOverride?: boolean;
  selectedSavedQueries?: SavedQuery[];
  removeSelectedSavedQuery: (savedQuery: SavedQuery) => void;
  onMultipleFiltersUpdated?: (filters: Filter[]) => void;
  savedQueryService: SavedQueryService;
  onFilterSave: (savedQueryMeta: SavedQueryMeta, saveAsNew?: boolean) => Promise<void>;
  onFilterBadgeSaved: (groupId: number, alias: string) => void;
}

const FilterBarUI = React.memo(function FilterBarUI(props: Props) {
  const groupRef = useRef<HTMLDivElement>(null);
  const [isAddFilterPopoverOpen, setIsAddFilterPopoverOpen] = useState(false);
  const kibana = useKibana<IDataPluginServices>();
  const { appName, usageCollection, uiSettings } = kibana.services;
  if (!uiSettings) return null;

  const reportUiCounter = usageCollection?.reportUiCounter.bind(usageCollection, appName);

  function onFiltersUpdated(filters: Filter[]) {
    if (props.onFiltersUpdated) {
      props.onFiltersUpdated(filters);
    }
  }

  const onAddFilterClick = () => setIsAddFilterPopoverOpen(!isAddFilterPopoverOpen);

  function renderItems() {
    return props.filters.map((filter, i) => {
      // Do not display filters from saved queries
      if (filter.meta.isFromSavedQuery) return null;
      return (
        <EuiFlexItem key={i} grow={false} className="globalFilterBar__flexItem">
          <FilterItem
            id={`${i}`}
            intl={props.intl}
            filter={filter}
            onUpdate={(newFilter) => onUpdate(i, newFilter)}
            onRemove={() => onRemove(i)}
            indexPatterns={props.indexPatterns}
            uiSettings={uiSettings!}
            timeRangeForSuggestionsOverride={props.timeRangeForSuggestionsOverride}
          />
        </EuiFlexItem>
      );
    });
  }

  function renderSelectedSavedQueries() {
    return props?.selectedSavedQueries?.map((savedQuery, i) => (
      <EuiFlexItem key={i} grow={false} className="globalFilterBar__flexItem">
        <SavedQueriesItem
          savedQuery={savedQuery}
          onClick={() => props.removeSelectedSavedQuery(savedQuery)}
        />
      </EuiFlexItem>
    ));
  }

  function renderMultipleFilters() {
    const groupedByAlias = groupBy(props.multipleFilters, 'meta.alias');
    const filtersWithoutLabel = groupedByAlias.null || groupedByAlias.undefined;
    const labels = Object.keys(groupedByAlias).filter(
      (key) => key !== 'null' && key !== 'undefined'
    );

    const firstDepthGroupedFilters = groupBy(filtersWithoutLabel, 'groupId');
    const GroupBadge: JSX.Element[] = [];
    for (const [groupId, groupedFilters] of Object.entries(firstDepthGroupedFilters)) {
      const badge = (
        <FilterExpressionItem
          groupId={groupId}
          groupedFilters={groupedFilters}
          indexPatterns={props?.indexPatterns}
          onClick={() => {}}
          onRemove={onRemoveFilterGroup}
          onUpdate={onUpdateFilterGroup}
          filtersGroupsCount={Object.entries(firstDepthGroupedFilters).length}
          savedQueryService={props.savedQueryService}
          onFilterSave={props.onFilterSave}
          onFilterBadgeSaved={props.onFilterBadgeSaved}
        />
      );
      GroupBadge.push(badge);
    }

    let groupId: string;
    labels.map((label) => {
      // we should have same groupIds on our labeled filters group
      groupId = (groupedByAlias[label][0] as any).groupId;
      groupedByAlias[label].forEach((filter) => ((filter as any).groupId = groupId));
      const labelBadge = (
        <FilterExpressionItem
          groupId={groupId}
          groupedFilters={groupedByAlias[label]}
          indexPatterns={props?.indexPatterns}
          onClick={() => {}}
          onRemove={onRemoveFilterGroup}
          onUpdate={onUpdateFilterGroup}
          filtersGroupsCount={1}
          customLabel={label}
        />
      );
      GroupBadge.push(labelBadge);
    });

    return GroupBadge;
  }

  function renderAddFilter() {
    const isPinned = uiSettings!.get(UI_SETTINGS.FILTERS_PINNED_BY_DEFAULT);
    const [indexPattern] = props.indexPatterns;
    const index = indexPattern && indexPattern.id;
    const newFilter = buildEmptyFilter(isPinned, index);

    const button = (
      <EuiButtonEmpty
        size="s"
        onClick={onAddFilterClick}
        data-test-subj="addFilter"
        className="globalFilterBar__addButton"
      >
        +{' '}
        <FormattedMessage
          id="data.filter.filterBar.addFilterButtonLabel"
          defaultMessage="Add filter"
        />
      </EuiButtonEmpty>
    );

    return (
      <EuiFlexItem grow={false}>
        <EuiPopover
          id="addFilterPopover"
          button={button}
          isOpen={isAddFilterPopoverOpen}
          closePopover={() => setIsAddFilterPopoverOpen(false)}
          anchorPosition="downLeft"
          panelPaddingSize="none"
          initialFocus=".filterEditor__hiddenItem"
          ownFocus
          repositionOnScroll
        >
          <EuiFlexItem grow={false}>
            <div style={{ width: FILTER_EDITOR_WIDTH, maxWidth: '100%' }}>
              <FilterEditor
                filter={newFilter}
                indexPatterns={props.indexPatterns}
                onSubmit={onAdd}
                onCancel={() => setIsAddFilterPopoverOpen(false)}
                key={JSON.stringify(newFilter)}
                timeRangeForSuggestionsOverride={props.timeRangeForSuggestionsOverride}
              />
            </div>
          </EuiFlexItem>
        </EuiPopover>
      </EuiFlexItem>
    );
  }

  function onAdd(filter: Filter) {
    reportUiCounter?.(METRIC_TYPE.CLICK, `filter:added`);
    setIsAddFilterPopoverOpen(false);

    const filters = [...props.filters, filter];
    onFiltersUpdated(filters);
  }

  function onRemove(i: number) {
    reportUiCounter?.(METRIC_TYPE.CLICK, `filter:removed`);
    const filters = [...props.filters];
    filters.splice(i, 1);
    onFiltersUpdated(filters);
    groupRef.current?.focus();
  }

  function onRemoveFilterGroup(groupId: string) {
    const multipleFilters = [...props.multipleFilters];
    const updatedMultipleFilters = multipleFilters.filter(
      (filter) => filter.groupId !== Number(groupId)
    );
    const filters = [...props.filters];
    const updatedFilters: Filter[] = [];

    updatedMultipleFilters.forEach((filter) => {
      filters.forEach((f) => {
        if (isEqual(f.query, filter.query)) {
          updatedFilters.push(f);
        }
      });
    });
    onFiltersUpdated(updatedFilters);
    props?.onMultipleFiltersUpdated?.(updatedMultipleFilters);
    groupRef.current?.focus();
  }

  function onUpdateFilterGroup(
    updatedMultipleFilters: Filter[],
    groupId: string,
    toggleNegate = false
  ) {
    const multipleFilters = [...props.multipleFilters];
    const notAffectedFilters = multipleFilters.filter(
      (filter) => filter.groupId !== Number(groupId)
    );
    const finalMultipleFilters = [...notAffectedFilters, ...updatedMultipleFilters];
    props?.onMultipleFiltersUpdated?.(finalMultipleFilters);
    const filters = [...props.filters];
    const toggleNegatedFilters = toggleNegate ? filters?.map(toggleFilterNegated) : filters;
    const updatedFilters: Filter[] = [];

    finalMultipleFilters.forEach((filter) => {
      toggleNegatedFilters.forEach((f) => {
        if (isEqual(f.query, filter.query)) {
          updatedFilters.push(f);
        }
      });
    });
    onFiltersUpdated(updatedFilters);
    groupRef.current?.focus();
  }

  function onUpdate(i: number, filter: Filter) {
    reportUiCounter?.(METRIC_TYPE.CLICK, `filter:edited`);
    const filters = [...props.filters];
    filters[i] = filter;
    onFiltersUpdated(filters);
  }

  // function onEnableAll() {
  //   reportUiCounter?.(METRIC_TYPE.CLICK, `filter:enable_all`);
  //   const filters = props.filters.map(enableFilter);
  //   onFiltersUpdated(filters);
  // }

  // function onDisableAll() {
  //   reportUiCounter?.(METRIC_TYPE.CLICK, `filter:disable_all`);
  //   const filters = props.filters.map(disableFilter);
  //   onFiltersUpdated(filters);
  // }

  // function onPinAll() {
  //   reportUiCounter?.(METRIC_TYPE.CLICK, `filter:pin_all`);
  //   const filters = props.filters.map(pinFilter);
  //   onFiltersUpdated(filters);
  // }

  // function onUnpinAll() {
  //   reportUiCounter?.(METRIC_TYPE.CLICK, `filter:unpin_all`);
  //   const filters = props.filters.map(unpinFilter);
  //   onFiltersUpdated(filters);
  // }

  // function onToggleAllNegated() {
  //   reportUiCounter?.(METRIC_TYPE.CLICK, `filter:invert_all`);
  //   const filters = props.filters.map(toggleFilterNegated);
  //   onFiltersUpdated(filters);
  // }

  // function onToggleAllDisabled() {
  //   reportUiCounter?.(METRIC_TYPE.CLICK, `filter:toggle_all`);
  //   const filters = props.filters.map(toggleFilterDisabled);
  //   onFiltersUpdated(filters);
  // }

  // function onRemoveAll() {
  //   reportUiCounter?.(METRIC_TYPE.CLICK, `filter:remove_all`);
  //   onFiltersUpdated([]);
  // }

  const classes = classNames('globalFilterBar', props.className);

  return (
    <EuiFlexGroup
      className="globalFilterGroup"
      gutterSize="none"
      alignItems="flexStart"
      responsive={false}
    >
      {/* <EuiFlexItem className="globalFilterGroup__branch" grow={false}>
        <FilterOptions
          onEnableAll={onEnableAll}
          onDisableAll={onDisableAll}
          onPinAll={onPinAll}
          onUnpinAll={onUnpinAll}
          onToggleAllNegated={onToggleAllNegated}
          onToggleAllDisabled={onToggleAllDisabled}
          onRemoveAll={onRemoveAll}
        />
      </EuiFlexItem> */}

      <EuiFlexItem className="globalFilterGroup__filterFlexItem">
        <EuiFlexGroup
          ref={groupRef}
          className={classes}
          wrap={true}
          responsive={false}
          gutterSize="xs"
          alignItems="center"
          tabIndex={-1}
        >
          {renderMultipleFilters()}
          {renderSelectedSavedQueries()}
          {props.multipleFilters.length === 0 && renderItems()}
          {/* {renderAddFilter()} */}
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
});

export const FilterBar = injectI18n(FilterBarUI);
