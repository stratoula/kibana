/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useState } from 'react';
import {
  htmlIdGenerator,
  EuiComboBox,
  EuiTabs,
  EuiTab,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiFormLabel,
  EuiSpacer,
  EuiFieldText,
  EuiTitle,
  EuiHorizontalRule,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n/react';
import type { PersistedState } from '../../../../../visualizations/public';
import type { SanitizedFieldType } from '../../../../common/types';
import { TimeseriesVisParams } from '../../../metrics_fn';
// @ts-ignore
import { SeriesEditor } from '../series_editor';
// @ts-ignore
import { AnnotationsEditor } from '../annotations_editor';
// @ts-ignore
import { IndexPattern } from '../index_pattern';
import { createSelectHandler } from '../lib/create_select_handler';
// @ts-ignore
import { createTextHandler } from '../lib/create_text_handler';
import { ColorPicker } from '../color_picker';
// @ts-ignore
import { YesNo } from '../yes_no';
// @ts-ignore
import { getDefaultQueryLanguage } from '../lib/get_default_query_language';
// @ts-ignore
import { QueryBarWrapper } from '../query_bar_wrapper';

interface TimeseriesPanelConfigProps {
  fields: Record<string, SanitizedFieldType[]>;
  model: TimeseriesVisParams;
  name: string;
  uiState: PersistedState;
  onChange: (props: Record<string, any>) => void;
}

interface QueryFilter {
  language?: string;
  query?: string;
}

export function TimeseriesPanelConfig({
  fields,
  model,
  name,
  onChange,
  uiState,
}: TimeseriesPanelConfigProps) {
  const [selectedTab, setSelectedTab] = useState('data');

  const defaults = {
    filter: { query: '', language: getDefaultQueryLanguage() },
    axis_max: '',
    axis_min: '',
    legend_position: 'right',
    show_grid: 1,
    tooltip_mode: 'show_all',
  };

  const timeriesModel = { ...defaults, ...model };

  const switchTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleSelectChange = createSelectHandler(onChange);
  const handleTextChange = createTextHandler(onChange);
  const htmlId = htmlIdGenerator();

  const positionOptions = [
    {
      label: i18n.translate('visTypeTimeseries.timeseries.positionOptions.rightLabel', {
        defaultMessage: 'Right',
      }),
      value: 'right',
    },
    {
      label: i18n.translate('visTypeTimeseries.timeseries.positionOptions.leftLabel', {
        defaultMessage: 'Left',
      }),
      value: 'left',
    },
  ];
  const tooltipModeOptions = [
    {
      label: i18n.translate('visTypeTimeseries.timeseries.tooltipOptions.showAll', {
        defaultMessage: 'Show all values',
      }),
      value: 'show_all',
    },
    {
      label: i18n.translate('visTypeTimeseries.timeseries.tooltipOptions.showFocused', {
        defaultMessage: 'Show focused values',
      }),
      value: 'show_focused',
    },
  ];
  const selectedPositionOption = positionOptions.find((option) => {
    return timeriesModel.axis_position === option.value;
  });
  const scaleOptions = [
    {
      label: i18n.translate('visTypeTimeseries.timeseries.scaleOptions.normalLabel', {
        defaultMessage: 'Normal',
      }),
      value: 'normal',
    },
    {
      label: i18n.translate('visTypeTimeseries.timeseries.scaleOptions.logLabel', {
        defaultMessage: 'Log',
      }),
      value: 'log',
    },
  ];
  const selectedAxisScaleOption = scaleOptions.find((option) => {
    return timeriesModel.axis_scale === option.value;
  });
  const legendPositionOptions = [
    {
      label: i18n.translate('visTypeTimeseries.timeseries.legendPositionOptions.rightLabel', {
        defaultMessage: 'Right',
      }),
      value: 'right',
    },
    {
      label: i18n.translate('visTypeTimeseries.timeseries.legendPositionOptions.leftLabel', {
        defaultMessage: 'Left',
      }),
      value: 'left',
    },
    {
      label: i18n.translate('isTypeTimeseries.timeseries.legendPositionOptions.bottomLabel', {
        defaultMessage: 'Bottom',
      }),
      value: 'bottom',
    },
  ];
  const selectedLegendPosOption = legendPositionOptions.find((option) => {
    return timeriesModel.legend_position === option.value;
  });

  const selectedTooltipMode = tooltipModeOptions.find((option) => {
    return timeriesModel.tooltip_mode === option.value;
  });

  let view;
  if (selectedTab === 'data') {
    view = (
      <SeriesEditor
        fields={fields}
        model={model}
        name={name}
        onChange={onChange}
        uiState={uiState}
      />
    );
  } else if (selectedTab === 'annotations') {
    view = (
      <AnnotationsEditor fields={fields} model={model} name="annotations" onChange={onChange} />
    );
  } else {
    view = (
      <div className="tvbPanelConfig__container">
        <EuiPanel>
          <EuiTitle size="s">
            <span>
              <FormattedMessage
                id="visTypeTimeseries.timeseries.optionsTab.dataLabel"
                defaultMessage="Data"
              />
            </span>
          </EuiTitle>
          <EuiSpacer size="m" />

          <IndexPattern
            fields={fields}
            model={model}
            onChange={onChange}
            allowLevelofDetail={true}
          />

          <EuiHorizontalRule />

          <EuiFlexGroup responsive={false} wrap={true}>
            <EuiFlexItem>
              <EuiFormRow
                id={htmlId('panelFilter')}
                label={
                  <FormattedMessage
                    id="visTypeTimeseries.timeseries.optionsTab.panelFilterLabel"
                    defaultMessage="Panel filter"
                  />
                }
                fullWidth
              >
                <QueryBarWrapper
                  query={timeriesModel.filter}
                  onChange={(filter: QueryFilter) => onChange({ filter })}
                  indexPatterns={[
                    timeriesModel.index_pattern || timeriesModel.default_index_pattern,
                  ]}
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFormLabel>
                <FormattedMessage
                  id="visTypeTimeseries.timeseries.optionsTab.ignoreGlobalFilterLabel"
                  defaultMessage="Ignore global filter?"
                />
              </EuiFormLabel>
              <EuiSpacer size="m" />
              <YesNo
                value={model.ignore_global_filter}
                name="ignore_global_filter"
                onChange={onChange}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiTitle size="s">
            <span>
              <FormattedMessage
                id="visTypeTimeseries.timeseries.optionsTab.styleLabel"
                defaultMessage="Style"
              />
            </span>
          </EuiTitle>
          <EuiSpacer size="m" />

          <EuiFlexGroup responsive={false} wrap={true} alignItems="center">
            <EuiFlexItem>
              <EuiFormRow
                id={htmlId('axisMin')}
                label={
                  <FormattedMessage
                    id="visTypeTimeseries.timeseries.optionsTab.axisMinLabel"
                    defaultMessage="Axis min"
                  />
                }
              >
                <EuiFieldText
                  onChange={handleTextChange('axis_min')}
                  value={model.axis_min ?? ''}
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow
                id={htmlId('axisMax')}
                label={
                  <FormattedMessage
                    id="visTypeTimeseries.timeseries.optionsTab.axisMaxLabel"
                    defaultMessage="Axis max"
                  />
                }
              >
                <EuiFieldText
                  onChange={handleTextChange('axis_max')}
                  value={model.axis_max ?? ''}
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow
                id={htmlId('axisPos')}
                label={
                  <FormattedMessage
                    id="visTypeTimeseries.timeseries.optionsTab.axisPositionLabel"
                    defaultMessage="Axis position"
                  />
                }
              >
                <EuiComboBox
                  isClearable={false}
                  options={positionOptions}
                  selectedOptions={selectedPositionOption ? [selectedPositionOption] : []}
                  onChange={handleSelectChange('axis_position')}
                  singleSelection={{ asPlainText: true }}
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow
                id={htmlId('axisScale')}
                label={
                  <FormattedMessage
                    id="visTypeTimeseries.timeseries.optionsTab.axisScaleLabel"
                    defaultMessage="Axis scale"
                  />
                }
              >
                <EuiComboBox
                  isClearable={false}
                  options={scaleOptions}
                  selectedOptions={selectedAxisScaleOption ? [selectedAxisScaleOption] : []}
                  onChange={handleSelectChange('axis_scale')}
                  singleSelection={{ asPlainText: true }}
                />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiHorizontalRule />

          <EuiFlexGroup responsive={false} wrap={true} alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiFormLabel>
                <FormattedMessage
                  id="visTypeTimeseries.timeseries.optionsTab.backgroundColorLabel"
                  defaultMessage="Background color:"
                />
              </EuiFormLabel>
            </EuiFlexItem>
            <EuiFlexItem>
              <ColorPicker
                onChange={onChange}
                name="background_color"
                value={model.background_color ?? ''}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFormLabel>
                <FormattedMessage
                  id="visTypeTimeseries.timeseries.optionsTab.showLegendLabel"
                  defaultMessage="Show legend?"
                />
              </EuiFormLabel>
            </EuiFlexItem>
            <EuiFlexItem>
              <YesNo value={model.show_legend} name="show_legend" onChange={onChange} />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFormLabel htmlFor={htmlId('legendPos')}>
                <FormattedMessage
                  id="visTypeTimeseries.timeseries.optionsTab.legendPositionLabel"
                  defaultMessage="Legend position"
                />
              </EuiFormLabel>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiComboBox
                isClearable={false}
                id={htmlId('legendPos')}
                options={legendPositionOptions}
                selectedOptions={selectedLegendPosOption ? [selectedLegendPosOption] : []}
                onChange={handleSelectChange('legend_position')}
                singleSelection={{ asPlainText: true }}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFormLabel>
                <FormattedMessage
                  id="visTypeTimeseries.timeseries.optionsTab.displayGridLabel"
                  defaultMessage="Display grid"
                />
              </EuiFormLabel>
            </EuiFlexItem>
            <EuiFlexItem>
              <YesNo value={model.show_grid} name="show_grid" onChange={onChange} />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFormLabel>
                <FormattedMessage
                  id="visTypeTimeseries.timeseries.optionsTab.tooltipMode"
                  defaultMessage="Tooltip"
                />
              </EuiFormLabel>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiComboBox
                isClearable={false}
                id={htmlId('tooltipMode')}
                options={tooltipModeOptions}
                selectedOptions={selectedTooltipMode ? [selectedTooltipMode] : []}
                onChange={handleSelectChange('tooltip_mode')}
                singleSelection={{ asPlainText: true }}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </div>
    );
  }

  return (
    <>
      <EuiTabs size="s">
        <EuiTab isSelected={selectedTab === 'data'} onClick={() => switchTab('data')}>
          <FormattedMessage
            id="visTypeTimeseries.timeseries.dataTab.dataButtonLabel"
            defaultMessage="Data"
          />
        </EuiTab>
        <EuiTab
          isSelected={selectedTab === 'options'}
          onClick={() => switchTab('options')}
          data-test-subj="timeSeriesEditorPanelOptionsBtn"
        >
          <FormattedMessage
            id="visTypeTimeseries.timeseries.optionsTab.panelOptionsButtonLabel"
            defaultMessage="Panel options"
          />
        </EuiTab>
        <EuiTab isSelected={selectedTab === 'annotations'} onClick={() => switchTab('annotations')}>
          <FormattedMessage
            id="visTypeTimeseries.timeseries.annotationsTab.annotationsButtonLabel"
            defaultMessage="Annotations"
          />
        </EuiTab>
      </EuiTabs>
      {view}
    </>
  );
}
