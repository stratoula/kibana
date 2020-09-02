/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import './xy_config_panel.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { i18n } from '@kbn/i18n';
import { Position } from '@elastic/charts';
import { debounce } from 'lodash';
import {
  EuiButtonGroup,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSuperSelect,
  EuiFormRow,
  EuiText,
  htmlIdGenerator,
  EuiForm,
  EuiColorPicker,
  EuiColorPickerProps,
  EuiToolTip,
  EuiIcon,
  EuiFieldText,
  EuiSwitch,
  EuiSpacer,
} from '@elastic/eui';
import {
  VisualizationLayerWidgetProps,
  VisualizationDimensionEditorProps,
  VisualizationToolbarProps,
} from '../types';
import { State, SeriesType, visualizationTypes, YAxisMode, AxesSettingsConfig } from './types';
import { isHorizontalChart, isHorizontalSeries, getSeriesColor } from './state_helpers';
import { trackUiEvent } from '../lens_ui_telemetry';
import { fittingFunctionDefinitions } from './fitting_functions';
import { ToolbarPopover } from '../toolbar_popover';

type UnwrapArray<T> = T extends Array<infer P> ? P : T;

function updateLayer(state: State, layer: UnwrapArray<State['layers']>, index: number): State {
  const newLayers = [...state.layers];
  newLayers[index] = layer;

  return {
    ...state,
    layers: newLayers,
  };
}

const legendOptions: Array<{ id: string; value: 'auto' | 'show' | 'hide'; label: string }> = [
  {
    id: `xy_legend_auto`,
    value: 'auto',
    label: i18n.translate('xpack.lens.xyChart.legendVisibility.auto', {
      defaultMessage: 'auto',
    }),
  },
  {
    id: `xy_legend_show`,
    value: 'show',
    label: i18n.translate('xpack.lens.xyChart.legendVisibility.show', {
      defaultMessage: 'show',
    }),
  },
  {
    id: `xy_legend_hide`,
    value: 'hide',
    label: i18n.translate('xpack.lens.xyChart.legendVisibility.hide', {
      defaultMessage: 'hide',
    }),
  },
];

export function LayerContextMenu(props: VisualizationLayerWidgetProps<State>) {
  const { state, layerId } = props;
  const horizontalOnly = isHorizontalChart(state.layers);
  const index = state.layers.findIndex((l) => l.layerId === layerId);
  const layer = state.layers[index];

  if (!layer) {
    return null;
  }

  return (
    <EuiFormRow
      label={i18n.translate('xpack.lens.xyChart.chartTypeLabel', {
        defaultMessage: 'Chart type',
      })}
    >
      <EuiButtonGroup
        legend={i18n.translate('xpack.lens.xyChart.chartTypeLegend', {
          defaultMessage: 'Chart type',
        })}
        name="chartType"
        className="eui-displayInlineBlock"
        options={visualizationTypes
          .filter((t) => isHorizontalSeries(t.id as SeriesType) === horizontalOnly)
          .map((t) => ({
            id: t.id,
            label: t.label,
            iconType: t.icon || 'empty',
            'data-test-subj': `lnsXY_seriesType-${t.id}`,
          }))}
        idSelected={layer.seriesType}
        onChange={(seriesType) => {
          trackUiEvent('xy_change_layer_display');
          props.setState(
            updateLayer(state, { ...layer, seriesType: seriesType as SeriesType }, index)
          );
        }}
        isIconOnly
        buttonSize="compressed"
      />
    </EuiFormRow>
  );
}

export function XyToolbar(props: VisualizationToolbarProps<State>) {
  const { frame, state, setState } = props;

  const [popoversOpenState, setPopoversOpenState] = useState(false);
  const hasNonBarSeries = state?.layers.some(({ seriesType }) =>
    ['area_stacked', 'area', 'line'].includes(seriesType)
  );

  const rightAxisLayer = state?.layers.filter((layer) => layer.yConfig && layer.yConfig.length > 0);

  const [xAxisTitle, setXAxisTitle] = useState<string | undefined>(state?.xTitle);
  const [yLeftAxisTitle, setYLeftAxisTitle] = useState<string | undefined>(state?.yLeftTitle);
  const [yRightAxisTitle, setYRightAxisTitle] = useState<string | undefined>(state?.yRightTitle);

  const xyTitles = useCallback(() => {
    const defaults = {
      xTitle: state?.xTitle,
      yLeftTitle: state?.yLeftTitle,
      yRightTitle: state?.yRightTitle,
    };
    const layer = state?.layers[0];
    if (!layer || !layer.accessors.length) {
      return defaults;
    }
    const datasource = frame.datasourceLayers[layer.layerId];
    if (!datasource) {
      return defaults;
    }
    const x = layer.xAccessor ? datasource.getOperationForColumnId(layer.xAccessor) : null;
    const yLeft = layer.accessors[0]
      ? datasource.getOperationForColumnId(layer.accessors[0])
      : null;

    let yRightTitle: string = '';
    if (rightAxisLayer.length > 0) {
      const yConfig = rightAxisLayer[0].yConfig;
      const dataSourceNewLayer = frame.datasourceLayers[rightAxisLayer[0].layerId];
      const y = yConfig
        ? dataSourceNewLayer.getOperationForColumnId(yConfig[yConfig.length - 1].forAccessor)
        : null;
      yRightTitle = y?.label || '';
    }

    return {
      xTitle: defaults.xTitle || x?.label,
      yLeftTitle: defaults.yLeftTitle || yLeft?.label,
      yRightTitle: defaults.yRightTitle || yRightTitle,
    };
    /* We want this callback to run only if open changes its state. What we want to accomplish here is to give the user a better UX.
       By default these input fields have the axis legends. If the user changes the input text, the axis legends should also change.
       BUT if the user cleans up the input text, it should remain empty until the user closes and reopens the panel.
       In that case, the default axes legend should appear. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popoversOpenState]);

  useEffect(() => {
    const {
      xTitle,
      yLeftTitle,
      yRightTitle,
    }: {
      xTitle: string | undefined;
      yLeftTitle: string | undefined;
      yRightTitle: string | undefined;
    } = xyTitles();
    setXAxisTitle(xTitle);
    setYLeftAxisTitle(yLeftTitle);
    setYRightAxisTitle(yRightTitle);
  }, [xyTitles]);

  const onXTitleChange = (value: string): void => {
    setXAxisTitle(value);
    setState({ ...state, xTitle: value });
  };

  const onYLeftTitleChange = (value: string): void => {
    setYLeftAxisTitle(value);
    setState({ ...state, yLeftTitle: value });
  };

  const onYRightTitleChange = (value: string): void => {
    setYRightAxisTitle(value);
    setState({ ...state, yRightTitle: value });
  };

  type AxesSettingsConfigKeys = keyof AxesSettingsConfig;

  const tickLabelsVisibilitySettings = {
    x: state?.tickLabelsVisibilitySettings?.x ?? true,
    yLeft: state?.tickLabelsVisibilitySettings?.yLeft ?? true,
    yRight: state?.tickLabelsVisibilitySettings?.yRight ?? true,
  };

  const onTickLabelsVisibilitySettingsChange = (optionId: string): void => {
    const id = optionId as AxesSettingsConfigKeys;
    const newTickLabelsVisibilitySettings = {
      ...tickLabelsVisibilitySettings,
      ...{
        [id]: !tickLabelsVisibilitySettings[id],
      },
    };
    setState({
      ...state,
      tickLabelsVisibilitySettings: newTickLabelsVisibilitySettings,
    });
  };

  const gridlinesVisibilitySettings = {
    x: state?.gridlinesVisibilitySettings?.x ?? true,
    yLeft: state?.gridlinesVisibilitySettings?.yLeft ?? true,
    yRight: state?.gridlinesVisibilitySettings?.yRight ?? true,
  };

  const onGridlinesVisibilitySettingsChange = (optionId: string): void => {
    const id = optionId as AxesSettingsConfigKeys;
    const newGridlinesVisibilitySettings = {
      ...gridlinesVisibilitySettings,
      ...{
        [id]: !gridlinesVisibilitySettings[id],
      },
    };
    setState({
      ...state,
      gridlinesVisibilitySettings: newGridlinesVisibilitySettings,
    });
  };

  const toggleButtonsIcons = [
    {
      id: Position.Bottom,
      label: 'Bottom',
      iconType: 'arrowDown',
    },
    {
      id: Position.Left,
      label: 'Left',
      iconType: 'arrowLeft',
    },
    {
      id: Position.Right,
      label: 'Right',
      iconType: 'arrowRight',
    },
    {
      id: Position.Top,
      label: 'Top',
      iconType: 'arrowUp',
    },
  ];

  const legendMode =
    state?.legend.isVisible && !state?.legend.showSingleSeries
      ? 'auto'
      : !state?.legend.isVisible
      ? 'hide'
      : 'show';
  return (
    <EuiFlexGroup gutterSize="m" justifyContent="spaceBetween">
      <EuiFlexItem>
        <EuiFlexGroup gutterSize="none" responsive={false}>
          <EuiToolTip
            anchorClassName="eui-displayBlock"
            content={i18n.translate('xpack.lens.xyChart.fittingDisabledHelpText', {
              defaultMessage: 'This setting only applies to line and area charts.',
            })}
          >
            <ToolbarPopover
              title={i18n.translate('xpack.lens.xyChart.valuesLabel', {
                defaultMessage: 'Values',
              })}
              isDisabled={!hasNonBarSeries}
              icon="visText"
            >
              <EuiFormRow
                display="columnCompressed"
                label={i18n.translate('xpack.lens.xyChart.missingValuesLabel', {
                  defaultMessage: 'Missing Values',
                })}
              >
                <EuiSuperSelect
                  compressed
                  options={fittingFunctionDefinitions.map(({ id, title, description }) => {
                    return {
                      value: id,
                      dropdownDisplay: (
                        <>
                          <strong>{title}</strong>
                          <EuiText size="xs" color="subdued">
                            <p>{description}</p>
                          </EuiText>
                        </>
                      ),
                      inputDisplay: title,
                    };
                  })}
                  valueOfSelected={state?.fittingFunction || 'None'}
                  onChange={(value) => setState({ ...state, fittingFunction: value })}
                  itemLayoutAlign="top"
                  hasDividers
                />
              </EuiFormRow>
            </ToolbarPopover>
          </EuiToolTip>
          <ToolbarPopover
            title={i18n.translate('xpack.lens.xyChart.legendLabel', {
              defaultMessage: 'Legend',
            })}
            icon="copy"
          >
            <EuiFormRow
              display="columnCompressed"
              label={i18n.translate('xpack.lens.xyChart.legendVisibilityLabel', {
                defaultMessage: 'Display',
              })}
            >
              <EuiButtonGroup
                isFullWidth
                legend={i18n.translate('xpack.lens.xyChart.legendVisibilityLabel', {
                  defaultMessage: 'Display',
                })}
                name="legendDisplay"
                buttonSize="compressed"
                options={legendOptions}
                idSelected={legendOptions.find(({ value }) => value === legendMode)!.id}
                onChange={(optionId) => {
                  const newMode = legendOptions.find(({ id }) => id === optionId)!.value;
                  if (newMode === 'auto') {
                    setState({
                      ...state,
                      legend: { ...state.legend, isVisible: true, showSingleSeries: false },
                    });
                  } else if (newMode === 'show') {
                    setState({
                      ...state,
                      legend: { ...state.legend, isVisible: true, showSingleSeries: true },
                    });
                  } else if (newMode === 'hide') {
                    setState({
                      ...state,
                      legend: { ...state.legend, isVisible: false, showSingleSeries: false },
                    });
                  }
                }}
              />
            </EuiFormRow>
            <EuiFormRow
              display="columnCompressed"
              label={i18n.translate('xpack.lens.xyChart.legendPositionLabel', {
                defaultMessage: 'Position',
              })}
            >
              <EuiButtonGroup
                legend={i18n.translate('xpack.lens.xyChart.legendPositionLabel', {
                  defaultMessage: 'Position',
                })}
                name="legendPosition"
                buttonSize="compressed"
                options={toggleButtonsIcons}
                idSelected={state?.legend.position}
                onChange={(id) => {
                  setState({
                    ...state,
                    legend: { ...state.legend, position: id as Position },
                  });
                }}
                isIconOnly
              />
            </EuiFormRow>
          </ToolbarPopover>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGroup gutterSize="none" responsive={false}>
          <ToolbarPopover
            title={i18n.translate('xpack.lens.xyChart.leftAxisLabel', {
              defaultMessage: 'Left Axis',
            })}
            handlePopoverState={setPopoversOpenState}
            icon="sortLeft"
          >
            <EuiFlexGroup gutterSize="s" justifyContent="spaceBetween">
              <EuiFlexItem grow={false}>
                <EuiText size="xs">
                  <h4>
                    {i18n.translate('xpack.lens.xyChart.axisNameLabel', {
                      defaultMessage: 'Axis Name',
                    })}
                  </h4>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSwitch
                  compressed
                  data-test-subj="lnsShowYLeftAxisTitleSwitch"
                  label={i18n.translate('xpack.lens.xyChart.ShowYLeftAxisTitleLabel', {
                    defaultMessage: 'Show',
                  })}
                  onChange={({ target }) =>
                    setState({ ...state, showYLeftAxisTitle: target.checked })
                  }
                  checked={state?.showYLeftAxisTitle ?? true}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="xs" />
            <EuiFieldText
              data-test-subj="lnsYLeftAxisTitle"
              compressed
              placeholder={i18n.translate('xpack.lens.xyChart.overwriteLeftYaxis', {
                defaultMessage: 'Overwrite Left Y-axis title',
              })}
              value={yLeftAxisTitle || ''}
              disabled={state && 'showYLeftAxisTitle' in state ? !state.showYLeftAxisTitle : false}
              onChange={({ target }) => onYLeftTitleChange(target.value)}
              aria-label={i18n.translate('xpack.lens.xyChart.overwriteLeftYaxis', {
                defaultMessage: 'Overwrite Left Y-axis title',
              })}
            />
            <EuiSpacer size="m" />
            <EuiSwitch
              compressed
              data-test-subj="lnsshowYLeftAxisTickLabels"
              label={i18n.translate('xpack.lens.xyChart.tickLabels', {
                defaultMessage: 'Tick labels',
              })}
              onChange={() => onTickLabelsVisibilitySettingsChange('yLeft')}
              checked={tickLabelsVisibilitySettings.yLeft}
            />
            <EuiSpacer size="m" />
            <EuiSwitch
              compressed
              data-test-subj="lnsshowYLeftAxisGridlines"
              label={i18n.translate('xpack.lens.xyChart.Gridlines', {
                defaultMessage: 'Gridlines',
              })}
              onChange={() => onGridlinesVisibilitySettingsChange('yLeft')}
              checked={gridlinesVisibilitySettings.yLeft}
            />
          </ToolbarPopover>
          <ToolbarPopover
            title={i18n.translate('xpack.lens.xyChart.bottomAxisLabel', {
              defaultMessage: 'Bottom Axis',
            })}
            handlePopoverState={setPopoversOpenState}
            icon="sortDown"
          >
            <EuiFlexGroup gutterSize="s" justifyContent="spaceBetween">
              <EuiFlexItem grow={false}>
                <EuiText size="xs">
                  <h4>
                    {i18n.translate('xpack.lens.xyChart.axisNameLabel', {
                      defaultMessage: 'Axis Name',
                    })}
                  </h4>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSwitch
                  compressed
                  data-test-subj="lnsshowXAxisTitleSwitch"
                  label={i18n.translate('xpack.lens.xyChart.showXAxisTitleLabel', {
                    defaultMessage: 'Show',
                  })}
                  onChange={({ target }) => setState({ ...state, showXAxisTitle: target.checked })}
                  checked={state?.showXAxisTitle ?? true}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="xs" />
            <EuiFieldText
              data-test-subj="lnsXAxisTitle"
              compressed
              placeholder={i18n.translate('xpack.lens.xyChart.overwriteXaxis', {
                defaultMessage: 'Overwrite X-axis title',
              })}
              value={xAxisTitle || ''}
              disabled={state && 'showXAxisTitle' in state ? !state.showXAxisTitle : false}
              onChange={({ target }) => onXTitleChange(target.value)}
              aria-label={i18n.translate('xpack.lens.xyChart.overwriteXaxis', {
                defaultMessage: 'Overwrite X-axis title',
              })}
            />
            <EuiSpacer size="m" />
            <EuiSwitch
              compressed
              data-test-subj="lnsshowXAxisTickLabels"
              label={i18n.translate('xpack.lens.xyChart.tickLabels', {
                defaultMessage: 'Tick labels',
              })}
              onChange={() => onTickLabelsVisibilitySettingsChange('x')}
              checked={tickLabelsVisibilitySettings.x}
            />
            <EuiSpacer size="m" />
            <EuiSwitch
              compressed
              data-test-subj="lnsshowXAxisGridlines"
              label={i18n.translate('xpack.lens.xyChart.Gridlines', {
                defaultMessage: 'Gridlines',
              })}
              onChange={() => onGridlinesVisibilitySettingsChange('x')}
              checked={gridlinesVisibilitySettings.x}
            />
          </ToolbarPopover>
          <EuiToolTip
            anchorClassName="eui-displayBlock"
            content={i18n.translate('xpack.lens.xyChart.rightAxisDisabledHelpText', {
              defaultMessage: 'This setting only applies when right axis is enabled.',
            })}
          >
            <ToolbarPopover
              title={i18n.translate('xpack.lens.xyChart.rightAxisLabel', {
                defaultMessage: 'Right Axis',
              })}
              handlePopoverState={setPopoversOpenState}
              isDisabled={rightAxisLayer?.length === 0 ?? true}
              icon="sortRight"
            >
              <EuiFlexGroup gutterSize="s" justifyContent="spaceBetween">
                <EuiFlexItem grow={false}>
                  <EuiText size="xs">
                    <h4>
                      {i18n.translate('xpack.lens.xyChart.axisNameLabel', {
                        defaultMessage: 'Axis Name',
                      })}
                    </h4>
                  </EuiText>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiSwitch
                    compressed
                    data-test-subj="lnsShowYRightAxisTitleSwitch"
                    label={i18n.translate('xpack.lens.xyChart.ShowYRightAxisTitleLabel', {
                      defaultMessage: 'Show',
                    })}
                    onChange={({ target }) =>
                      setState({ ...state, showYRightAxisTitle: target.checked })
                    }
                    checked={state?.showYRightAxisTitle ?? true}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="xs" />
              <EuiFieldText
                data-test-subj="lnsYRightAxisTitle"
                compressed
                placeholder={i18n.translate('xpack.lens.xyChart.overwriteRightYaxis', {
                  defaultMessage: 'Overwrite Right Y-axis title',
                })}
                value={yRightAxisTitle || ''}
                disabled={
                  state && 'showYRightAxisTitle' in state ? !state.showYRightAxisTitle : false
                }
                onChange={({ target }) => onYRightTitleChange(target.value)}
                aria-label={i18n.translate('xpack.lens.xyChart.overwriteRightYaxis', {
                  defaultMessage: 'Overwrite Right Y-axis title',
                })}
              />
              <EuiSpacer size="m" />
              <EuiSwitch
                compressed
                data-test-subj="lnsshowYRightAxisTickLabels"
                label={i18n.translate('xpack.lens.xyChart.tickLabels', {
                  defaultMessage: 'Tick labels',
                })}
                onChange={() => onTickLabelsVisibilitySettingsChange('yRight')}
                checked={tickLabelsVisibilitySettings.yRight}
              />
              <EuiSpacer size="m" />
              <EuiSwitch
                compressed
                data-test-subj="lnsshowYRightAxisGridlines"
                label={i18n.translate('xpack.lens.xyChart.Gridlines', {
                  defaultMessage: 'Gridlines',
                })}
                onChange={() => onGridlinesVisibilitySettingsChange('yRight')}
                checked={gridlinesVisibilitySettings.yRight}
              />
            </ToolbarPopover>
          </EuiToolTip>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
const idPrefix = htmlIdGenerator()();

export function DimensionEditor(props: VisualizationDimensionEditorProps<State>) {
  const { state, setState, layerId, accessor } = props;
  const index = state.layers.findIndex((l) => l.layerId === layerId);
  const layer = state.layers[index];
  const axisMode =
    (layer.yConfig &&
      layer.yConfig?.find((yAxisConfig) => yAxisConfig.forAccessor === accessor)?.axisMode) ||
    'auto';

  return (
    <EuiForm>
      <ColorPicker {...props} />

      <EuiFormRow
        display="columnCompressed"
        fullWidth
        label={i18n.translate('xpack.lens.xyChart.axisSide.label', {
          defaultMessage: 'Axis side',
        })}
      >
        <EuiButtonGroup
          isFullWidth
          legend={i18n.translate('xpack.lens.xyChart.axisSide.label', {
            defaultMessage: 'Axis side',
          })}
          name="axisSide"
          buttonSize="compressed"
          options={[
            {
              id: `${idPrefix}auto`,
              label: i18n.translate('xpack.lens.xyChart.axisSide.auto', {
                defaultMessage: 'Auto',
              }),
            },
            {
              id: `${idPrefix}left`,
              label: i18n.translate('xpack.lens.xyChart.axisSide.left', {
                defaultMessage: 'Left',
              }),
            },
            {
              id: `${idPrefix}right`,
              label: i18n.translate('xpack.lens.xyChart.axisSide.right', {
                defaultMessage: 'Right',
              }),
            },
          ]}
          idSelected={`${idPrefix}${axisMode}`}
          onChange={(id) => {
            const newMode = id.replace(idPrefix, '') as YAxisMode;
            const newYAxisConfigs = [...(layer.yConfig || [])];
            const existingIndex = newYAxisConfigs.findIndex(
              (yAxisConfig) => yAxisConfig.forAccessor === accessor
            );
            if (existingIndex !== -1) {
              newYAxisConfigs[existingIndex].axisMode = newMode;
            } else {
              newYAxisConfigs.push({
                forAccessor: accessor,
                axisMode: newMode,
              });
            }
            setState(updateLayer(state, { ...layer, yConfig: newYAxisConfigs }, index));
          }}
        />
      </EuiFormRow>
    </EuiForm>
  );
}

const tooltipContent = {
  auto: i18n.translate('xpack.lens.configPanel.color.tooltip.auto', {
    defaultMessage: 'Lens automatically picks colors for you unless you specify a custom color.',
  }),
  custom: i18n.translate('xpack.lens.configPanel.color.tooltip.custom', {
    defaultMessage: 'Clear the custom color to return to “Auto” mode.',
  }),
  disabled: i18n.translate('xpack.lens.configPanel.color.tooltip.disabled', {
    defaultMessage:
      'Individual series cannot be custom colored when the layer includes a “Break down by.“',
  }),
};

const ColorPicker = ({
  state,
  setState,
  layerId,
  accessor,
}: VisualizationDimensionEditorProps<State>) => {
  const index = state.layers.findIndex((l) => l.layerId === layerId);
  const layer = state.layers[index];
  const disabled = !!layer.splitAccessor;

  const [color, setColor] = useState(getSeriesColor(layer, accessor));

  const handleColor: EuiColorPickerProps['onChange'] = (text, output) => {
    setColor(text);
    if (output.isValid || text === '') {
      updateColorInState(text, output);
    }
  };

  const updateColorInState: EuiColorPickerProps['onChange'] = React.useMemo(
    () =>
      debounce((text, output) => {
        const newYConfigs = [...(layer.yConfig || [])];
        const existingIndex = newYConfigs.findIndex((yConfig) => yConfig.forAccessor === accessor);
        if (existingIndex !== -1) {
          if (text === '') {
            delete newYConfigs[existingIndex].color;
          } else {
            newYConfigs[existingIndex].color = output.hex;
          }
        } else {
          newYConfigs.push({
            forAccessor: accessor,
            color: output.hex,
          });
        }
        setState(updateLayer(state, { ...layer, yConfig: newYConfigs }, index));
      }, 256),
    [state, setState, layer, accessor, index]
  );

  const colorPicker = (
    <EuiColorPicker
      compressed
      isClearable
      onChange={handleColor}
      color={disabled ? '' : color}
      disabled={disabled}
      placeholder={i18n.translate('xpack.lens.xyChart.seriesColor.auto', {
        defaultMessage: 'Auto',
      })}
      aria-label={i18n.translate('xpack.lens.xyChart.seriesColor.label', {
        defaultMessage: 'Series color',
      })}
    />
  );

  return (
    <EuiFormRow
      display="columnCompressed"
      fullWidth
      label={
        <EuiToolTip
          delay="long"
          position="top"
          content={color && !disabled ? tooltipContent.custom : tooltipContent.auto}
        >
          <span>
            {i18n.translate('xpack.lens.xyChart.seriesColor.label', {
              defaultMessage: 'Series color',
            })}{' '}
            <EuiIcon type="questionInCircle" color="subdued" size="s" className="eui-alignTop" />
          </span>
        </EuiToolTip>
      }
    >
      {disabled ? (
        <EuiToolTip
          position="top"
          content={tooltipContent.disabled}
          delay="long"
          anchorClassName="eui-displayBlock"
        >
          {colorPicker}
        </EuiToolTip>
      ) : (
        colorPicker
      )}
    </EuiFormRow>
  );
};
