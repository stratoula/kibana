/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import './toolbar.scss';
import React, { useState, useMemo, useEffect } from 'react';
import { i18n } from '@kbn/i18n';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiSuperSelect,
  EuiRange,
  EuiHorizontalRule,
  EuiColorPaletteDisplay,
  EuiButtonEmpty,
} from '@elastic/eui';
import type { Position } from '@elastic/charts';
import type { SavedObjectsClientContract } from 'kibana/public';
import type { PaletteRegistry, PaletteOutput } from 'src/plugins/charts/public';
import type { FormatFactory, CustomPaletteParams } from '../../common';
import { DEFAULT_PERCENT_DECIMALS } from './constants';
import { PartitionChartsMeta } from './partition_charts_meta';
import type { PieVisualizationState, SharedPieLayerState } from '../../common/expressions';
import { VisualizationDimensionEditorProps, VisualizationToolbarProps } from '../types';
import {
  ToolbarPopover,
  LegendSettingsPopover,
  useDebouncedValue,
  PalettePanelContainer,
  CustomizableTermsPalette,
  FIXED_PROGRESSION,
  getDisplayPaletteColors,
} from '../shared_components';
import { SavedObjectPaletteStore, getPalettesFromStore, savePaletteToStore } from '../persistence';
import { computeTerms } from '../utils';

const legendOptions: Array<{
  value: SharedPieLayerState['legendDisplay'];
  label: string;
  id: string;
}> = [
  {
    id: 'pieLegendDisplay-default',
    value: 'default',
    label: i18n.translate('xpack.lens.pieChart.legendVisibility.auto', {
      defaultMessage: 'Auto',
    }),
  },
  {
    id: 'pieLegendDisplay-show',
    value: 'show',
    label: i18n.translate('xpack.lens.pieChart.legendVisibility.show', {
      defaultMessage: 'Show',
    }),
  },
  {
    id: 'pieLegendDisplay-hide',
    value: 'hide',
    label: i18n.translate('xpack.lens.pieChart.legendVisibility.hide', {
      defaultMessage: 'Hide',
    }),
  },
];

export function PieToolbar(props: VisualizationToolbarProps<PieVisualizationState>) {
  const { state, setState } = props;
  const layer = state.layers[0];
  if (!layer) {
    return null;
  }
  const {
    categoryOptions,
    numberOptions,
    isDisabled: isToolbarPopoverDisabled,
  } = PartitionChartsMeta[state.shape].toolbarPopover;

  return (
    <EuiFlexGroup gutterSize="none" justifyContent="spaceBetween" responsive={false}>
      <ToolbarPopover
        title={i18n.translate('xpack.lens.pieChart.valuesLabel', {
          defaultMessage: 'Labels',
        })}
        isDisabled={Boolean(isToolbarPopoverDisabled)}
        type="labels"
        groupPosition="left"
        buttonDataTestSubj="lnsLabelsButton"
      >
        {categoryOptions.length ? (
          <EuiFormRow
            label={i18n.translate('xpack.lens.pieChart.labelPositionLabel', {
              defaultMessage: 'Position',
            })}
            fullWidth
            display="columnCompressed"
          >
            <EuiSuperSelect
              compressed
              valueOfSelected={layer.categoryDisplay}
              options={categoryOptions}
              onChange={(option) => {
                setState({
                  ...state,
                  layers: [{ ...layer, categoryDisplay: option }],
                });
              }}
            />
          </EuiFormRow>
        ) : null}

        {numberOptions.length ? (
          <EuiFormRow
            label={i18n.translate('xpack.lens.pieChart.numberLabels', {
              defaultMessage: 'Values',
            })}
            fullWidth
            display="columnCompressed"
          >
            <EuiSuperSelect
              compressed
              disabled={layer.categoryDisplay === 'hide'}
              valueOfSelected={layer.categoryDisplay === 'hide' ? 'hidden' : layer.numberDisplay}
              options={numberOptions}
              onChange={(option) => {
                setState({
                  ...state,
                  layers: [{ ...layer, numberDisplay: option }],
                });
              }}
            />
          </EuiFormRow>
        ) : null}

        {numberOptions.length + categoryOptions.length ? <EuiHorizontalRule margin="s" /> : null}

        <EuiFormRow
          label={i18n.translate('xpack.lens.pieChart.percentDecimalsLabel', {
            defaultMessage: 'Maximum decimal places for percent',
          })}
          fullWidth
          display="rowCompressed"
        >
          <DecimalPlaceSlider
            value={layer.percentDecimals ?? DEFAULT_PERCENT_DECIMALS}
            setValue={(value) => {
              setState({
                ...state,
                layers: [{ ...layer, percentDecimals: value }],
              });
            }}
          />
        </EuiFormRow>
      </ToolbarPopover>
      <LegendSettingsPopover
        legendOptions={legendOptions}
        mode={layer.legendDisplay}
        onDisplayChange={(optionId) => {
          setState({
            ...state,
            layers: [
              {
                ...layer,
                legendDisplay: legendOptions.find(({ id }) => id === optionId)!.value,
              },
            ],
          });
        }}
        position={layer.legendPosition}
        onPositionChange={(id) => {
          setState({
            ...state,
            layers: [{ ...layer, legendPosition: id as Position }],
          });
        }}
        renderNestedLegendSwitch
        nestedLegend={!!layer.nestedLegend}
        onNestedLegendChange={() => {
          setState({
            ...state,
            layers: [{ ...layer, nestedLegend: !layer.nestedLegend }],
          });
        }}
        shouldTruncate={layer.truncateLegend ?? true}
        onTruncateLegendChange={() => {
          const current = layer.truncateLegend ?? true;
          setState({
            ...state,
            layers: [{ ...layer, truncateLegend: !current }],
          });
        }}
        maxLines={layer?.legendMaxLines}
        onMaxLinesChange={(val) => {
          setState({
            ...state,
            layers: [{ ...layer, legendMaxLines: val }],
          });
        }}
      />
    </EuiFlexGroup>
  );
}

const DecimalPlaceSlider = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (value: number) => void;
}) => {
  const { inputValue, handleInputChange } = useDebouncedValue(
    {
      value,
      onChange: setValue,
    },
    { allowFalsyValue: true }
  );
  return (
    <EuiRange
      data-test-subj="indexPattern-dimension-formatDecimals"
      value={inputValue}
      min={0}
      max={10}
      showInput
      compressed
      onChange={(e) => {
        handleInputChange(Number(e.currentTarget.value));
      }}
    />
  );
};

export function DimensionEditor(
  props: VisualizationDimensionEditorProps<PieVisualizationState> & {
    paletteService: PaletteRegistry;
    formatFactory: FormatFactory;
    savedObjectsClient: SavedObjectsClientContract;
    canSavePalettes: boolean;
  }
) {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [libraryPalettes, setLibraryPalettes] = useState<Array<PaletteOutput<CustomPaletteParams>>>(
    []
  );
  const {
    accessor,
    formatFactory,
    layerId,
    state,
    setState,
    paletteService,
    activeData,
    savedObjectsClient,
    canSavePalettes,
  } = props;
  const paletteStore = useMemo(
    () => new SavedObjectPaletteStore(savedObjectsClient),
    [savedObjectsClient]
  );
  useEffect(() => {
    const getPalettesFromLibrary = () => {
      getPalettesFromStore(paletteStore, 'terms').then(
        (palettes: Array<PaletteOutput<CustomPaletteParams>>) => {
          setLibraryPalettes(palettes);
        }
      );
    };
    getPalettesFromLibrary();
  }, [paletteStore]);
  const terms = computeTerms(accessor, layerId, activeData);
  const activePalette = (state.palette as PaletteOutput<CustomPaletteParams>) ?? {
    name: 'default',
    type: 'palette',
  };
  if (terms.includes('__other__')) {
    //  Move other to the beginning of the list
    terms.pop();
    terms.unshift('__other__');
  }
  const column = activeData?.[layerId].columns.find((col) => col.id === accessor);
  const savePaletteToLibrary = (palette: PaletteOutput<CustomPaletteParams>, title: string) => {
    return savePaletteToStore(paletteStore, palette, title, 'terms').then((savedPalette) => {
      setLibraryPalettes([...libraryPalettes, savedPalette]);
    });
  };
  return (
    <EuiFlexGroup
      alignItems="center"
      gutterSize="s"
      responsive={false}
      className="lnsDynamicColoringClickable"
    >
      <EuiFlexItem>
        <EuiColorPaletteDisplay
          data-test-subj="lnsPie_dynamicColoring_palette"
          palette={getDisplayPaletteColors(activePalette, props.paletteService, terms)}
          type={FIXED_PROGRESSION}
          onClick={() => {
            setIsPaletteOpen(!isPaletteOpen);
          }}
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButtonEmpty
          data-test-subj="lnsPie_dynamicColoring_trigger"
          aria-label={i18n.translate('xpack.lens.palettePieGradient.customizeLong', {
            defaultMessage: 'Edit palette',
          })}
          iconType="controlsHorizontal"
          onClick={() => {
            setIsPaletteOpen(!isPaletteOpen);
          }}
          size="xs"
          flush="both"
        >
          {i18n.translate('xpack.lens.palettePieGradient.customize', {
            defaultMessage: 'Edit',
          })}
        </EuiButtonEmpty>
        <PalettePanelContainer
          siblingRef={props.panelRef}
          isOpen={isPaletteOpen}
          handleClose={() => setIsPaletteOpen(!isPaletteOpen)}
        >
          <CustomizableTermsPalette
            fieldFormatter={formatFactory(column?.meta.params)}
            libraryPalettes={libraryPalettes}
            palettes={paletteService}
            activePalette={activePalette}
            terms={terms}
            setPalette={(newPalette) => {
              setState({ ...state, palette: newPalette });
            }}
            savePaletteToLibrary={savePaletteToLibrary}
            enableSave={canSavePalettes}
          />
        </PalettePanelContainer>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
