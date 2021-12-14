/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { compact } from 'lodash';
import { InjectedIntl, injectI18n } from '@kbn/i18n-react';
import classNames from 'classnames';
import React, { Component } from 'react';
import { get, isEqual } from 'lodash';
import {
  EuiIconProps,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiButton,
  EuiModalHeaderTitle,
} from '@elastic/eui';

import { METRIC_TYPE } from '@kbn/analytics';
import {
  Query,
  Filter,
  enableFilter,
  disableFilter,
  pinFilter,
  toggleFilterDisabled,
  toggleFilterNegated,
  unpinFilter,
} from '@kbn/es-query';
import { withKibana, KibanaReactContextValue } from '../../../../kibana_react/public';

import QueryBarTopRow from '../query_string_input/query_bar_top_row';
import type { SavedQueryAttributes, TimeHistoryContract, SavedQuery } from '../../query';
import { IDataPluginServices } from '../../types';
import { TimeRange, IIndexPattern } from '../../../common';
import { FilterBar } from '../filter_bar/filter_bar';
// import { FilterOptions } from '../filter_bar/filter_options';
import { SavedQueryMeta, SaveQueryForm } from '../saved_query_form';
import { SavedQueryManagementComponent } from '../saved_query_management';
import { FilterSetMenu } from '../saved_query_management/filter_set_menu';

const LOCAL_STORAGE_TIMEFILTER_OVERRIDE_MODAL_HIDDEN = 'TIMEFILTER_OVERRIDE_MODAL_HIDDEN';

export interface SearchBarInjectedDeps {
  kibana: KibanaReactContextValue<IDataPluginServices>;
  intl: InjectedIntl;
  timeHistory: TimeHistoryContract;
  // Filter bar
  onFiltersUpdated?: (filters: Filter[]) => void;
  // Autorefresh
  onRefreshChange?: (options: { isPaused: boolean; refreshInterval: number }) => void;
}

export interface SearchBarOwnProps {
  indexPatterns?: IIndexPattern[];
  isLoading?: boolean;
  customSubmitButton?: React.ReactNode;
  screenTitle?: string;
  dataTestSubj?: string;
  // Togglers
  showQueryBar?: boolean;
  showQueryInput?: boolean;
  showFilterBar?: boolean;
  showDatePicker?: boolean;
  showAutoRefreshOnly?: boolean;
  filters?: Filter[];
  // Date picker
  isRefreshPaused?: boolean;
  refreshInterval?: number;
  dateRangeFrom?: string;
  dateRangeTo?: string;
  // Query bar - should be in SearchBarInjectedDeps
  query?: Query;
  // Show when user has privileges to save
  showSaveQuery?: boolean;
  savedQuery?: SavedQuery;
  onQueryChange?: (payload: { dateRange: TimeRange; query?: Query }) => void;
  onQuerySubmit?: (payload: { dateRange: TimeRange; query?: Query }, isUpdate?: boolean) => void;
  // User has saved the current state as a saved query
  onSaved?: (savedQuery: SavedQuery) => void;
  // User has modified the saved query, your app should persist the update
  onSavedQueryUpdated?: (savedQuery: SavedQuery) => void;
  // User has cleared the active query, your app should clear the entire query bar
  onClearSavedQuery?: () => void;

  onRefresh?: (payload: { dateRange: TimeRange }) => void;
  indicateNoData?: boolean;

  placeholder?: string;
  isClearable?: boolean;
  iconType?: EuiIconProps['type'];
  nonKqlMode?: 'lucene' | 'text';
  nonKqlModeHelpText?: string;
  // defines padding; use 'inPage' to avoid extra padding; use 'detached' if the searchBar appears at the very top of the view, without any wrapper
  displayStyle?: 'inPage' | 'detached';
}

export type SearchBarProps = SearchBarOwnProps & SearchBarInjectedDeps;

interface State {
  isFiltersVisible: boolean;
  showSaveQueryModal: boolean;
  showSaveNewQueryModal: boolean;
  openFilterSetPopover: boolean;
  showSavedQueryPopover: boolean;
  selectedSavedQueries: SavedQuery[];
  currentProps?: SearchBarProps;
  query?: Query;
  dateRangeFrom: string;
  dateRangeTo: string;
  isAddFilterModalOpen?: boolean;
  addFilterMode?: string;
  filtersIdsFromSavedQueries?: string[];
  overrideTimeFilterModalShow: boolean;
}

class SearchBarUI extends Component<SearchBarProps, State> {
  public static defaultProps = {
    showQueryBar: true,
    showFilterBar: true,
    showDatePicker: true,
    showAutoRefreshOnly: false,
  };

  private services = this.props.kibana.services;
  private savedQueryService = this.services.data.query.savedQueries;

  public static getDerivedStateFromProps(nextProps: SearchBarProps, prevState: State) {
    if (isEqual(prevState.currentProps, nextProps)) {
      return null;
    }

    let nextQuery = null;
    if (nextProps.query && nextProps.query.query !== get(prevState, 'currentProps.query.query')) {
      nextQuery = {
        query: nextProps.query.query,
        language: nextProps.query.language,
      };
    } else if (
      nextProps.query &&
      prevState.query &&
      nextProps.query.language !== prevState.query.language
    ) {
      nextQuery = {
        query: '',
        language: nextProps.query.language,
      };
    }

    let nextDateRange = null;
    if (
      nextProps.dateRangeFrom !== get(prevState, 'currentProps.dateRangeFrom') ||
      nextProps.dateRangeTo !== get(prevState, 'currentProps.dateRangeTo')
    ) {
      nextDateRange = {
        dateRangeFrom: nextProps.dateRangeFrom,
        dateRangeTo: nextProps.dateRangeTo,
      };
    }

    const nextState: any = {
      currentProps: nextProps,
    };
    if (nextQuery) {
      nextState.query = nextQuery;
    }
    if (nextDateRange) {
      nextState.dateRangeFrom = nextDateRange.dateRangeFrom;
      nextState.dateRangeTo = nextDateRange.dateRangeTo;
    }
    return nextState;
  }

  /*
   Keep the "draft" value in local state until the user actually submits the query. There are a couple advantages:

    1. Each app doesn't have to maintain its own "draft" value if it wants to put off updating the query in app state
    until the user manually submits their changes. Most apps have watches on the query value in app state so we don't
    want to trigger those on every keypress. Also, some apps (e.g. dashboard) already juggle multiple query values,
    each with slightly different semantics and I'd rather not add yet another variable to the mix.

    2. Changes to the local component state won't trigger an Angular digest cycle. Triggering digest cycles on every
    keypress has been a major source of performance issues for us in previous implementations of the query bar.
    See https://github.com/elastic/kibana/issues/14086
  */
  public state = {
    isFiltersVisible: true,
    showSaveQueryModal: false,
    showSaveNewQueryModal: false,
    openFilterSetPopover: false,
    showSavedQueryPopover: false,
    currentProps: this.props,
    selectedSavedQueries: [],
    query: this.props.query ? { ...this.props.query } : undefined,
    dateRangeFrom: get(this.props, 'dateRangeFrom', 'now-15m'),
    dateRangeTo: get(this.props, 'dateRangeTo', 'now'),
    isAddFilterModalOpen: false,
    addFilterMode: 'quick_form',
    filtersIdsFromSavedQueries: [],
    overrideTimeFilterModalShow: false,
  };

  public isDirty = () => {
    if (!this.props.showDatePicker && this.state.query && this.props.query) {
      return this.state.query.query !== this.props.query.query;
    }

    return (
      (this.state.query && this.props.query && this.state.query.query !== this.props.query.query) ||
      this.state.dateRangeFrom !== this.props.dateRangeFrom ||
      this.state.dateRangeTo !== this.props.dateRangeTo
    );
  };

  private shouldRenderQueryBar() {
    const showDatePicker = this.props.showDatePicker || this.props.showAutoRefreshOnly;
    const showQueryInput =
      this.props.showQueryInput && this.props.indexPatterns && this.state.query;
    return this.props.showQueryBar && (showDatePicker || showQueryInput);
  }

  private shouldRenderFilterBar() {
    return (
      this.props.showFilterBar &&
      this.props.filters &&
      this.props.indexPatterns &&
      compact(this.props.indexPatterns).length > 0
    );
  }

  /*
   * This Function is here to show the toggle in saved query form
   * in case you the date range (from/to)
   */
  private shouldRenderTimeFilterInSavedQueryForm() {
    const { dateRangeFrom, dateRangeTo, showDatePicker } = this.props;
    return (
      showDatePicker ||
      (!showDatePicker && dateRangeFrom !== undefined && dateRangeTo !== undefined)
    );
  }

  public onSave = async (savedQueryMeta: SavedQueryMeta, saveAsNew = false) => {
    if (!this.state.query) return;

    const savedQueryAttributes: SavedQueryAttributes = {
      title: savedQueryMeta.title,
      description: savedQueryMeta.description,
      query: this.state.query,
    };

    if (savedQueryMeta.shouldIncludeFilters) {
      savedQueryAttributes.filters = this.props.filters;
    }

    if (
      savedQueryMeta.shouldIncludeTimefilter &&
      this.state.dateRangeTo !== undefined &&
      this.state.dateRangeFrom !== undefined &&
      this.props.refreshInterval !== undefined &&
      this.props.isRefreshPaused !== undefined
    ) {
      savedQueryAttributes.timefilter = {
        from: this.state.dateRangeFrom,
        to: this.state.dateRangeTo,
        refreshInterval: {
          value: this.props.refreshInterval,
          pause: this.props.isRefreshPaused,
        },
      };
    }

    try {
      let response;
      if (this.props.savedQuery && !saveAsNew) {
        response = await this.savedQueryService.updateQuery(
          savedQueryMeta.id!,
          savedQueryAttributes
        );
      } else {
        response = await this.savedQueryService.createQuery(savedQueryAttributes);
      }

      this.services.notifications.toasts.addSuccess(
        `Your query "${response.attributes.title}" was saved`
      );

      this.setState({
        showSaveQueryModal: false,
        showSaveNewQueryModal: false,
        openFilterSetPopover: false,
      });

      if (this.props.onSaved) {
        this.props.onSaved(response);
      }
    } catch (error) {
      this.services.notifications.toasts.addDanger(
        `An error occured while saving your query: ${error.message}`
      );
      throw error;
    }
  };

  public onInitiateSave = () => {
    this.setState({
      showSaveQueryModal: true,
    });
  };

  public onInitiateSaveNew = () => {
    this.setState({
      showSaveNewQueryModal: true,
    });
  };

  public onQueryBarChange = (queryAndDateRange: { dateRange: TimeRange; query?: Query }) => {
    this.setState({
      query: queryAndDateRange.query,
      dateRangeFrom: queryAndDateRange.dateRange.from,
      dateRangeTo: queryAndDateRange.dateRange.to,
    });
    if (this.props.onQueryChange) {
      this.props.onQueryChange(queryAndDateRange);
    }
  };

  public onQueryBarSubmit = (queryAndDateRange: { dateRange?: TimeRange; query?: Query }) => {
    this.setState(
      {
        query: queryAndDateRange.query,
        dateRangeFrom:
          (queryAndDateRange.dateRange && queryAndDateRange.dateRange.from) ||
          this.state.dateRangeFrom,
        dateRangeTo:
          (queryAndDateRange.dateRange && queryAndDateRange.dateRange.to) || this.state.dateRangeTo,
      },
      () => {
        if (this.props.onQuerySubmit) {
          this.props.onQuerySubmit({
            query: this.state.query,
            dateRange: {
              from: this.state.dateRangeFrom,
              to: this.state.dateRangeTo,
            },
          });
        }
        this.services.usageCollection?.reportUiCounter(
          this.services.appName,
          METRIC_TYPE.CLICK,
          'query_submitted'
        );
      }
    );
  };

  public onLoadSavedQuery = (savedQueries: SavedQuery[]) => {
    // Should I take under consideration the existing queries here?
    this.setState({
      selectedSavedQueries: [...savedQueries],
    });
  };

  public applyTimeFilterOverrideModal = (selectedQueries?: SavedQuery[]) => {
    if (selectedQueries) {
      this.setState({
        selectedSavedQueries: [...selectedQueries],
      });
    }
    if (!Boolean(this.services.storage.get(LOCAL_STORAGE_TIMEFILTER_OVERRIDE_MODAL_HIDDEN))) {
      this.setState({ overrideTimeFilterModalShow: true });
    } else {
      this.applySelectedSavedQueries(selectedQueries);
    }
  };

  public timeFilterOverrideModalApplyQueries = (notShowAgain: boolean) => {
    if (notShowAgain) {
      this.services.storage.set(LOCAL_STORAGE_TIMEFILTER_OVERRIDE_MODAL_HIDDEN, true);
    }
    this.setState({ overrideTimeFilterModalShow: false });
    this.applySelectedSavedQueries();
  };

  public applySelectedSavedQueries = (selectedSavedQuery?: SavedQuery[]) => {
    const savedQueries = selectedSavedQuery ?? (this.state.selectedSavedQueries as SavedQuery[]);
    const filters: Filter[] = [];
    const finalQueryFromSelectedSavedObjects: Query = {
      language: 'kuery',
      query: '',
    };
    let dateRangeFrom = this.state.dateRangeFrom;
    let dateRangeTo = this.state.dateRangeTo;

    savedQueries.forEach((savedQuery, idx) => {
      if (savedQuery.attributes.filters) {
        // filtersIdsFromSavedQueries
        const updatedWithIconFilters = savedQuery.attributes.filters.map((filter) => {
          return {
            ...filter,
            meta: {
              ...filter.meta,
              isFromSavedQuery: true,
            },
          };
        });
        filters.push(...updatedWithIconFilters);
      }
      if (savedQuery.attributes.query && savedQuery.attributes.query.query) {
        const existingQuery = finalQueryFromSelectedSavedObjects.query;
        const updatedQuery =
          idx !== 0
            ? existingQuery.concat(' and ', savedQuery.attributes.query.query)
            : savedQuery.attributes.query.query;
        finalQueryFromSelectedSavedObjects.query = updatedQuery;
      }
      if (savedQuery.attributes.timefilter) {
        dateRangeFrom = savedQuery.attributes.timefilter.from || dateRangeFrom;
        dateRangeTo = savedQuery.attributes.timefilter.to || dateRangeTo;
      }
    });

    this.props?.onQuerySubmit?.({
      query: finalQueryFromSelectedSavedObjects,
      dateRange: {
        from: dateRangeFrom,
        to: dateRangeTo,
      },
    });

    this.props?.onFiltersUpdated?.(filters!);
  };

  public applySelectedQuery = (selectedSavedQuery: SavedQuery) => {
    this.applyTimeFilterOverrideModal([selectedSavedQuery]);
  };

  public removeSelectedSavedQuery = (savedQuery: SavedQuery) => {
    const selectedSavedQueries: SavedQuery[] = this.state.selectedSavedQueries;
    const updatedSelectedSavedQueries = selectedSavedQueries.filter(
      (sq) => sq.id !== savedQuery.id
    );
    this.applySelectedSavedQueries(updatedSelectedSavedQueries);
    this.setState({
      selectedSavedQueries: [...updatedSelectedSavedQueries],
    });
  };

  public onEnableAll = () => {
    const filters = this.props?.filters?.map(enableFilter);
    this.props?.onFiltersUpdated?.(filters!);
  };

  public onDisableAll = () => {
    const filters = this.props?.filters?.map(disableFilter);
    this.props?.onFiltersUpdated?.(filters!);
  };

  public onPinAll = () => {
    const filters = this.props?.filters?.map(pinFilter);
    this.props.onFiltersUpdated?.(filters!);
  };

  public onUnpinAll = () => {
    const filters = this.props?.filters?.map(unpinFilter);
    this.props.onFiltersUpdated?.(filters!);
  };

  public onToggleAllNegated = () => {
    const filters = this.props?.filters?.map(toggleFilterNegated);
    this.props.onFiltersUpdated?.(filters!);
  };

  public onToggleAllDisabled = () => {
    const filters = this.props?.filters?.map(toggleFilterDisabled);
    this.props.onFiltersUpdated?.(filters!);
  };

  public onRemoveAll = () => {
    this.setState({ selectedSavedQueries: [] });
    this.props.onFiltersUpdated?.([]);
  };

  public toggleAddFilterModal = (value: boolean, addFilterMode?: string) => {
    this.setState({
      isAddFilterModalOpen: value,
      addFilterMode: addFilterMode || 'quick_form',
    });
  };

  public toggleFilterSetPopover = (value: boolean) => {
    this.setState({
      openFilterSetPopover: value,
    });
  };

  public render() {
    const savedQueryManagement = this.state.query && this.props.onClearSavedQuery && (
      <SavedQueryManagementComponent
        showSaveQuery={this.props.showSaveQuery}
        loadedSavedQuery={this.props.savedQuery}
        onSave={this.onInitiateSave}
        onSaveAsNew={this.onInitiateSaveNew}
        onLoad={this.onLoadSavedQuery}
        savedQueryService={this.savedQueryService}
        onClearSavedQuery={this.props.onClearSavedQuery}
        selectedSavedQueries={this.state.selectedSavedQueries}
      >
        {(list) => list}
      </SavedQueryManagementComponent>
    );

    // const filterOptions = this.shouldRenderFilterBar() ? (
    //   <FilterOptions
    //     onEnableAll={this.onEnableAll}
    //     onDisableAll={this.onDisableAll}
    //     onPinAll={this.onPinAll}
    //     onUnpinAll={this.onUnpinAll}
    //     onToggleAllNegated={this.onToggleAllNegated}
    //     onToggleAllDisabled={this.onToggleAllDisabled}
    //     onRemoveAll={this.onRemoveAll}
    //   />
    // ) : undefined;
    const saveQueryFormComponent = (
      <SaveQueryForm
        savedQueryService={this.savedQueryService}
        onSave={(savedQueryMeta) => this.onSave(savedQueryMeta, true)}
        onClose={() => this.setState({ openFilterSetPopover: false })}
        showFilterOption={this.props.showFilterBar}
        showTimeFilterOption={this.shouldRenderTimeFilterInSavedQueryForm()}
      />
    );

    const filterMenu = (
      <FilterSetMenu
        nonKqlMode={this.props.nonKqlMode}
        nonKqlModeHelpText={this.props.nonKqlModeHelpText}
        language={this.state.query!.language}
        onEnableAll={this.onEnableAll}
        onDisableAll={this.onDisableAll}
        onToggleAllNegated={this.onToggleAllNegated}
        onRemoveAll={this.onRemoveAll}
        services={this.services}
        onQueryChange={this.onQueryBarChange}
        dateRangeFrom={this.state.dateRangeFrom}
        dateRangeTo={this.state.dateRangeTo}
        toggleAddFilterModal={this.toggleAddFilterModal}
        savedQueryService={this.savedQueryService}
        applySelectedQuery={this.applySelectedQuery}
        saveQueryFormComponent={saveQueryFormComponent}
        toggleFilterSetPopover={this.toggleFilterSetPopover}
        openFilterSetPopover={this.state.openFilterSetPopover}
      />
    );

    const timeRangeForSuggestionsOverride = this.props.showDatePicker ? undefined : false;

    let queryBar;
    if (this.shouldRenderQueryBar()) {
      queryBar = (
        <QueryBarTopRow
          timeHistory={this.props.timeHistory}
          query={this.state.query}
          filters={this.props.filters!}
          onFiltersUpdated={this.props.onFiltersUpdated}
          screenTitle={this.props.screenTitle}
          onSubmit={this.onQueryBarSubmit}
          indexPatterns={this.props.indexPatterns}
          isLoading={this.props.isLoading}
          prepend={this.props.showFilterBar ? filterMenu : undefined}
          savedQueryManagement={savedQueryManagement}
          applySelectedSavedQueries={this.applyTimeFilterOverrideModal}
          showDatePicker={this.props.showDatePicker}
          dateRangeFrom={this.state.dateRangeFrom}
          dateRangeTo={this.state.dateRangeTo}
          isRefreshPaused={this.props.isRefreshPaused}
          refreshInterval={this.props.refreshInterval}
          showAutoRefreshOnly={this.props.showAutoRefreshOnly}
          showQueryInput={this.props.showQueryInput}
          onRefresh={this.props.onRefresh}
          onRefreshChange={this.props.onRefreshChange}
          onChange={this.onQueryBarChange}
          isDirty={this.isDirty()}
          customSubmitButton={
            this.props.customSubmitButton ? this.props.customSubmitButton : undefined
          }
          dataTestSubj={this.props.dataTestSubj}
          indicateNoData={this.props.indicateNoData}
          placeholder={this.props.placeholder}
          isClearable={this.props.isClearable}
          iconType={this.props.iconType}
          nonKqlMode={this.props.nonKqlMode}
          nonKqlModeHelpText={this.props.nonKqlModeHelpText}
          timeRangeForSuggestionsOverride={timeRangeForSuggestionsOverride}
          toggleAddFilterModal={this.toggleAddFilterModal}
          isAddFilterModalOpen={this.state.isAddFilterModalOpen}
          addFilterMode={this.state.addFilterMode}
          selectedSavedQueries={this.state.selectedSavedQueries}
        />
      );
    }

    // move this to a separate file
    if (this.state.overrideTimeFilterModalShow) {
      return (
        <EuiModal
          onClose={() => this.setState({ overrideTimeFilterModalShow: false })}
          style={{ width: 450 }}
        >
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              <h1>Overriding time filter</h1>
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            Saved filters that also contain time filters will override the currently selected time
            filter
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButton onClick={() => this.setState({ overrideTimeFilterModalShow: false })}>
              Cancel
            </EuiButton>
            <EuiButton
              onClick={() => this.timeFilterOverrideModalApplyQueries(true)}
              color="warning"
            >
              Never Show again
            </EuiButton>
            <EuiButton onClick={() => this.timeFilterOverrideModalApplyQueries(false)} fill>
              OK
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      );
    }

    let filterBar;
    if (this.shouldRenderFilterBar()) {
      const filterGroupClasses = classNames('globalFilterGroup__wrapper', {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'globalFilterGroup__wrapper-isVisible': this.state.isFiltersVisible,
      });

      filterBar = (
        <div id="GlobalFilterGroup" className={filterGroupClasses}>
          <FilterBar
            className="globalFilterGroup__filterBar"
            filters={this.props.filters!}
            onFiltersUpdated={this.props.onFiltersUpdated}
            indexPatterns={this.props.indexPatterns!}
            appName={this.services.appName}
            timeRangeForSuggestionsOverride={timeRangeForSuggestionsOverride}
            selectedSavedQueries={this.state.selectedSavedQueries}
            removeSelectedSavedQuery={this.removeSelectedSavedQuery}
          />
        </div>
      );
    }

    const globalQueryBarClasses = classNames('globalQueryBar', {
      'globalQueryBar--inPage': this.props.displayStyle === 'inPage',
    });

    return (
      <div className={globalQueryBarClasses} data-test-subj="globalQueryBar">
        {queryBar}
        {filterBar}

        {this.state.showSaveQueryModal ? (
          <SaveQueryForm
            savedQuery={this.props.savedQuery ? this.props.savedQuery : undefined}
            savedQueryService={this.savedQueryService}
            onSave={this.onSave}
            onClose={() => this.setState({ showSaveQueryModal: false })}
            showFilterOption={this.props.showFilterBar}
            showTimeFilterOption={this.shouldRenderTimeFilterInSavedQueryForm()}
          />
        ) : null}
        {this.state.showSaveNewQueryModal ? (
          <SaveQueryForm
            savedQueryService={this.savedQueryService}
            onSave={(savedQueryMeta) => this.onSave(savedQueryMeta, true)}
            onClose={() => this.setState({ showSaveNewQueryModal: false })}
            showFilterOption={this.props.showFilterBar}
            showTimeFilterOption={this.shouldRenderTimeFilterInSavedQueryForm()}
          />
        ) : null}
      </div>
    );
  }
}

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
export default injectI18n(withKibana(SearchBarUI));
